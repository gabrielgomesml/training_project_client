type Movie = {
  id: string;
  title: string;
  poster: string | null;
  synopsis: string;
  release_year: string;
  createdAt: string;
};

export interface MoviesUser {
  id: string;
  movie_id: string;
  user_id: string;
  created_at: string;
  movie: Movie;
}

export const moviesUserMock: MoviesUser[] = [
  {
    id: '3dd2ff3f-0f92-4f3e-b844-ef718bcab859',
    movie_id: 'b3ba941a-1bd2-4cde-941f-a4e59e659e0f',
    user_id: 'c2c59387-e2bd-418f-a135-eee169d4ae54',
    created_at: '2022-02-23T19:39:03.669Z',
    movie: {
      id: 'b3ba941a-1bd2-4cde-941f-a4e59e659e0f',
      title: 'The Shape of Water',
      poster:
        'https://www.laoliphant.com.br/wp-content/uploads/2018/01/the-shape-water-carta-amor-diferente-imagem-1.jpg',
      synopsis:
        "Elisa is a mute, isolated woman who works as a cleaning lady in a hidden, high-security government laboratory in 1962 Baltimore. Her life changes forever when she discovers the lab's classified secret -- a mysterious, scaled creature from South America that lives in a water tank. As Elisa develops a unique bond with her new friend, she soon learns that its fate and very survival lies in the hands of a hostile government agent and a marine biologist.",
      release_year: '2017',
      createdAt: '2022-02-16T20:15:51.747Z',
    },
  },
  {
    id: 'cdb8625c-77cb-44ec-9654-d04e121afc68',
    movie_id: 'd140bc9b-1f51-4f86-99f9-5502c4e3664a',
    user_id: 'c2c59387-e2bd-418f-a135-eee169d4ae54',
    created_at: '2022-02-23T19:38:58.366Z',
    movie: {
      id: 'd140bc9b-1f51-4f86-99f9-5502c4e3664a',
      title: 'Call Me by Your Name',
      poster:
        'https://images.indianexpress.com/2019/12/Call-Me-By-Your-Name-759.jpg',
      synopsis:
        "It's the summer of 1983, and precocious 17-year-old Elio Perlman is spending the days with his family at their 17th-century villa in Lombardy, Italy. He soon meets Oliver, a handsome doctoral student who's working as an intern for Elio's father. Amid the sun-drenched splendor of their surroundings, Elio and Oliver discover the heady beauty of awakening desire over the course of a summer that will alter their lives forever.",
      release_year: '2017',
      createdAt: '2022-02-16T15:29:54.605Z',
    },
  },
  {
    id: 'ffb76f2d-615b-49e5-a889-16e2b3c44531',
    movie_id: '4d541f36-3e45-437e-a953-996433cc8696',
    user_id: 'c2c59387-e2bd-418f-a135-eee169d4ae54',
    created_at: '2022-02-25T17:58:23.586Z',
    movie: {
      id: '4d541f36-3e45-437e-a953-996433cc8696',
      title: 'Filme de teste',
      poster: null,
      synopsis: 'TESTE',
      release_year: '2323',
      createdAt: '2022-02-25T17:58:23.558Z',
    },
  },
];
