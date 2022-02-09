import { SignUpTypes } from '../types/signUpTypes';

export const toggleStep = (direction: string) => ({
  type: SignUpTypes.TOGGLE_STEP,
  payload: direction,
});

export const updateValue = (label: string, value: string) => ({
  type: SignUpTypes.UPDATE_VALUE,
  payload: {
    label,
    value,
  },
});
