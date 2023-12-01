import { createSelector } from '@reduxjs/toolkit';

import { TOffersData, TState } from '../../types/state';

import { NameSpace } from '../../const';

export const getOffers = createSelector(
  (state: TState) => state[NameSpace.Offers],
  (state: TOffersData) => state.offers
);

export const getOffersFetchingStatus = createSelector(
  (state: TState) => state[NameSpace.Offers],
  (state: TOffersData) => state.offersFetchingStatus
);

export const getActiveCity = createSelector(
  (state: TState) => state[NameSpace.Offers],
  (state: TOffersData) => state.activeCity
);
