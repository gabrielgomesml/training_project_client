import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';

describe('<Home />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
  });

  it('Loader spinner should appear before data is loaded', () => {
    const loaderSpinner = screen.getByTestId('loader-component');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('Should get the data', async () => {
    const filmLine = await screen.findAllByTestId('film-line-component');
    expect(filmLine.length).toBe(3);
  });

  it('Loader spinner should disappear after get the data', async () => {
    await screen.findAllByTestId('film-line-component');
    const loaderSpinner = screen.queryByTestId('loader-component');
    expect(loaderSpinner).not.toBeInTheDocument();
  });

  it('Data should change with typing searching input', async () => {
    const searchInputElement = await screen.findByPlaceholderText(
      /Pesquise um filme.../i,
    );
    fireEvent.change(searchInputElement, { target: { value: 'c' } });
    const filmLine = await screen.findByText('Call Me by Your Name');
    expect(filmLine).toBeInTheDocument();
  });

  it('Should appear movies not found message when theres no movies in it', async () => {
    const searchInputElement = await screen.findByPlaceholderText(
      /Pesquise um filme.../i,
    );
    fireEvent.change(searchInputElement, { target: { value: 'z' } });
    const notFound = await screen.findByText('Filmes não encontrados.');
    expect(notFound).toBeInTheDocument();
  });

  it('When a filmLine is clicked a modal should appear', async () => {
    const filmLine = await screen.findAllByTestId('film-line-component');
    fireEvent.click(filmLine[0]);
    const filmBoxTitle = await screen.findByTestId('film-box-title');
    expect(filmBoxTitle).toBeInTheDocument();
  });
});
