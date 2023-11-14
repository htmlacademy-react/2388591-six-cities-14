/* eslint-disable camelcase */

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = './pages/not-found-page'
}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UKNOWN',

}

export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

const MAX_REVIEW_lENGTH = 300;
const MIN_REVIEW_lENGTH = 50;
const MAX_SHOWN_REVIEWS = 10;


export { AppRoute, AuthorizationStatus, MAX_REVIEW_lENGTH, MIN_REVIEW_lENGTH, MAX_SHOWN_REVIEWS};
