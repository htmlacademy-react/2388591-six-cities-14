import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { AppRoute, HttpStatus } from '../const';
import browserHistory from '../browser-history';

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
      if (error.response) {
        const status = error.response.status;
        switch (status) {
          case HttpStatus.NOT_FOUND:
            browserHistory.push(AppRoute.NotFound);
            break;
          case HttpStatus.UNAUTHORIZED:
            browserHistory.push(AppRoute.Root);
            break;
          default:
            break;
        }
      }
      return Promise.reject(error);
    }
  );

  return api;
};


export {createApi};

