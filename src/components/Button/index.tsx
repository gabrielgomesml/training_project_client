import React from 'react';
import theme from '../../assets/styles/theme';
import { ButtonInput } from './style';

const Button: React.ElementType = () => (
  <ButtonInput width={300} height={60} backgroundColor={theme.colors.mainRed}>
    Clique aqui
  </ButtonInput>
);

export default Button;
