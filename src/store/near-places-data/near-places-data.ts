import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchNearPlaces } from '../api-actions';

import { TNearPlacesData } from '../../types/state';

const initialState: TNearPlacesData = {
  nearPlaces: [],

};

export const nearPlacesData = createSlice({
  name: 'NearPlaces',
  initialState,
  reducers:{
    addNearbyOffersToBookmark: (state, action: PayloadAction<string>) => {
      const offer = state.nearPlaces.find(({ id }) => id === action.payload);
      if (offer) {
        offer.isFavorite = true;
      }
    },
    deleteNearbyOffersFromBookmark: (state, action: PayloadAction<string>) => {
      const offer = state.nearPlaces.find(({ id }) => id === action.payload);
      if (offer) {
        offer.isFavorite = false;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      });
  }
});

export const {addNearbyOffersToBookmark, deleteNearbyOffersFromBookmark} = nearPlacesData.actions;
