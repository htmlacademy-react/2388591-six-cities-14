import { TState } from '../../types/state';

export const selectFavorites = (state: TState) => state.FAVORITES.favorites;

export const selectFetchingStatus = (state: TState) => state.FAVORITES.favoritesFetchingStatus;
