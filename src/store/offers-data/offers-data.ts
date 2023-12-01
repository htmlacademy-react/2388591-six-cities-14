import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { fetchOffers } from '../api-actions';

import { TOffersData } from '../../types/state';
import { TCity } from '../../types/city';

import { CityMap, RequestStatus } from '../../const';

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
      });
  }
});

export const {setActiveCity} = offersData.actions;
