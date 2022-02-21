import React, { useCallback, useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { Modal, Input } from '../../components';
import { FilmLine } from './components/FilmLine';
import { FilmBox } from './components/FilmBox';
import { MainContainer, ContentContainer } from './style';
import Logo from '../../assets/icons/cinema.png';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';
import { MoviesData } from './types';
import { especificMovieMock, moviesSuggestionsMock, genresMock } from './mocks';
import { useDebounceCallback } from '../../hooks/debounce';

export const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<MoviesData[]>([]);
  const [specificMovie, setSpecificMovie] =
    useState<MoviesData>(especificMovieMock);
  const { ...authInfo } = useAuth();

  const loadMovies = useCallback(async () => {
    const response = await fetch(
      `${api}movies-users-user-id/${authInfo.user?.id}?text=${search}`,
    );
    const data = await response.json();
    setMovies(
      data?.map((movieUser: { movie: MoviesData }) => ({
        id: movieUser.movie.id,
        title: movieUser.movie.title,
        poster: movieUser.movie.poster,
        release_year: movieUser.movie.release_year,
        synopsis: movieUser.movie.synopsis,
        created_at: movieUser.movie.createdAt,
      })),
    );
    setLoading(false);
  }, [authInfo.user?.id, search]);

  const debounceSearch = useDebounceCallback(loadMovies, 500);

  const loadSpecificMovie = useCallback(async (movieId: string) => {
    const response = await fetch(`${api}movies/${movieId}`);
    const data = await response.json();
    setSpecificMovie(data);
    setShowModal(true);
  }, []);

  useEffect(() => {
    debounceSearch();
  }, [debounceSearch, search]);

  return (
    <MainContainer>
      <ContentContainer>
        <Input
          type="text"
          value={search}
          onChangeAction={setSearch}
          width="100%"
          height="34px"
          placeholderName="Pesquise um filme..."
        />
        {loading && <TailSpin color="#B22222" height={80} width={80} />}
        {movies.map(({ id, title, poster, synopsis }) => (
          <FilmLine
            title={title}
            text={synopsis || 'Sem sinopse fornecida'}
            image={poster || Logo}
            handleClick={() => loadSpecificMovie(id)}
          />
        ))}
        <Modal showModal={showModal} setShowModal={setShowModal}>
          <FilmBox
            title={specificMovie.title}
            release_year={specificMovie.release_year}
            text={specificMovie.synopsis || 'Sem sinopse fornecida'}
            genres={genresMock}
            image={specificMovie.poster || Logo}
            suggestions={moviesSuggestionsMock}
          />
        </Modal>
      </ContentContainer>
    </MainContainer>
  );
};
