import { Offer } from '../types/offer-type';

export const OFFERS: Offer[] = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Amsterdam'
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating'
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 3,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 1,
    'images': [
      'img/1.png'
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 4,
    'previewImage': 'img/1.png',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'apartment'
  },
  {
    'bedrooms': 2,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': 'Paris'
    },
    'description': 'Nice, cozy, warm big bed apartment. Paris',
    'goods': [
      'Heating',
      'Wi-Fi'
    ],
    'host': {
      'avatarUrl': 'img/2.png',
      'id': 4,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': 2,
    'images': [
      'img/2.png'
    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8
    },
    'maxAdults': 5,
    'previewImage': 'img/2.png',
    'price': 150,
    'rating': 4.5,
    'title': 'Beautiful & luxurious studio at great location',
    'type': 'hotel'
  },
];
