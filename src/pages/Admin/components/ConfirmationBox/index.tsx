import React from 'react';
import { MainContainer, ButtonContainer, Button } from './style';
import theme from '../../../../assets/styles/theme';

interface ConfirmationBoxProps {
  name: string;
  cancelButton: () => void;
  confirmButton: () => void;
}

export const ConfirmationBox: React.ElementType<ConfirmationBoxProps> = ({
  name,
  cancelButton,
  confirmButton,
}) => (
  <MainContainer>
    <h1>Você tem certeza que deseja desativar esse usuário?</h1>
    <p>
      Desativando <b>{name}</b> você estará impedindo que ele acesse a
      plataforma no momento de login.
    </p>
    <ButtonContainer>
      <Button
        style={{ backgroundColor: theme.colors.mainGray }}
        onClick={() => cancelButton()}
      >
        Cancelar
      </Button>
      <Button
        style={{ backgroundColor: theme.colors.mainRed, color: '#ffffff' }}
        onClick={() => confirmButton()}
      >
        Confirmar
      </Button>
    </ButtonContainer>
  </MainContainer>
);
