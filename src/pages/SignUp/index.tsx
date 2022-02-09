import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Upload from '../../assets/icons/upload.png';
import theme from '../../assets/styles/theme';
import * as signUpActions from '../../store/actions-creators/index';
import {
  MainContainer,
  ContentContainer,
  Title,
  InputsContainer,
  UploadImage,
} from './style';
import { Input } from './Components/Input';
import { Button } from '../../components';
import { State } from '../../store/reducers';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const { toggleStep, updateValue } = bindActionCreators(
    signUpActions,
    dispatch,
  );

  const signUpInfos = useSelector((signUpState: State) => signUpState.signUp);

  useEffect(() => {
    console.log(signUpInfos);
  }, [signUpInfos]);

  return (
    <MainContainer>
      <ContentContainer>
        <Title>{signUpInfos.step}</Title>
        <button onClick={() => toggleStep('back')}>voltar</button>
        {signUpInfos.step === 'Foto de Perfil' && (
          <label htmlFor="photo_input">
            <UploadImage src={Upload} />
          </label>
        )}
        <InputsContainer>
          {signUpInfos.step === 'Dados de Login' && (
            <>
              <Input
                placeholderName="Email"
                type="text"
                onChangeAction={updateValue}
                label="email"
                value={signUpInfos.email}
              />
              <Input
                placeholderName="Senha"
                type="password"
                onChangeAction={updateValue}
                label="password"
                value={signUpInfos.password}
              />
              <Input
                placeholderName="Repita sua senha"
                type="password"
                onChangeAction={updateValue}
                label="confirmPassword"
                value={signUpInfos.confirmPassword}
              />
            </>
          )}
          {signUpInfos.step === 'Dados Pessoais' && (
            <>
              <Input
                placeholderName="Nome"
                type="text"
                onChangeAction={updateValue}
                label="name"
                value={signUpInfos.name}
              />
              <Input
                placeholderName="Sobrenome"
                type="text"
                onChangeAction={updateValue}
                label="surname"
                value={signUpInfos.surname}
              />
              <Input
                placeholderName="Telefone"
                type="text"
                onChangeAction={updateValue}
                label="phone"
                value={signUpInfos.phone}
              />
            </>
          )}
        </InputsContainer>
        <input
          style={{ display: 'none' }}
          id="photo_input"
          type="file"
          accept="image/jpeg, image/jpg, image/pjpeg, image/png"
        />
        <Button
          handleButton={() => toggleStep('forward')}
          width={314}
          height={34}
          backgroundColor={theme.colors.mainRed}
          text="Prosseguir"
        />
      </ContentContainer>
    </MainContainer>
  );
};
