import { createSelector } from '@reduxjs/toolkit';

import { TReviewsData, TState } from '../../types/state';

import { NameSpace } from '../../const';

export const getReviews = createSelector(
  (state: TState) => state[NameSpace.Reviews],
  (state: TReviewsData) => state.reviews
);

export const getReviewsFetchingStatus = createSelector(
  (state: TState) => state[NameSpace.Reviews],
  (state: TReviewsData) => state.reviewFetchingStatus
);

export const getReviewSendingStatus = createSelector(
  (state: TState) => state[NameSpace.Reviews],
  (state: TReviewsData) => state.reviewSendingStatus
);
