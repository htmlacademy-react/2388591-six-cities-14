import { createReducer } from '@reduxjs/toolkit';

import { fetchOffer, fetchOffers, fetchNearPlaces, fetchFavorities, fetchReviews, dropOffer, setActiveCity } from './action';

import { TOffer, TCity } from '../types/offer-type';
import { TReview } from '../types/review-type';

import { CityMap } from '../const';

import { OFFERS } from '../mocks/offers';
import { REVIEWS } from '../mocks/reviews';

const initialState: {
  offers: TOffer[];
  nearPlaces: TOffer[];
  reviews: TReview[];
  offer: TOffer | null;
  favorities: TOffer[];
  activeCity: TCity;
} = {
  offers:[],
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorities: [],
  activeCity: CityMap.Paris,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = OFFERS;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = OFFERS.find((offer) => offer.id === action.payload) ?? null;

    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = OFFERS.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = REVIEWS;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorities, (state) => {
      state.favorities = state.offers.filter((offer) => offer.isFavorite);
    });

});

export {reducer};
