import React, { useCallback, useState, useEffect, useRef } from 'react';
import Select from 'react-select';
import { useHistory } from 'react-router-dom';
import theme from '../../assets/styles/theme';
import { Genre } from './types';
import { Input, Button, Snack } from '../../components';
import { MainContainer, ContentContainer } from './style';
import useRequest from '../../hooks/useRequest';
import { snacksDisplay } from '../../utils/snacksDisplay';
import Warning from '../../assets/icons/warning.png';

export const AddMovie: React.FC = () => {
  const [title, setTitle] = useState('');
  const [synopsis, setSynopsis] = useState('');
  const [release_year, setRelease_year] = useState('');
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<any>([]);
  const [showSnack, setShowSnack] = useState(false);
  const [snackInfos, setSnackInfos] = useState({
    text: '',
    color: '',
    icon: null,
  });

  const history = useHistory();
  const redirectRef = useRef<ReturnType<typeof setTimeout>>();

  const [getRequest] = useRequest('get');
  const [postRequest] = useRequest('post');

  const errorRedirect = useCallback(() => {
    redirectRef.current = setTimeout(() => {
      history.push('/pagina-inicial');
    }, 6000);
  }, [history]);

  const loadGenres = useCallback(async () => {
    try {
      const response = await getRequest({
        url: 'genres',
        auth: true,
      });
      setGenres(
        response.data.map((genre: { id: string; name: string }) => ({
          value: genre.id,
          label: genre.name,
        })),
      );
    } catch (error) {
      snacksDisplay('LOADGENRES', setShowSnack, setSnackInfos);
      errorRedirect();
    }
  }, [errorRedirect, getRequest]);

  const relateMovieToUser = useCallback(
    async (movie_id: string) => {
      try {
        await postRequest({
          url: 'movies-users',
          auth: true,
          body: { movie_id },
        });
      } catch (error) {
        snacksDisplay('RELATEMOVIETOUSER', setShowSnack, setSnackInfos);
        errorRedirect();
      }
    },
    [errorRedirect, postRequest],
  );

  const relateMovieToGenres = useCallback(
    async (movie_id: string, genre_id: string) => {
      try {
        await postRequest({
          url: 'genres-movies',
          auth: true,
          body: { movie_id, genre_id },
        });
      } catch (error) {
        snacksDisplay('RELATEMOVIETOGENRES', setShowSnack, setSnackInfos);
        errorRedirect();
      }
    },
    [errorRedirect, postRequest],
  );

  const createMovie = useCallback(async () => {
    try {
      const response = await postRequest({
        url: 'movies',
        auth: true,
        body: { title, synopsis, release_year },
      });
      if (response.status === 201) {
        const { id } = response.data;
        relateMovieToUser(id);
        selectedGenres.forEach((genre: Genre) => {
          relateMovieToGenres(id, genre.value);
        });
        snacksDisplay('CREATEMOVIE', setShowSnack, setSnackInfos, 201);
        setRelease_year('');
        setTitle('');
        setSelectedGenres([]);
        setSynopsis('');
      }
    } catch (error) {
      snacksDisplay('CREATEMOVIE', setShowSnack, setSnackInfos);
      errorRedirect();
    }
  }, [
    errorRedirect,
    postRequest,
    relateMovieToGenres,
    relateMovieToUser,
    release_year,
    selectedGenres,
    synopsis,
    title,
  ]);

  useEffect(() => {
    loadGenres();
  }, [loadGenres]);

  useEffect(
    () => () => {
      if (redirectRef.current) {
        clearTimeout(redirectRef.current);
      }
    },
    [],
  );

  return (
    <MainContainer>
      <Snack
        text={snackInfos.text}
        showSnack={showSnack}
        setShowSnack={setShowSnack}
        color={snackInfos.color}
        icon={snackInfos.icon}
      />
      <ContentContainer>
        <div className="title">
          <Input
            type="text"
            value={title}
            onChangeAction={setTitle}
            width="100%"
            height="34px"
            placeholderName="Título*"
          />
        </div>
        <div className="synopsis">
          <Input
            type="text"
            value={synopsis}
            onChangeAction={setSynopsis}
            width="100%"
            height="34px"
            placeholderName="Sinopse*"
          />
        </div>
        <div className="release_year">
          <Input
            type="text"
            value={release_year}
            onChangeAction={setRelease_year}
            width="75%"
            height="34px"
            placeholderName="Ano de lançamento*"
          />
        </div>
        <div className="select">
          <Select
            placeholder="Gêneros*"
            options={genres}
            onChange={setSelectedGenres}
            isMulti
          />
        </div>
        <div className="add_button">
          <Button
            handleButton={() => {
              if (
                title === '' ||
                release_year === '' ||
                synopsis === '' ||
                genres === []
              ) {
                setSnackInfos({
                  text: 'Você deve preencher todos os campos',
                  color: theme.colors.mainOrange,
                  icon: Warning,
                });
                setShowSnack(true);
              } else {
                createMovie();
              }
            }}
            width={150}
            height={34}
            backgroundColor={theme.colors.mainBlack}
            text="Adicionar filme"
          />
        </div>
      </ContentContainer>
    </MainContainer>
  );
};
