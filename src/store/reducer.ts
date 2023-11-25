import { createReducer } from '@reduxjs/toolkit';

import { dropOffer, setActiveCity } from './action';
import { fetchOffer, fetchNearPlaces, fetchReviews, fetchOffers, fetchFavorites, checkAuth, login, logout } from './api-actions';

import { TOffer } from '../types/offer';
import { TCity } from '../types/city';
import { TReview } from '../types/review-type';
import { TPreviewOffer } from '../types/preview-offer';
import { TAuthorizedUser } from '../types/authorized-user';


import { CityMap, RequestStatus, AuthorizationStatus } from '../const';

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
  authorizationStatus: AuthorizationStatus;
  user: TAuthorizedUser | null;
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
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

const reducer = createReducer(initialState, (builder) => {
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
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviews.pending, (state) => {
      state.reviewFetchingStatus = RequestStatus.Loading;
    })
    .addCase(fetchReviews.fulfilled, (state, action) => {
      state.reviewFetchingStatus = RequestStatus.Success;
      state.reviews = action.payload;
    })
    .addCase(fetchReviews.rejected, (state) => {
      state.reviewFetchingStatus = RequestStatus.Error;
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
      state.favoritesFetchingStatus = RequestStatus.Success;
      state.favorites = action.payload;
    })
    .addCase(fetchFavorites.rejected, (state) => {
      state.favoritesFetchingStatus = RequestStatus.Error;
    })
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
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(logout.pending, (state) => {
      state.user = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });

});

export {reducer};
