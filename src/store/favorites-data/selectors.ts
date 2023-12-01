import { createSelector } from '@reduxjs/toolkit';

import { TState, TFavoritesData } from '../../types/state';

import { NameSpace } from '../../const';

export const getFavorites = createSelector(
  (state: TState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.favorites
);

export const getFetchingStatus = createSelector(
  (state: TState) => state[NameSpace.Favorites],
  (state: TFavoritesData) => state.favoritesFetchingStatus
);
