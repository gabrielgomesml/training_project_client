import React, { ChangeEvent } from 'react';
import { InputField } from './style';
import { useDebounceCallback } from '../../hooks/debounce';

interface InputProps {
  placeholderName: string;
  type: string;
  onChangeAction: (value: string) => void;
  value: string;
  width: string;
  height: string;
}

export const Input: React.ElementType<InputProps> = ({
  placeholderName,
  type,
  onChangeAction,
  width,
  height,
  value,
}: InputProps) => {
  const handleChange = useDebounceCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      console.log('Entrou aqui!');
      onChangeAction(e.target.value);
    },
    500,
  );
  return (
    <InputField
      placeholder={placeholderName}
      type={type}
      onChange={handleChange}
      $width={width}
      $height={height}
      value={value}
    />
  );
};
