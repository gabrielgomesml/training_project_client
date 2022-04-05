import { MoviesUser } from '../__mocks__/mockData/moviesUser';

const filterMovies = (
  data: MoviesUser[],
  property: string,
  searchText: string,
) => {
  const newArray = data.filter((movieUser) => {
    switch (property) {
      case 'title':
        return movieUser.movie.title
          .toLocaleLowerCase()
          .includes(searchText.toLocaleLowerCase());
      default:
        return [];
    }
  });

  return newArray;
};

export default filterMovies;
