import { TState } from '../../types/state';

export const selectReviews = (state: TState) => state.REVIEWS.reviews;

export const selectFetchingStatus = (state: TState) => state.REVIEWS.reviewFetchingStatus;

export const selectSendingStatus = (state: TState) => state.REVIEWS.reviewSendingStatus;
