import { TState } from '../../types/state';

export const selectReviews = (state: TState) => state.Reviews.reviews;

export const selectFetchingStatus = (state: TState) => state.Reviews.reviewFetchingStatus;

export const selectSendingStatus = (state: TState) => state.Reviews.reviewSendingStatus;
