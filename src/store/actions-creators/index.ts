import api from '../../services/api';
import {
  SignUpTypes,
  postActionCreator,
  RequestType,
} from '../types/signUpTypes';

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
  (data: RequestType) => async () => {
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
        console.log('SUCCESS'); // Still needs to be implemented the success action call
      }
    } catch (error) {
      console.log('ERROR: ', error); // Still needs to be implemented the failure action cal
    }
  } catch (error) {
    console.log(error);
  }
};
