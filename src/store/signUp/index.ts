import { Reducer } from 'redux';
import { SignUpState, SignUpTypes } from './types';

const INITIAL_STATE: SignUpState = {
  email: '',
  password: '',
  name: '',
  surname: '',
  photo_address: '',
  phone: '',
  role: 0,
  active: false,
  step: 1,
  stepName: 'Dados de Login',
  loading: false,
  error: false,
};

const reducer: Reducer<SignUpState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignUpTypes.TOGGLE_STEP:
      if (state.step === 1) {
        return {
          ...state,
          loading: false,
          error: false,
          step: 2,
          stepName: 'Dados Pessoais',
        };
      }
      return {
        ...state,
        loading: false,
        error: false,
        step: 3,
        stepName: 'Foto de Perfil',
      };

    case SignUpTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SignUpTypes.LOAD_SUCCESS:
      return { ...state, loading: false, error: false };
    case SignUpTypes.LOAD_FAILURE:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default reducer;
