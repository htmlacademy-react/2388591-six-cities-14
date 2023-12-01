import { createSlice } from '@reduxjs/toolkit';

import { checkAuth, login, logout } from '../api-actions';

import { TUserData } from '../../types/state';

import { AuthorizationStatus, RequestStatus } from '../../const';

const initialState: TUserData = {
  user: null,
  authorizationStatus: AuthorizationStatus.Unknown,
  sendingStatus: RequestStatus.Idle,

};

export const userData = createSlice({
  name: 'USER',
  initialState,
  reducers: {
    dropSendingStatus(state) {
      state.sendingStatus = RequestStatus.Idle;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(checkAuth.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.Unknown;
      })
      .addCase(checkAuth.fulfilled, (state, action) => {
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(login.pending, (state) => {
        state.sendingStatus = RequestStatus.Loading;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.sendingStatus = RequestStatus.Success;
        state.user = action.payload;
        state.authorizationStatus = AuthorizationStatus.Auth;
      })
      .addCase(login.rejected, (state) => {
        state.sendingStatus = RequestStatus.Error;
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      })
      .addCase(logout.pending, (state) => {
        state.user = null;
        state.authorizationStatus = AuthorizationStatus.NoAuth;
      });
  },
});

export const { dropSendingStatus } = userData.actions;
