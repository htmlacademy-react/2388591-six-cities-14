import { TState } from '../../types/state';

export const selectNearPlaces = (state: TState) => state['NEAR-PLACES'].nearPlaces;
