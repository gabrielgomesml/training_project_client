import React from 'react';
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
  const handleChange = (valueData: string) => {
    onChangeAction(valueData);
  };

  return (
    <InputField
      placeholder={placeholderName}
      type={type}
      onChange={({ target: { value: valueData } }) => handleChange(valueData)}
      $width={width}
      $height={height}
      value={value}
    />
  );
};
