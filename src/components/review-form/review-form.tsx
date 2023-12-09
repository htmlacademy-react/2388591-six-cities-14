import React, { useState, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { useFormSubmission } from './hook';

import { Rating } from '../rating/rating';

import { dropReviewSendingStatus } from '../../store/actions/action';
import { selectFetchingStatus } from '../../store/reviews-data/selectors';

import { TOffer } from '../../types/offer';

import { RequestStatus } from '../../const/const';

type TReviewsProps = {
  offerId: TOffer['id'];
};

const ReviewLength = {
  Max: 300,
  Min: 50,
} as const;

function ReviewForm({ offerId }: TReviewsProps) {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector(selectFetchingStatus);

  const isSending = sendingStatus === RequestStatus.Loading;

  const { handleFormSubmit } = useFormSubmission();

  const isSubmitDisabled =
    comment.length < ReviewLength.Min ||
    comment.length >= ReviewLength.Max ||
    rating === 0;

  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  useEffect(() => {
    if (sendingStatus === RequestStatus.Success) {
      setComment('');
      setRating(0);
      dispatch(dropReviewSendingStatus());
    }
  }, [sendingStatus, dispatch]);

  return (
    <form className={`reviews__form form ${isSending ? 'form--disabled' : ''}`} onSubmit={handleFormSubmit({ comment, rating }, offerId)}>
      {sendingStatus === RequestStatus.Error && (
        <p style={{ color: 'red' }}>Failed to post a review. Please try again! </p>
      )}
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <Rating value={rating} onChange={setRating} disabled={isSending} />
      <textarea
        onChange={handleFieldChange}
        value={comment}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isSending}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit a review, please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmitDisabled || isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </button>
      </div>
    </form>
  );
}

export { ReviewForm };

