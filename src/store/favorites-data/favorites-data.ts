import { createSlice } from '@reduxjs/toolkit';

import { addFavorite, deleteFavorite, fetchFavorites, logout } from '../actions/api-actions';

import { TFavoritesData } from '../../types/state';

import { RequestStatus } from '../../const/const';

const initialState: TFavoritesData = {
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
};

export const favoritesData = createSlice({
  name: 'Favorites',
  initialState,
  reducers:{
    resetFavorites: (state) => {
      state.favorites = [];
      state.favoritesFetchingStatus = RequestStatus.Idle;
    },
  },
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
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter(
          (offer) => offer.id !== action.payload.id
        );
      })
      .addCase(logout.fulfilled, (state) => {
        state.favorites = [];
        state.favoritesFetchingStatus = RequestStatus.Idle;
      });
  }
});

export const { resetFavorites } = favoritesData.actions;
