import { CityName } from '../const';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;

};

export type TCity = {
  location: TLocation;
  name: CityName;
};

export type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

export type Offer = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: TLocation;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: string;
};


