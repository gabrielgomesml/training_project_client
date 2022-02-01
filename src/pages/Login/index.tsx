import React, { useState } from 'react';
import theme from '../../assets/styles/theme';
import { Button, Input } from '../../components';
import Logo from '../../assets/icons/cinema.png';
import {
  MainContainer,
  ContentContainer,
  InputsContainer,
  LogoImage,
} from './style';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <MainContainer>
      <ContentContainer>
        <LogoImage src={Logo} />
        <InputsContainer>
          <Input
            placeholderName="Email"
            type="text"
            onChangeAction={setEmail}
          />
          <Input
            placeholderName="Senha"
            type="password"
            onChangeAction={setPassword}
          />
        </InputsContainer>
        <Button
          width={250}
          height={45}
          backgroundColor={theme.colors.mainRed}
          text="Login"
        />
      </ContentContainer>
    </MainContainer>
  );
};

export default Login;
