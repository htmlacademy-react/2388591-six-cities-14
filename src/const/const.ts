/* eslint-disable camelcase */
const API_URL = 'https://14.design.pages.academy/six-cities';

enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer',
  NotFound = '/404'
}

enum APIRoute {
  Offers = '/offers',
  Favorite = '/favorite',
  Comments = '/comments',
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

enum CityName {
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

const HttpStatus = {
  Ok: 200,
  Created: 201,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
} as const;

const enum FavoriteStatus {
  Added = 1,
  Deleted = 0
}

const MAX_SHOWN_REVIEWS = 10;

const MAX_NEAR_PLACES_COUNT = 3;

const MAX_IMAGES_TO_DISPLAY = 6;

export {
  AppRoute,
  APIRoute,
  CityName,
  RequestStatus,
  FavoriteStatus,
  AuthorizationStatus,
  HttpStatus,
  SortingMap,
  CityMap,
  API_URL,
  MAX_SHOWN_REVIEWS,
  MAX_NEAR_PLACES_COUNT,
  MAX_IMAGES_TO_DISPLAY
};


