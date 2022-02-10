export const regExpTypes = [
  { type: 'text', regExp: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+/ },
  { type: 'numeric', regExp: /^[0-9]*$/ },
  { type: 'alphanumeric', regExp: /^[a-z A-Z à-ú À-Ú 0-9]*$/ },
  {
    type: 'password',
    regExp:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/,
  },
  { type: 'tel', regExp: /[(]?[1-9]{2}[)]? ?[0-9]{4,5}-?[0-9]{4}/ },
  {
    type: 'email',
    regExp:
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*/,
  },
];

export const passwordTypes = {
  upperCase: /([A-Z])/,
  number: /[0-9]{1,}/,
  specialCharacter: /(?=.*[@$!%*?&])/,
  len: /[A-Za-z\d@$!%*?&]{10,}$/,
};

export const checkValues = (type: string, value: string) => {
  if (type === 'password') {
    if (!passwordTypes.upperCase.test(value)) {
      return 'O campo deve conter uma letra maiúscula';
    }
    if (!passwordTypes.number.test(value)) {
      return 'O campo deve conter um número';
    }
    if (!passwordTypes.specialCharacter.test(value)) {
      return 'O campo deve conter um caractere especial';
    }
    if (!passwordTypes.len.test(value)) {
      return 'O campo deve conter no mínimo 10 caracteres';
    }
    return '';
  }

  const regExpType = regExpTypes.find((item) => item.type === type);
  const match = regExpType?.regExp.test(value);

  return match;
};
