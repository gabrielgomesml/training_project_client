import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';
import { SignUp } from '../pages';

describe('<SignUp />', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SignUp />
        </Provider>
      </BrowserRouter>,
    );
  });

  const getPlaceholders = (placeholders: string[]) => {
    const inputs = [];
    placeholders.forEach((placeholder) => {
      inputs.push(screen.getByPlaceholderText(placeholder));
    });
    return inputs;
  };

  const expectToBeInTheDocument = (elements: HTMLElement[]) => {
    elements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
  };

  const checkStep = (step: HTMLElement, placeholders: HTMLElement[]) => {
    expect(step).toBeInTheDocument();
    expectToBeInTheDocument(placeholders);
  };

  it('Should appear differents inputs by step', () => {
    const nextButton = screen.getByRole('button', { name: /Prosseguir/i });
    let step = screen.getByText('Dados de Login');
    let inputs = getPlaceholders(['E-mail*', 'Senha*', 'Repita sua senha*']);
    checkStep(step, inputs);
    inputs.forEach((input) => {
      fireEvent.change(input, { target: { value: 'Test2022@fake' } });
    });
    fireEvent.click(nextButton);

    step = screen.getByText('Dados Pessoais');
    inputs = getPlaceholders(['Nome*', 'Sobrenome*', 'Telefone']);
    checkStep(step, inputs);
  });

  it('Inputs shold turn red when they are empty and next button is clicked', () => {
    const nextButton = screen.getByRole('button', { name: /Prosseguir/i });
    const inputs = getPlaceholders(['Nome*', 'Sobrenome*', 'Telefone']);
    fireEvent.click(nextButton);
    inputs.slice(0, 2).forEach((input) => {
      expect(input).toHaveStyle('border: 1px solid #b22222');
    });
    const errorText = screen.getByText('Campos inválidos');
    expect(errorText).toBeInTheDocument();
  });
});
