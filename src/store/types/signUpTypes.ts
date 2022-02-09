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
    value: string;
  };
}

interface RequestAction {
  type: SignUpTypes.LOAD_REQUEST;
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
