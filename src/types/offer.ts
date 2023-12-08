import { TCity } from './city';
import { TLocation } from './location';
import { TPreviewOffer } from './preview-offer';

type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
};

type TOffer = TPreviewOffer & {
  description: string;
  bedrooms: number;
  goods: string[];
  host:THost;
  images: string[];
  maxAdults: number;
}


export type {TOffer, TCity,TLocation};
