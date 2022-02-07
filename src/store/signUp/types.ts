/**
 * Action types
 */

export enum SignUpTypes {
  TOGGLE_STEP = '@signUp/TOGGLE_STEP',
  LOAD_REQUEST = '@signUp/LOAD_REQUEST',
  LOAD_SUCCESS = '@signUp/LOAD_SUCCESS',
  LOAD_FAILURE = '@signUp/LOAD_FAILURE',
}

/**
 * Data types
 */

export interface User {
  email: string;
  password: string;
  name: string;
  surname: string;
  photo_address?: string;
  phone?: string;
  role: number;
  active: boolean;
}

/**
 * State type
 */

export interface SignUpState extends User {
  step: number;
  stepName: string;
  loading: boolean;
  error: boolean;
}
