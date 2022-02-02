import styled from 'styled-components';

export interface ButtonProps {
  width?: number;
  height?: number;
  backgroundColor?: string;
}

export const ButtonInput = styled.button<ButtonProps>`
  background: ${(props) => props.backgroundColor || 'white'};
  width: ${(props) => props.width || 208}px;
  height: ${(props) => props.height || 30}px;
  font-size: ${(props) => (props.height ? props.height / 2.5 : 10)}px;
  border-radius: 50px;
  cursor: pointer;
  color: #ffffff;
  border: none;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
