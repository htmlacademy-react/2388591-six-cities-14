import { TState } from '../../types/state';

export const selectFavorites = (state: TState) => state.Favorites.favorites;

export const selectFetchingStatus = (state: TState) => state.Favorites.favoritesFetchingStatus;
