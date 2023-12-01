import { combineReducers } from '@reduxjs/toolkit';

import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { nearPlacesData } from './near-places-data/near-places-data';
import { favoritesData } from './favorites-data/favorites-data';
import { reviewData } from './reviews-data/reviews-data';
import { userData } from './user-data/user-data';

import { NameSpace } from '../const';

export const rootReducer = combineReducers({
  [NameSpace.Offer]: offerData.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.NearPlaces]: nearPlacesData.reducer,
  [NameSpace.Favorites]: favoritesData.reducer,
  [NameSpace.Reviews]: reviewData.reducer,
  [NameSpace.User]: userData.reducer
});
