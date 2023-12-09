import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { addFavorite, deleteFavorite, fetchOffers } from '../actions/api-actions';

import { TOffersData } from '../../types/state';
import { TCity } from '../../types/city';

import { CityMap, RequestStatus } from '../../const/const';

const initialState: TOffersData = {
  offers:[],
  offersFetchingStatus: RequestStatus.Idle,
  activeCity: CityMap.Paris,

};

export const offersData = createSlice({
  name: 'Offers',
  initialState,
  reducers: {
    setActiveCity(state, action: PayloadAction<TCity>) {
      state.activeCity = action.payload;
    }

  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.offersFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offersFetchingStatus = RequestStatus.Success;
        state.offers = action.payload;
      })
      .addCase(fetchOffers.rejected, (state) => {
        state.offersFetchingStatus = RequestStatus.Error;
      })
      .addCase(deleteFavorite.fulfilled, (state, action) => {
        const foundOffer = state.offers.find(({ id }) => id === action.payload.id);
        if(foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        const foundOffer = state.offers.find(({ id }) => id === action.payload.id);
        if(foundOffer) {
          foundOffer.isFavorite = action.payload.isFavorite;
        }

      });
  }
});

export const {setActiveCity} = offersData.actions;
