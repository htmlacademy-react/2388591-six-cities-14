import { combineReducers } from '@reduxjs/toolkit';

import { offerData } from './offer-data/offer-data';
import { offersData } from './offers-data/offers-data';
import { nearPlacesData } from './near-places-data/near-places-data';
import { favoritesData } from './favorites-data/favorites-data';
import { reviewData } from './reviews-data/reviews-data';
import { userData } from './user-data/user-data';

export const rootReducer = combineReducers({
  [offerData.name]: offerData.reducer,
  [offersData.name]: offersData.reducer,
  [nearPlacesData.name]: nearPlacesData.reducer,
  [favoritesData.name]: favoritesData.reducer,
  [reviewData.name]: reviewData.reducer,
  [userData.name]: userData.reducer
});
