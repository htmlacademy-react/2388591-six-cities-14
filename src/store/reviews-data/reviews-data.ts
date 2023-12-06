import { createSlice } from '@reduxjs/toolkit';

import { fetchReviews, postReview } from '../actions/api-actions';

import { TReviewsData } from '../../types/state';

import { RequestStatus } from '../../const/const';

const initialState: TReviewsData = {
  reviews: [],
  reviewFetchingStatus: RequestStatus.Idle,
  reviewSendingStatus: RequestStatus.Idle,
};

export const reviewData = createSlice({
  name: 'Reviews',
  initialState,
  reducers: {
    dropReviewSendingStatus(state){
      state.reviewSendingStatus = RequestStatus.Idle;

    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.reviewFetchingStatus = RequestStatus.Loading;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviewFetchingStatus = RequestStatus.Success;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewFetchingStatus = RequestStatus.Error;
      })
      .addCase(postReview.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.reviewFetchingStatus = RequestStatus.Success;
      })
      .addCase(postReview.pending, (state) => {
        state.reviewFetchingStatus = RequestStatus.Loading;
      })
      .addCase(postReview.rejected, (state) => {
        state.reviewFetchingStatus = RequestStatus.Error;
      });
  }
});
