import { store } from '../store';

import { TAuthorizedUser } from './authorized-user';
import { TPreviewOffer } from './preview-offer';
import { TCity, TOffer } from './offer';
import { TReview } from './review';

import { AuthorizationStatus, RequestStatus } from '../const/const';

export type TState = ReturnType<typeof store.getState>;

export type TAppDistpatch = typeof store.dispatch;


export type TUserData = {
  authorizationStatus: AuthorizationStatus;
  user: TAuthorizedUser | null;
  sendingStatus: RequestStatus;
};

export type TOfferData = {
  offer: TOffer | null;
  offerFetchingStatus: RequestStatus;
};

export type TOffersData = {
  offers: TPreviewOffer[];
  offersFetchingStatus: RequestStatus;
  activeCity: TCity;

};

export type TNearPlacesData = {
  nearPlaces: TPreviewOffer[];

};

export type TFavoritesData = {
  favorites: TPreviewOffer[];
  favoritesFetchingStatus: RequestStatus;
};

export type TReviewsData = {
  reviews: TReview[];
  reviewFetchingStatus: RequestStatus;
  reviewSendingStatus: RequestStatus;
};
