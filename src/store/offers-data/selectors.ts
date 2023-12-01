import { TState } from '../../types/state';

import { NameSpace } from '../../const';

export const getOffers = (state: TState) => state[NameSpace.Offers]?.offers;

export const getOffersFetchingStatus = (state: TState) => state[NameSpace.Offers]?.offersFetchingStatus;

export const getActiveCity = (state: TState) => state[NameSpace.Offers]?.activeCity;
