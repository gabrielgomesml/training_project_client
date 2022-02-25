import styled from 'styled-components';

export interface InputProps {
  $width?: string;
  $height?: string;
}

export const InputField = styled.input<InputProps>`
  font-size: 18px;
  width: ${(props) => props.$width};
  height: ${(props) => props.$height};
  font-size: 16px;
  border: 0.5px solid #c9c9c9;
  color: rgb(31, 31, 31, 0.8);
  padding: 1.5px 8px;
  border-radius: 0.5px;
  outline: none;
`;
