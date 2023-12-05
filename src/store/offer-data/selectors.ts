import { TState } from '../../types/state';

export const selectOffer = (state: TState) => state.Offer.offer;

export const selectFetchingStatus = (state: TState) => state.Offer.offerFetchingStatus;
