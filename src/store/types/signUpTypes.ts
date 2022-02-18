import { ThunkAction } from 'redux-thunk';

/**
 * Action types
 */

export enum SignUpTypes {
  TOGGLE_STEP = '@signUp/TOGGLE_STEP',
  UPDATE_VALUE = '@signUp/UPDATE_VALUE',
  LOAD_REQUEST = '@signUp/LOAD_REQUEST',
  LOAD_SUCCESS = '@signUp/LOAD_SUCCESS',
  LOAD_FAILURE = '@signUp/LOAD_FAILURE',
}

interface ToggleAction {
  type: SignUpTypes.TOGGLE_STEP;
  payload: string;
}

interface UpdateAction {
  type: SignUpTypes.UPDATE_VALUE;
  payload: {
    label: string;
    value: string | File;
  };
}

interface RequestAction {
  type: SignUpTypes.LOAD_REQUEST;
  payload: any; // Mudar para a tipagem de User depois
}

interface SucessAction {
  type: SignUpTypes.LOAD_SUCCESS;
}

interface FailureAction {
  type: SignUpTypes.LOAD_FAILURE;
}

export type Action =
  | ToggleAction
  | UpdateAction
  | RequestAction
  | SucessAction
  | FailureAction;

export type PostActionCreator = (
  data: any,
) => ThunkAction<void, any, unknown, Action>;

/**
 * State type
 */

export interface StateType {
  step: string;
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  surname: string;
  photo_address: string | File;
  phone: string;
  role: number;
  active: boolean;
  errorMessage: string;
  loading: boolean;
  success: boolean;
  error: boolean;
}

export interface RequestType {
  email: string;
  password: string;
  name: string;
  surname: string;
  photo_address?: string;
  phone?: string;
  role: number;
  active: boolean;
}
