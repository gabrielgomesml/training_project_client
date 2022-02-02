import React, { ChangeEvent } from 'react';
import { InputField } from './style';

interface InputProps {
  placeholderName: string;
  type: string;
  onChangeAction: (value: string) => void;
  width?: number;
  height?: number;
}

const Input: React.ElementType<InputProps> = ({
  placeholderName,
  type,
  onChangeAction,
  width,
  height,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeAction(e.target.value);
  };
  return (
    <InputField
      placeholder={placeholderName}
      type={type}
      onChange={handleChange}
      $width={width}
      $height={height}
    />
  );
};

export default Input;
