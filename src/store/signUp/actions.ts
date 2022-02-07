import { action } from 'typesafe-actions';
import { SignUpTypes } from './types';

export const toggleStep = () => action(SignUpTypes.TOGGLE_STEP);

export const loadRequest = () => action(SignUpTypes.LOAD_REQUEST);

export const loadSuccess = (status: number) => action(SignUpTypes.LOAD_SUCCESS);

export const loadFailure = () => action(SignUpTypes.LOAD_FAILURE);
