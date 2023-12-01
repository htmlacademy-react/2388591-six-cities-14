import { TState } from '../../types/state';

export const selectOffer = (state: TState) => state.OFFER.offer;

export const selectFetchingStatus = (state: TState) => state.OFFER.offerFetchingStatus;
