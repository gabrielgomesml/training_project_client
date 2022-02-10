import React, { useEffect, useState, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import Upload from '../../assets/icons/upload.png';
import theme from '../../assets/styles/theme';
import * as signUpActions from '../../store/actions-creators/index';
import {
  MainContainer,
  ContentContainer,
  HeadContainer,
  Title,
  BackButton,
  InputsContainer,
  UploadImage,
  ErrorText,
  ReviewContainer,
  InfoContainer,
} from './style';
import { Input } from './Components/Input';
import { Button } from '../../components';
import { State } from '../../store/reducers';

export const SignUp: React.FC = () => {
  const dispatch = useDispatch();
  const [photoPreview, setPhotoPreview] = useState('');

  const { toggleStep, updateValue, loadRequest } = bindActionCreators(
    signUpActions,
    dispatch,
  );

  const signUpInfos = useSelector((signUpState: State) => signUpState.signUp);

  const handleImage = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const reader = new FileReader();
      const target = e.target.files[0];

      if (e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
      }

      reader.onloadend = () => {
        setPhotoPreview(String(reader?.result));
        updateValue('photo_address', target);
      };
    }
  };

  useEffect(() => {
    console.log(signUpInfos);
  }, [signUpInfos]);

  return (
    <MainContainer>
      <ContentContainer>
        <HeadContainer>
          <Title>{signUpInfos.step}</Title>
          {signUpInfos.step === 'Dados de Login' ? (
            <Link to="/login">
              <BackButton onClick={() => toggleStep('back')}>Voltar</BackButton>
            </Link>
          ) : (
            <BackButton onClick={() => toggleStep('back')}>Voltar</BackButton>
          )}
        </HeadContainer>
        {(signUpInfos.step === 'Foto de Perfil' ||
          signUpInfos.step === 'Resumo') && (
          // eslint-disable-next-line jsx-a11y/label-has-associated-control
          <label htmlFor="photo_input">
            <UploadImage src={photoPreview || Upload} />
          </label>
        )}
        <InputsContainer>
          {signUpInfos.step === 'Dados de Login' && (
            <>
              <Input
                placeholderName="Email*"
                type="email"
                onChangeAction={updateValue}
                label="email"
                value={signUpInfos.email}
              />
              <Input
                placeholderName="Senha*"
                type="password"
                onChangeAction={updateValue}
                label="password"
                value={signUpInfos.password}
              />
              <Input
                placeholderName="Repita sua senha*"
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
                placeholderName="Nome*"
                type="text"
                onChangeAction={updateValue}
                label="name"
                value={signUpInfos.name}
              />
              <Input
                placeholderName="Sobrenome*"
                type="text"
                onChangeAction={updateValue}
                label="surname"
                value={signUpInfos.surname}
              />
              <Input
                placeholderName="Telefone"
                type="tel"
                onChangeAction={updateValue}
                label="phone"
                value={signUpInfos.phone}
              />
            </>
          )}
        </InputsContainer>
        {signUpInfos.step === 'Resumo' && (
          <ReviewContainer>
            <InfoContainer>
              <p>Email:</p>
              <p>{signUpInfos.email}</p>
            </InfoContainer>
            <InfoContainer>
              <p>Nome:</p>
              <p>{signUpInfos.name}</p>
            </InfoContainer>
            <InfoContainer>
              <p>Sobrenome:</p>
              <p>{signUpInfos.surname}</p>
            </InfoContainer>
            <InfoContainer>
              <p>Telefone:</p>
              <p>{signUpInfos.phone ? signUpInfos.phone : '-'}</p>
            </InfoContainer>
          </ReviewContainer>
        )}
        <ErrorText>{signUpInfos.error}</ErrorText>
        <input
          style={{ display: 'none' }}
          id="photo_input"
          type="file"
          accept="image/jpeg, image/jpg, image/pjpeg, image/png"
          onChange={handleImage}
        />
        <Button
          handleButton={() =>
            signUpInfos.step !== 'Resumo'
              ? toggleStep('forward')
              : loadRequest({
                  email: signUpInfos.email,
                  password: signUpInfos.password,
                  name: signUpInfos.name,
                  surname: signUpInfos.surname,
                  photo_address: signUpInfos.photo_address || null,
                  phone: signUpInfos.phone || null,
                  role: signUpInfos.role,
                  active: signUpInfos.active,
                })
          }
          width={314}
          height={34}
          backgroundColor={theme.colors.mainRed}
          text={signUpInfos.step !== 'Resumo' ? 'Prosseguir' : 'Cadastre-se'}
        />
      </ContentContainer>
    </MainContainer>
  );
};
