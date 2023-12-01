import { TState } from '../../types/state';

export const selectOffers = (state: TState) => state.OFFERS.offers;

export const selectFetchingStatus = (state: TState) => state.OFFERS.offersFetchingStatus;

export const selectActiveCity = (state: TState) => state.OFFERS.activeCity;
