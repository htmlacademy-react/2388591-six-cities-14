import { TUser } from './user-type';

export type TReview = {
  id: string;
  date: string;
  user: TUser;
  comment: string;
  rating: number;
}
