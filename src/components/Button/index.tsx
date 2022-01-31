import React from 'react';
import { ButtonInput } from './style';

export interface ButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
  text: string;
}

const Button: React.ElementType<ButtonProps> = ({
  width,
  height,
  backgroundColor,
  text,
}) => (
  <ButtonInput width={width} height={height} backgroundColor={backgroundColor}>
    {text}
  </ButtonInput>
);

export default Button;
