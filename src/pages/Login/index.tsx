/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import theme from '../../assets/styles/theme';
import { Button, Input } from '../../components';
import Logo from '../../assets/icons/cinema.png';
import {
  MainContainer,
  ContentContainer,
  InputsContainer,
  LogoImage,
} from './style';

class Login extends React.Component {
  render(): React.ReactNode {
    return (
      <MainContainer>
        <ContentContainer>
          <LogoImage src={Logo} />
          <InputsContainer>
            <Input
              placeholderName="Email"
              type="text"
              onChangeAction={() => console.log('oi')}
            />
            <Input
              placeholderName="Senha"
              type="password"
              onChangeAction={() => console.log('oi')}
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
  }
}

export default Login;
