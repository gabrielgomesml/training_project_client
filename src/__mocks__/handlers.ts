import { rest } from 'msw';
import api from '../services/api';
import filterMovies from '../utils/filterMovies';
import updateUser from '../utils/updateUser';
import { users, userAuth, moviesUserMock } from './mockData';

export const handlers = [
  rest.post(`${api}user-auth`, (req, res, ctx) =>
    res(ctx.status(201), ctx.json(userAuth)),
  ),
  rest.get(`${api}movies-users-user-id`, (req, res, ctx) => {
    const searchText = req.url.searchParams.get('text');
    if (searchText !== '' && searchText !== null) {
      return res(
        ctx.status(200),
        ctx.json(filterMovies(moviesUserMock, 'title', searchText)),
      );
    }
    return res(ctx.status(200), ctx.json(moviesUserMock));
  }),
  rest.get(`${api}movies/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(moviesUserMock[0])),
  ),
  rest.get(`${api}users`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(users)),
  ),
  rest.get(`${api}users/*`, (req, res, ctx) =>
    res(ctx.status(200), ctx.json(users[0])),
  ),
  rest.patch(`${api}users/*`, (req, res, ctx) => {
    res(ctx.status(200), ctx.json(updateUser(users[0], 'active', false)));
  }),
];
