import React, { ChangeEvent } from 'react';
import { InputField } from './style';

interface InputProps {
  placeholderName: string;
  type: string;
  onChangeAction: (label: string, value: string) => void;
  value: string;
  width?: number;
  height?: number;
  label: string;
}

export const Input: React.ElementType<InputProps> = ({
  placeholderName,
  type,
  onChangeAction,
  width,
  height,
  label,
  value,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeAction(label, e.target.value);
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
