import { TState } from '../../types/state';

import { AuthorizationStatus } from '../../const/const';

export const selectUser = (state: TState) => state.User.user;

export const selectAuthorizationStatus = (state: TState) => state.User.authorizationStatus;

export const selectIsAuthorized = (state: TState) => state.User.authorizationStatus === AuthorizationStatus.Auth;

export const selectSendingStatus = (state: TState) => state.User.sendingStatus;
