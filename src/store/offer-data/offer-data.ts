import { createSlice } from '@reduxjs/toolkit';

import { addFavorite, deleteFavorite, fetchOffer } from '../actions/api-actions';

import { TOfferData } from '../../types/state';

import { RequestStatus } from '../../const/const';

const initialState: TOfferData = {
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
};

export const offerData = createSlice({
  name: 'Offer',
  initialState,
  reducers:{
    dropOffer(state) {
      state.offer = null;
    },

  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.offerFetchingStatus = RequestStatus.Loading;

      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offerFetchingStatus = RequestStatus.Success;
        state.offer = action.payload;

      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offerFetchingStatus = RequestStatus.Error;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        const foundOffer = state.offer;
        if(foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        const foundOffer = state.offer;
        if(foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }

      });

  }

});
