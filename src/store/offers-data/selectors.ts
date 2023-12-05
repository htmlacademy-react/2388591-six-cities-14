import { TState } from '../../types/state';

export const selectOffers = (state: TState) => state.Offers.offers;

export const selectFetchingStatus = (state: TState) => state.Offers.offersFetchingStatus;

export const selectActiveCity = (state: TState) => state.Offers.activeCity;
