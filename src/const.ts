/* eslint-disable camelcase */
enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorite',
  Offer = '/offer',
  NotFound = './pages/not-found-page'
}

enum APIRoute {
  Offers = '/offers',
  Favorites = '/favorite',
  Reviews = '/comments',
  NearPlaces = '/nearby',
  Login = '/login',
  Logout = '/logout',

}

enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UKNOWN',

}

enum RequestStatus {
  Loading ='Loading',
  Idle = 'Idle',
  Error = 'Error',
  Success = 'Success'

}
export enum CityName {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

const CityMap = {
  Paris: { name: CityName.Paris, location: { latitude: 48.8566, longitude: 2.3522, zoom: 10} },
  Cologne: { name: CityName.Cologne, location: { latitude: 50.935173, longitude: 6.953101, zoom: 10 }},
  Brussels: { name: CityName.Brussels, location: { latitude: 50.8476, longitude: 4.3572, zoom: 10 } },
  Amsterdam: { name: CityName.Amsterdam, location: { latitude: 52.3676, longitude: 4.9041, zoom: 10 } },
  Hamburg: { name: CityName.Hamburg, location: { latitude: 53.5488, longitude: 9.9872, zoom: 10 } },
  Dusseldorf: { name: CityName.Dusseldorf, location: { latitude: 51.2277, longitude: 6.7735, zoom: 10 } },
} as const;

const SortingMap = {
  Popular: 'Popular',
  LowToHigh: 'Price: low to high',
  HighToLow: 'Price: high to low',
  TopRated:'Top rated first'
} as const;

const MAX_REVIEW_lENGTH = 300;
const MIN_REVIEW_lENGTH = 50;
const MAX_SHOWN_REVIEWS = 10;

const MAX_NEAR_PLACES_COUNT = 3;

const API_URL = 'https://14.design.pages.academy/six-cities';

const HttpStatus = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
};

export enum NameSpace {
  Offers = 'OFFERS',
  Offer = 'OFFER',
  Reviews = 'REVIEWS',
  NearPlaces = 'NEAR-PLACES',
  Favorites = 'FAVORITES',
  User = 'USER',
}

export {
  AppRoute,
  AuthorizationStatus,
  MAX_REVIEW_lENGTH,
  MIN_REVIEW_lENGTH,
  MAX_SHOWN_REVIEWS,
  MAX_NEAR_PLACES_COUNT,
  CityMap,
  SortingMap,
  API_URL,
  APIRoute,
  RequestStatus,
  HttpStatus
};


