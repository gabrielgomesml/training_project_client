import styled from 'styled-components';

export interface InputProps {
  width?: number;
  height?: number;
}

export const InputField = styled.input`
  font-size: 18px;
  width: ${(props: InputProps) => props.width || 314}px;
  height: ${(props: InputProps) => props.height || 34}px;
  font-size: ${(props) => (props.height ? props.height / 2 : 16)}px;
  border: 0.5px solid #c9c9c9;
  color: rgb(31, 31, 31, 0.8);
  padding: 1.5px 8px;
  border-radius: 0.5px;
  outline: none;
`;
