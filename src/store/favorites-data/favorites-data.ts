import { createSlice } from '@reduxjs/toolkit';

import { fetchFavorites } from '../api-actions';

import { TFavoritesData } from '../../types/state';

import { NameSpace, RequestStatus } from '../../const';

const initialState: TFavoritesData = {
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: NameSpace.Favorites,
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoritesFetchingStatus = RequestStatus.Success;
        state.favorites = action.payload;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesFetchingStatus = RequestStatus.Error;
      });
  }
});
