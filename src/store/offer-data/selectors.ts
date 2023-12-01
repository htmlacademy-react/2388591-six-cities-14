import { createSelector } from '@reduxjs/toolkit';

import { TOfferData } from '../../types/state';
import { TState } from '../../types/state';

import { NameSpace } from '../../const';

export const getOffer = createSelector(
  (state: TState) => state[NameSpace.Offer],
  (state: TOfferData) => state.offer
);

export const getOfferFetchingStatus = createSelector(
  (state: TState) => state[NameSpace.Offer],
  (state: TOfferData) => state.offerFetchingStatus
);

