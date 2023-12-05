import { TState } from '../../types/state';

export const selectNearPlaces = (state: TState) => state.NearPlaces.nearPlaces;
