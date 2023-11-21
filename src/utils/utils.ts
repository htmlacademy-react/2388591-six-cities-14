import { TOffer } from '../types/offer-type';
import { TSorting } from '../types/sorting';

function formatDate(date: string) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    year: 'numeric'
  }).format(new Date(date));
}

const sortHighToLow = (a: TOffer, b: TOffer) => b.price - a.price;
const sortLowToHigh = (a: TOffer, b: TOffer) => a.price - b.price;
const sortByRating = (a: TOffer, b: TOffer) => b.rating - a.rating;

const sorting: Record<TSorting, (offers: TOffer[]) => TOffer[]> = {
  Popular: (offers) => offers.slice(),
  HighToLow: (offers) => offers.toSorted(sortHighToLow),
  LowToHigh: (offers) => offers.toSorted(sortLowToHigh),
  TopRated: (offers) => offers.toSorted(sortByRating),
};
export {formatDate, sorting};

