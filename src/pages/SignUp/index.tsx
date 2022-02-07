import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { SignUpState } from '../../store/signUp/types';
import * as SignUpActions from '../../store/signUp/actions';
import theme from '../../assets/styles/theme';
import {
  MainContainer,
  ContentContainer,
  Title,
  InputsContainer,
} from './style';
import { Input, Button } from '../../components';

interface StateProps {
  signUp: SignUpState;
}

interface DispatchProps {
  toggleStep(): void;
}

type Props = StateProps & DispatchProps;

const SignUp: React.FC<Props> = ({ signUp, toggleStep }) => (
  <MainContainer>
    <ContentContainer>
      <Title>{signUp.stepName}</Title>
      <InputsContainer>
        {signUp.step === 1 && (
          <>
            <Input
              placeholderName="Email"
              type="text"
              onChangeAction={() => console.log('Email')}
            />
            <Input
              placeholderName="Senha"
              type="password"
              onChangeAction={() => console.log('senha')}
            />
            <Input
              placeholderName="Repita sua senha"
              type="password"
              onChangeAction={() => console.log('repita sua senha')}
            />
          </>
        )}
        {signUp.step === 2 && (
          <>
            <Input
              placeholderName="Nome"
              type="text"
              onChangeAction={() => console.log('nome')}
            />
            <Input
              placeholderName="Sobrenome"
              type="text"
              onChangeAction={() => console.log('sobrenome')}
            />
            <Input
              placeholderName="Telefone"
              type="text"
              onChangeAction={() => console.log('telefone')}
            />
          </>
        )}
      </InputsContainer>
      <Button
        handleButton={() => toggleStep()}
        width={314}
        height={34}
        backgroundColor={theme.colors.mainRed}
        text="Prosseguir"
      />
    </ContentContainer>
  </MainContainer>
);

const mapStateToProps = (state: ApplicationState) => ({
  signUp: state.signUp,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(SignUpActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
