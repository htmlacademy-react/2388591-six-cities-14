import { createSlice } from '@reduxjs/toolkit';

import { addFavorite, deleteFavorite, fetchNearPlaces } from '../actions/api-actions';
import { TNearPlacesData } from '../../types/state';

const initialState: TNearPlacesData = {
  nearPlaces: [],

};

export const nearPlacesData = createSlice({
  name: 'NearPlaces',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        const foundOffer = state.nearPlaces.find(({ id }) => id === action.payload.id);
        if (foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        const foundOffer = state.nearPlaces.find(({ id }) => id === action.payload.id);
        if (foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }
      });
  }
});
