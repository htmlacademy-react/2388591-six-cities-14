import { createSelector } from '@reduxjs/toolkit';

import { TState, TUserData } from '../../types/state';

import { AuthorizationStatus, NameSpace } from '../../const';

export const getUser = createSelector(
  (state: TState) => state[NameSpace.User],
  (state: TUserData) => state.user
);

export const getAuthorizationStatus = createSelector(
  (state: TState) => state[NameSpace.User],
  (state: TUserData) => state.authorizationStatus
);

export const getIsAuthorized = createSelector(
  (state: TState) => state[NameSpace.User],
  (state: TUserData) => state.authorizationStatus === AuthorizationStatus.Auth
);

export const getSendingStatus = createSelector(
  (state: TState) => state[NameSpace.User],
  (state: TUserData) => state.sendingStatus
);
