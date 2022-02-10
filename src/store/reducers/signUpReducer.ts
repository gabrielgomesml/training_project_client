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
  loading: false,
};

const reducer = (state: StateType = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case SignUpTypes.TOGGLE_STEP:
      if (action.payload === 'forward') {
        if (state.step === 'Dados de Login') {
          return { ...state, step: 'Dados Pessoais' };
        }
        if (state.step === 'Dados Pessoais') {
          return { ...state, step: 'Foto de Perfil' };
        }
      } else if (action.payload === 'back') {
        if (state.step === 'Foto de Perfil') {
          return { ...state, step: 'Dados Pessoais' };
        }
        if (state.step === 'Dados Pessoais') {
          return { ...state, step: 'Dados de Login' };
        }
      }
      return state;
    case SignUpTypes.UPDATE_VALUE:
      const { label, value } = action.payload;
      return { ...state, [label]: value };
    case SignUpTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case SignUpTypes.LOAD_SUCCESS:
      return state;
    case SignUpTypes.LOAD_FAILURE:
      return state;
    default:
      return state;
  }
};

export default reducer;
