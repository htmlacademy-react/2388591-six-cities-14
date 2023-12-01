import { createSelector } from '@reduxjs/toolkit';

import { TNearPlacesData, TState } from '../../types/state';

import { NameSpace } from '../../const';

export const getNearPlaces = createSelector(
  (state: TState) => state[NameSpace.NearPlaces],
  (state: TNearPlacesData) => state.nearPlaces
);
