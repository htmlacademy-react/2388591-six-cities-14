import { TOffer } from '../types/offer-type';
import { CityName } from '../const';

export const OFFERS: TOffer[] = [
  {
    'bedrooms': 3,
    'city': {
      'location': {
        'latitude': 48.8566,
        'longitude': 2.3522,
        'zoom': 10
      },
      'name': CityName.Paris
    },
    'description': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    'goods': [
      'Heating',
      'Towels',
      'Fridge',
    ],
    'host': {
      'avatarUrl': 'img/1.png',
      'id': 10,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': '1a',
    'images': [
      'https://media.architecturaldigest.com/photos/62d6d05f0e13d40b82bb49cf/master/w_1920%2Cc_limit/G19_4619%2520copy.jpg',
      'https://media.architecturaldigest.com/photos/5e6a42b25c94700009daa7d7/16:9/w_1920%2Cc_limit/AD0420_DIRAND_7.jpg',
      'https://cdn.tatlerasia.com/tatlerasia/i/2022/07/13085817-benedictedrummondphotographylivingroom_cover_1500x998.jpg',
      'https://photos.zillowstatic.com/fp/7e56e13823a7642ad4cb6b7f1e31e020-cc_ft_960.webp',
      'https://www.apartments.com/blog/sites/default/files/styles/x_large/public/image/2023-06/studio-apartment.jpg.webp?itok=aS9izdW1'
    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 48.85481397241064,
      'longitude': 2.3543915315694797,
      'zoom': 10
    },
    'maxAdults': 4,
    'previewImage': '/img/apartment-01.jpg',
    'price': 120,
    'rating': 4.8,
    'title': 'Beautiful & luxurious studio at great location - 1',
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
      'name': CityName.Amsterdam
    },
    'description': 'Nice, cozy, warm big bed apartment.',
    'goods': [
      'Heating',
      'Wi-Fi',
      'Washing machine'
    ],
    'host': {
      'avatarUrl': 'img/2.png',
      'id': 20,
      'isPro': true,
      'name': 'Angelina'
    },
    'id': '2b',
    'images': [
      'https://media.architecturaldigest.com/photos/62d6d05f0e13d40b82bb49cf/master/w_1920%2Cc_limit/G19_4619%2520copy.jpg',
      'https://media.architecturaldigest.com/photos/61e04ed6f3d6076b395bf303/master/w_1920%2Cc_limit/G19_4416.jpg',
      'https://photos.zillowstatic.com/fp/7e56e13823a7642ad4cb6b7f1e31e020-cc_ft_960.webp',


    ],
    'isFavorite': true,
    'isPremium': true,
    'location': {
      'latitude': 52.3609553943508,
      'longitude': 4.85309666406198,
      'zoom': 10
    },
    'maxAdults': 5,
    'previewImage': '/img/apartment-02.jpg',
    'price': 150,
    'rating': 4.5,
    'title': 'Beautiful & luxurious studio at great location - 2',
    'type': 'hotel'
  },
  {
    'bedrooms': 1,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': CityName.Amsterdam
    },
    'description': 'Nice, cozy, warm big bed apartment.',
    'goods': [
      'Kitchen',
      'Cable TV',
      'Baby seat'
    ],
    'host': {
      'avatarUrl': 'img/3.png',
      'id': 30,
      'isPro': true,
      'name': 'Sara'
    },
    'id': '3c',
    'images': [
      'https://images.unsplash.com/photo-1618775202234-166f12fc962c?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1594900085397-87bd66934f3d?auto=format&fit=crop&q=80&w=1935&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1615884293201-2bc210b6f6aa?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1602484069629-7033c3c6194c?auto=format&fit=crop&q=80&w=1965&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1632323115924-666af9da3411?auto=format&fit=crop&q=80&w=1925&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    'isFavorite': true,
    'isPremium': false,
    'location': {
      'latitude': 52.3909553943508,
      'longitude': 4.929309666406198,
      'zoom': 10
    },
    'maxAdults': 5,
    'previewImage': '/img/apartment-03.jpg',
    'price': 250,
    'rating': 5,
    'title': 'Beautiful & luxurious studio at great location - 3',
    'type': 'room'
  },
  {
    'bedrooms': 5,
    'city': {
      'location': {
        'latitude': 52.370216,
        'longitude': 4.895168,
        'zoom': 10
      },
      'name': CityName.Amsterdam
    },
    'description': 'Nice, cozy, warm big bed apartment.',
    'goods': [
      'Wi-Fi',
      'Kitchen',
      'Cable TV',
      'Baby seat',
      'Coffee machine',
      'Washing machine',
    ],
    'host': {
      'avatarUrl': 'img/3.png',
      'id': 40,
      'isPro': true,
      'name': 'Sara'
    },
    'id': '4d',
    'images': [
      'https://cdn.tatlerasia.com/tatlerasia/i/2022/07/13085817-benedictedrummondphotographylivingroom_cover_1500x998.jpg',
      'https://media.architecturaldigest.com/photos/62d6d05f0e13d40b82bb49cf/master/w_1920%2Cc_limit/G19_4619%2520copy.jpg',
      'https://media.architecturaldigest.com/photos/61e04ed6f3d6076b395bf303/master/w_1920%2Cc_limit/G19_4416.jpg',
    ],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 52.3809553943508,
      'longitude': 4.939309666406198,
      'zoom': 10
    },
    'maxAdults': 5,
    'previewImage': '/img/apartment-01.jpg',
    'price': 400,
    'rating': 2,
    'title': 'Beautiful & luxurious studio at great location - 4',
    'type': 'hostel'
  },
  {
    'bedrooms': 1,
    'city': {
      'location': {
        'latitude': 48.8566,
        'longitude': 2.3522,
        'zoom': 10
      },
      'name': CityName.Paris
    },
    'description': 'Nice, cozy, warm big bed apartment.',
    'goods': [
      'Wi-Fi',
      'Kitchen',
      'Cable TV',
      'Baby seat',
      'Coffee machine',
      'Washing machine',
    ],
    'host': {
      'avatarUrl': 'img/3.png',
      'id': 50,
      'isPro': true,
      'name': 'Sara'
    },
    'id': '5f',
    'images': [
      'https://cdn.tatlerasia.com/tatlerasia/i/2022/07/13085817-benedictedrummondphotographylivingroom_cover_1500x998.jpg',
      'https://media.architecturaldigest.com/photos/62d6d05f0e13d40b82bb49cf/master/w_1920%2Cc_limit/G19_4619%2520copy.jpg',
      'https://media.architecturaldigest.com/photos/61e04ed6f3d6076b395bf303/master/w_1920%2Cc_limit/G19_4416.jpg',
    ],
    'isFavorite': false,
    'isPremium': true,
    'location': {
      'latitude': 48.85683892498029,
      'longitude': 2.3424637583419248,
      'zoom': 10
    },
    'maxAdults': 5,
    'previewImage': '/img/apartment-01.jpg',
    'price': 1500,
    'rating': 3,
    'title': 'Beautiful & luxurious studio at great location - 4',
    'type': 'hostel'
  }
];
