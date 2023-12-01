import { TState } from '../../types/state';

import { AuthorizationStatus } from '../../const';

export const selectUser = (state: TState) => state.USER.user;

export const selectAuthorizationStatus = (state: TState) => state.USER.authorizationStatus;

export const selectIsAuthorized = (state: TState) => state.USER.authorizationStatus === AuthorizationStatus.Auth;

export const selectSendingStatus = (state: TState) => state.USER.sendingStatus;
