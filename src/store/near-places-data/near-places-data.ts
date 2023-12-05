import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchNearPlaces } from '../actions/api-actions';
import { TNearPlacesData } from '../../types/state';

const initialState: TNearPlacesData = {
  nearPlaces: [],

};

export const nearPlacesData = createSlice({
  name: 'NearPlaces',
  initialState,
  reducers:{
    addNearbyOfferToBookmark: (state, action: PayloadAction<string>) => {
      const offer = state.nearPlaces.find(({ id }) => id === action.payload);
      if (offer) {
        offer.isFavorite = true;
      }
    },
    deleteNearbyOfferFromBookmark: (state, action: PayloadAction<string>) => {
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

export const {addNearbyOfferToBookmark, deleteNearbyOfferFromBookmark} = nearPlacesData.actions;
