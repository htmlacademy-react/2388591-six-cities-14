import { TCity } from './city';
import { TLocation } from './location';
import { TPreviewOffer } from './preview-offer';

type THost = {
  avatarUrl: string;
  isPro: boolean;
  name: string;
};

type TOffer = TPreviewOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: {
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
  images: string[];
  maxAdults: number;
}


export type {TOffer, THost, TCity,TLocation};
