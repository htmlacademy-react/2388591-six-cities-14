import { TUser } from './user-type';

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}

export type TReviewData = {
  comment: string;
  rating: number;
};
