import { createReducer } from '@reduxjs/toolkit';

import { dropOffer, setActiveCity } from './action';
import { fetchOffer, fetchNearPlaces, fetchReviews, fetchOffers, fetchFavorites } from './api-actions';

import { TOffer } from '../types/offer';
import { TCity } from '../types/city';
import { TReview } from '../types/review-type';
import { TPreviewOffer } from '../types/preview-offer';

import { CityMap, RequestStatus } from '../const';

interface State {
  offers: TPreviewOffer[];
  offersFetchingStatus: RequestStatus;
  nearPlaces: TPreviewOffer[];
  reviews: TReview[];
  reviewFetchingStatus: RequestStatus;
  offer: TOffer | null;
  offerFetchingStatus: RequestStatus;

  favorites: TPreviewOffer[];
  favoritesFetchingStatus: RequestStatus;
  activeCity: TCity;
}

const initialState: State = {
  offers:[],
  offersFetchingStatus: RequestStatus.Idle,
  nearPlaces: [],
  reviews: [],
  reviewFetchingStatus: RequestStatus.Idle,
  offer: null,
  offerFetchingStatus: RequestStatus.Idle,
  favorites: [],
  favoritesFetchingStatus: RequestStatus.Idle,
  activeCity: CityMap.Paris,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers.pending, (state) => {
      state.offersFetchingStatus = RequestStatus.Loading;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offersFetchingStatus = RequestStatus.Sucsess;
      state.offers = action.payload;
    })
    .addCase(fetchOffers.rejected, (state) => {
      state.offersFetchingStatus = RequestStatus.Errror;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerFetchingStatus = RequestStatus.Loading;

    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerFetchingStatus = RequestStatus.Sucsess;
      state.offer = action.payload;

    })
    .addCase(fetchOffer.rejected, (state) => {
      state.offerFetchingStatus = RequestStatus.Errror;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewFetchingStatus = RequestStatus.Loading;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewFetchingStatus = RequestStatus.Sucsess;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewFetchingStatus = RequestStatus.Errror;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites.pending, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Loading;
    })
    .addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoritesFetchingStatus = RequestStatus.Sucsess;
      state.favorites = action.payload;
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Errror;
    });

});

export {reducer};
