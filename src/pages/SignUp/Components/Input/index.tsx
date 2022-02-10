import React, { ChangeEvent, useState } from 'react';
import { InputField } from './style';
import { checkValues } from './regex';

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
  const [errorText, setErrorText] = useState('');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const match = checkValues(type, e.target.value);
    switch (type) {
      case 'alpha':
        if (!match) {
          setErrorText('O campo deve conter apenas letras');
        } else {
          setErrorText('');
        }
        break;

      case 'numeric':
        if (!match) {
          setErrorText('O campo deve conter apenas números');
        } else {
          setErrorText('');
        }
        break;

      case 'alphanumeric':
        if (!match) {
          setErrorText('O campo deve conter apenas letras e/ou números');
        } else {
          setErrorText('');
        }
        break;

      case 'tel':
        if (!match) {
          setErrorText(
            'O campo deve conter apenas números, sendo DDD + número de telefone.',
          );
        } else {
          setErrorText('');
        }
        break;

      case 'email':
        if (!match) {
          setErrorText('Email inválido');
        } else {
          setErrorText('');
        }
        break;

      case 'password':
        setErrorText(match);
        break;

      default:
        break;
    }
    onChangeAction(label, e.target.value);
  };
  return (
    <>
      <InputField
        placeholder={placeholderName}
        type={type}
        onChange={handleChange}
        $width={width}
        $height={height}
        value={value}
      />
      <p>{errorText}</p>
    </>
  );
};
