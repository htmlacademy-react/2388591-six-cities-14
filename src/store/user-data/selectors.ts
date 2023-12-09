import { TState } from '../../types/state';

export const selectUser = (state: TState) => state.User.user;

export const selectAuthorizationStatus = (state: TState) => state.User.authorizationStatus;

export const selectSendingStatus = (state: TState) => state.User.sendingStatus;
