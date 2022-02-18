import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import theme from '../../assets/styles/theme';
import { Button, Input } from '../../components';
import { useAuth } from '../../hooks/auth';
import Logo from '../../assets/icons/cinema.png';
import { useDebounceCallback } from '../../hooks/debounce';
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
  const { signIn } = useAuth();
  const consoleEmail = useCallback(() => {
    console.log(email);
  }, [email]);
  const debounce = useDebounceCallback(consoleEmail, 3000);

  const handleChange = (value: string) => {
    setEmail(value);
  };

  useEffect(() => {
    debounce();
  }, [email, debounce]);

  return (
    <MainContainer>
      <ContentContainer>
        <LogoImage src={Logo} />
        <InputsContainer>
          <Input
            placeholderName="Email"
            type="text"
            onChangeAction={handleChange}
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
        </InputsContainer>
        <Link to="/cadastro">
          <p>Cadastre-se</p>
        </Link>
        <Button
          handleButton={() => signIn({ email, password })}
          width={250}
          height={45}
          backgroundColor={theme.colors.mainRed}
          text="Login"
        />
      </ContentContainer>
    </MainContainer>
  );
};
