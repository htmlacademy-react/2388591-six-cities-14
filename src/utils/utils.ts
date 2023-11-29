import { TPreviewOffer } from '../types/preview-offer';
import { TSorting } from '../types/sorting';


function getRandomArrayElement<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}


const sortHighToLow = (a: TPreviewOffer, b: TPreviewOffer) => b.price - a.price;
const sortLowToHigh = (a: TPreviewOffer, b: TPreviewOffer) => a.price - b.price;
const sortByRating = (a: TPreviewOffer, b: TPreviewOffer) => b.rating - a.rating;

const sorting: Record<TSorting, (offers: TPreviewOffer[]) => TPreviewOffer[]> = {
  Popular: (offers) => offers.slice(),
  HighToLow: (offers) => offers.toSorted(sortHighToLow),
  LowToHigh: (offers) => offers.toSorted(sortLowToHigh),
  TopRated: (offers) => offers.toSorted(sortByRating),
};

function getRating(rating: number): string {
  return `${Math.round(rating * 20)}%`;
}

export {formatDate, sorting, getRating, getRandomArrayElement};

