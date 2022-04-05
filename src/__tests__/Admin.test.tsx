import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Admin from '../pages/Admin';

describe('<Admin />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Admin />
      </BrowserRouter>,
    );
  });

  it('Loader spinner should appear before data is loaded', () => {
    const loaderSpinner = screen.getByTestId('loader-component');
    expect(loaderSpinner).toBeInTheDocument();
  });

  it('Should appear the page component when the data is loaded', async () => {
    const pageTitle = await screen.findByText('Usuários');
    expect(pageTitle).toBeInTheDocument();
  });

  it('When toggle is clicked the confirmation modal should appear and the cancel button is clicked the modal should disappear', async () => {
    const toggle = await screen.findAllByRole('checkbox');
    fireEvent.click(toggle[0]);
    const modalTitle = await screen.findByText(
      'Você tem certeza que deseja desativar esse usuário?',
    );
    expect(modalTitle).toBeInTheDocument();
    const cancelButton = await screen.findByRole('button', {
      name: 'Cancelar',
    });
    fireEvent.click(cancelButton);
    expect(modalTitle).not.toBeInTheDocument();
  });
});
