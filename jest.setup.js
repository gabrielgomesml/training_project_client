import { server } from './src/__mocks__/server';
import 'whatwg-fetch'
import '@testing-library/jest-dom'

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'error',
  }),
);
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
