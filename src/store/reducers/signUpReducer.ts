import { checkValues } from '../../pages/SignUp/Components/Input/regex';
import { SignUpTypes, Action, StateType } from '../types/signUpTypes';

const INITIAL_STATE = {
  step: 'Dados de Login',
  email: '',
  password: '',
  confirmPassword: '',
  name: '',
  surname: '',
  photo_address: '',
  phone: '',
  role: 0,
  active: false,
  errorMessage: '',
  loading: false,
  success: false,
  error: false,
};

const reducer = (state: StateType = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SignUpTypes.TOGGLE_STEP:
      if (action.payload === 'forward') {
        if (
          state.step === 'Dados de Login' &&
          checkValues('email', state.email) &&
          !checkValues('password', state.password)
        ) {
          if (state.password === state.confirmPassword) {
            return { ...state, step: 'Dados Pessoais', errorMessage: '' };
          }
          return { ...state, errorMessage: 'As senhas não coincidem' };
        }
        if (state.step === 'Dados Pessoais') {
          if (state.step === 'Dados Pessoais' && state.phone) {
            if (
              checkValues('text', state.name) &&
              checkValues('text', state.surname) &&
              checkValues('tel', state.phone)
            ) {
              return { ...state, step: 'Foto de Perfil', errorMessage: '' };
            }
          } else if (
            checkValues('text', state.name) &&
            checkValues('text', state.surname)
          ) {
            return { ...state, step: 'Foto de Perfil', errorMessage: '' };
          }
        }
        if (state.step === 'Foto de Perfil') {
          return { ...state, step: 'Resumo' };
        }
      } else if (action.payload === 'back') {
        if (state.step === 'Resumo') {
          return { ...state, step: 'Foto de Perfil' };
        }
        if (state.step === 'Foto de Perfil') {
          return { ...state, step: 'Dados Pessoais' };
        }
        if (state.step === 'Dados Pessoais') {
          return { ...state, step: 'Dados de Login' };
        }
      }
      return { ...state, errorMessage: 'Campos inválidos' };
    case SignUpTypes.UPDATE_VALUE:
      const { label, value } = action.payload;
      return { ...state, [label]: value };
    case SignUpTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SignUpTypes.LOAD_SUCCESS:
      return { ...state, loading: false, success: true, error: false };
    case SignUpTypes.LOAD_FAILURE:
      return { ...state, loading: false, success: false, error: true };
    default:
      return state;
  }
};

export default reducer;
