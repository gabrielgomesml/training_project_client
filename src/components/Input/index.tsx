import React, { ChangeEvent } from 'react';
import { InputField } from './style';

interface InputProps {
  placeholderName: string;
  type: string;
  onChangeAction: (value: string) => void;
}

const Input: React.ElementType<InputProps> = ({
  placeholderName,
  type,
  onChangeAction,
}: InputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChangeAction(e.target.value);
  };
  return (
    <InputField
      placeholder={placeholderName}
      type={type}
      onChange={handleChange}
    />
  );
};

export default Input;
