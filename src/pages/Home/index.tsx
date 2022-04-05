import React, { useCallback, useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';
import { Link } from 'react-router-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { Modal, Input } from '../../components';
import { FilmLine } from './components/FilmLine';
import { FilmBox } from './components/FilmBox';
import {
  MainContainer,
  ContentContainer,
  AddMovie,
  TopContainer,
} from './style';
import Logo from '../../assets/icons/cinema.png';
import api from '../../services/api';
import { MoviesData } from './types';
import { especificMovieMock, moviesSuggestionsMock, genresMock } from './mocks';
import { useDebounceCallback } from '../../hooks/debounce';

interface HomeProps {
  setLoading: (value: boolean) => void;
}

export const Home: React.FC<HomeProps> = ({ setLoading }) => {
  const [showModal, setShowModal] = useState(false);
  const [search, setSearch] = useState('');
  const token = Cookies.get('@training-project:token');
  const [movies, setMovies] = useState<MoviesData[]>([]);
  const [specificMovie, setSpecificMovie] =
    useState<MoviesData>(especificMovieMock);

  const sectionRef = useRef<any>();

  const loadMovies = useCallback(async () => {
    const headers = {
      authorization: `Bearer ${token.replace(/["]+/g, '')}`,
    };
    const response = await fetch(`${api}movies-users-user-id?text=${search}`, {
      headers,
    });
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
  }, [search, setLoading, token]);

  const debounceSearch = useDebounceCallback(loadMovies, 500);

  const loadSpecificMovie = useCallback(
    async (movieId: string) => {
      const headers = {
        authorization: `Bearer ${token.replace(/["]+/g, '')}`,
      };
      const response = await fetch(`${api}movies/${movieId}`, { headers });
      const data = await response.json();
      setSpecificMovie(data);
      setShowModal(true);
      disableBodyScroll(sectionRef);
    },
    [token],
  );

  useEffect(() => {
    debounceSearch();
  }, [debounceSearch, search]);

  useEffect(() => {
    if (!showModal) {
      enableBodyScroll(sectionRef);
    }
  }, [showModal]);

  return (
    <MainContainer ref={sectionRef}>
      <ContentContainer>
        <TopContainer>
          <Input
            type="text"
            value={search}
            onChangeAction={setSearch}
            width="100%"
            height="34px"
            placeholderName="Pesquise um filme..."
          />
          <Link to="/adicionar-filme" style={{ textDecoration: 'none' }}>
            <AddMovie>
              <h1 style={{ color: '#ffffff' }}>+</h1>
            </AddMovie>
          </Link>
        </TopContainer>
        {movies.length === 0 ? (
          <h3>Filmes não encontrados.</h3>
        ) : (
          movies.map(({ id, title, poster, synopsis }) => (
            <FilmLine
              title={title}
              text={synopsis || 'Sem sinopse fornecida'}
              image={poster || Logo}
              handleClick={() => loadSpecificMovie(id)}
            />
          ))
        )}
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
