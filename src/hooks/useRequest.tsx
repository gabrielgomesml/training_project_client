/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback } from 'react';
import Cookies from 'js-cookie';
import api from '../services/api';

interface HttpParams {
  url: string;
  auth: boolean;
  body?: object;
}

const getHeaders = (auth: boolean) => {
  const token = Cookies.get('@training-project:token');
  if (auth) {
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token.replace(/["]+/g, '')}`,
    };
    return headers;
  }
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  return headers;
};

function useRequest(
  ...methods: ('get' | 'post' | 'put' | 'delete' | 'patch')[]
) {
  if (methods.length === 0) {
    throw new TypeError(
      'Methonds array is empty, add a method to `useRequest` parameters',
    );
  }

  const functions = methods.map((method) => {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
      throw new TypeError(`Invalid method (${method})`);
    }

    const httpRequest = async ({
      url: relativeUrl = '/',
      auth,
      body = {},
    }: HttpParams): Promise<any> => {
      try {
        const headers = getHeaders(auth);

        let requestOptions;

        if (method === 'get' || method === 'delete') {
          requestOptions = {
            method: method.toUpperCase(),
            headers,
          };
        } else {
          requestOptions = {
            method: method.toUpperCase(),
            headers,
            body: JSON.stringify(body),
          };
        }

        const response = await fetch(`${api + relativeUrl}`, {
          ...requestOptions,
        });

        const data = await response.json();
        return { status: response.status, data };
      } catch (err) {
        console.log(err, 'AQUI O ERRO');
        return err;
      }
    };

    return httpRequest;
  });

  const first = useCallback(functions[0], []);

  return [first];
}

export default useRequest;
