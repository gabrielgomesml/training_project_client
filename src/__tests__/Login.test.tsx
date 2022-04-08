import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Login } from '../pages';

describe('<Login />', () => {
  beforeEach(() => {
    render(
      // BrowserRouter aqui porque a página de Login usa <Link> e o Jest estava reclamando que não se deve usar Link fora de um <Router>
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
  });

  it('Should appear missing e-mail and password message when login button is cliked with empty fields', () => {
    const buttonElement = screen.getByRole('button', { name: /Login/i });
    fireEvent.click(buttonElement);
    expect(
      screen.getByText('Você deve fornercer um e-mail e uma senha.'),
    ).toBeInTheDocument();
  });

  it('Should appear missing password message when login button is clicked with password field empty', () => {
    const buttonElement = screen.getByRole('button', { name: /Login/i });
    const emailInputElement = screen.getByPlaceholderText(/E-mail/i);
    fireEvent.change(emailInputElement, {
      target: { value: 'xgabrielgomesmelo@gmail.com' },
    });
    fireEvent.click(buttonElement);
    expect(
      screen.getByText('Você deve fornercer uma uma senha.'),
    ).toBeInTheDocument();
  });

  it('Should appear missing password message when login button is clicked with e-mail field empty', () => {
    const buttonElement = screen.getByRole('button', { name: /Login/i });
    const passwordInputElement = screen.getByPlaceholderText(/Senha/i);
    fireEvent.change(passwordInputElement, {
      target: { value: 'A$fgdfsg232dg' },
    });
    fireEvent.click(buttonElement);
    expect(
      screen.getByText('Você deve fornercer um e-mail.'),
    ).toBeInTheDocument();
  });

  // it('Should login', async () => {
  //   const emailInputElement = screen.getByPlaceholderText(/E-mail/i);
  //   const passwordInputElement = screen.getByPlaceholderText(/Senha/i);
  //   const buttonElement = screen.getByRole('button', { name: /Login/i });

  //   fireEvent.change(emailInputElement, {
  //     target: { value: 'emailtest@gmail.com' },
  //   });

  //   fireEvent.change(passwordInputElement, {
  //     target: { value: 'A$fgdfsg232dg' },
  //   });

  //   fireEvent.click(buttonElement);

  //   expect(
  //     await screen.findByText('E-mail ou senha incorretos.'),
  //   ).not.toBeInTheDocument();
  // });
});
