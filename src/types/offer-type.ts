type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;

};
type TCity = {
  name: string;
  location: TLocation;
};


type THost = {
  avatarUrl: string;
  id: number;
  isPro: boolean;
  name: string;
};

 type TOffer = {
  bedrooms: number;
  city: TCity;
  description: string;
  goods: string[];
  host: THost;
  id: string;
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


export type {TOffer, THost, TCity,TLocation};
