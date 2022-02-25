import api from '../../services/api';
import {
  SignUpTypes,
  PostActionCreator,
  RequestType,
} from '../types/signUpTypes';

export function useSignUpActions() {
  const toggleStep = (direction: string) => ({
    type: SignUpTypes.TOGGLE_STEP,
    payload: direction,
  });

  const updateValue = (label: string, value: string | File) => ({
    type: SignUpTypes.UPDATE_VALUE,
    payload: {
      label,
      value,
    },
  });

  const loadRequest: PostActionCreator =
    (data: RequestType) => async (dispatch) => {
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
          dispatch({ type: SignUpTypes.LOAD_SUCCESS });
          console.log('SUCCESS');
        }
      } catch (error) {
        dispatch({ type: SignUpTypes.LOAD_FAILURE });
        console.log('ERROR: ', error);
      }
    };

  return { toggleStep, updateValue, loadRequest };
}
