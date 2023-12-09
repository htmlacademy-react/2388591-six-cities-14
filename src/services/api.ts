import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';

import browserHistory from '../browser-history';

import { AppRoute, HttpStatus } from '../const/const';

const BACKEND_URL = 'https://14.design.pages.academy/six-cities';
const REQUEST_TIMEOUT = 5000;

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );


  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{ error: string }>) => {
      if(error.response?.status === HttpStatus.NotFound) {
        browserHistory.push(AppRoute.NotFound);
      }
      throw error;
    }
  );

  return api;
};


export {createApi};

