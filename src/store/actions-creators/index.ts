import api from '../../services/api';
import { SignUpTypes, postActionCreator } from '../types/signUpTypes';

export const toggleStep = (direction: string) => ({
  type: SignUpTypes.TOGGLE_STEP,
  payload: direction,
});

export const updateValue = (label: string, value: string | File) => ({
  type: SignUpTypes.UPDATE_VALUE,
  payload: {
    label,
    value,
  },
});

export const loadRequest: postActionCreator =
  (data: any) => async (dispatch) => {
    try {
      const requestOptions = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      };
      const response = await fetch(`${api}users`, {
        ...requestOptions,
      });
      if (response.status === 201) {
        console.log('funcionou');
      }
    } catch (error) {
      console.log(error);
    }
  };
