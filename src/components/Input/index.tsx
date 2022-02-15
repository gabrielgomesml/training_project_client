import React, { ChangeEvent } from 'react';
import { InputField } from './style';

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
      value={value}
    />
  );
};
