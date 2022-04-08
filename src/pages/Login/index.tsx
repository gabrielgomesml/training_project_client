import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../assets/styles/theme';
import { Button, Input } from '../../components';
import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/icons/cinema.png';
import {
  MainContainer,
  ContentContainer,
  InputsContainer,
  LogoImage,
} from './style';

export const Login: React.FC = () => {
  // Hook sempre na raiz
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { signIn } = useAuth();

  const handleErrorMessage = (error: 1 | 2 | 3 | 4) => {
    switch (error) {
      case 1:
        setErrorMessage('Você deve fornercer um e-mail e uma senha.');
        break;
      case 2:
        setErrorMessage('Você deve fornercer um e-mail.');
        break;
      case 3:
        setErrorMessage('Você deve fornercer uma uma senha.');
        break;
      case 4:
        setErrorMessage('E-mail ou senha incorretos.');
        break;
      default:
        setErrorMessage('');
    }
  };
  return (
    <MainContainer>
      <ContentContainer>
        <LogoImage src={Logo} />
        <InputsContainer>
          <Input
            placeholderName="E-mail"
            type="text"
            onChangeAction={setEmail}
            value={email}
            width="314px"
            height="34px"
          />
          <Input
            placeholderName="Senha"
            type="password"
            onChangeAction={setPassword}
            value={password}
            width="314px"
            height="34px"
          />
          <p style={{ color: theme.colors.mainRed }}>{errorMessage}</p>
        </InputsContainer>
        <Link to="/cadastro">
          <p>Cadastre-se</p>
        </Link>
        <Button
          handleButton={async () => {
            if (email === '' && password === '') {
              handleErrorMessage(1);
            } else if (email === '') {
              handleErrorMessage(2);
            } else if (password === '') {
              handleErrorMessage(3);
            } else {
              const signInStatus = signIn({ email, password });
              if ((await signInStatus) !== 200) {
                handleErrorMessage(4);
              }
            }
          }}
          width={250}
          height={45}
          backgroundColor={theme.colors.mainRed}
          text="Login"
        />
      </ContentContainer>
    </MainContainer>
  );
};
