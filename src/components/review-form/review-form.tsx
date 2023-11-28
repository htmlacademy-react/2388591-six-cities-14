/* eslint-disable camelcase */
import React, {FormEvent, useEffect, useState} from 'react'; //Fragment

import { MAX_REVIEW_lENGTH,MIN_REVIEW_lENGTH, RequestStatus } from '../../const';
import { TOffer } from '../../types/offer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postReview } from '../../store/api-actions';
import { dropReviewSendingStatus } from '../../store/action';

import { Rating } from '../rating/rating';

type TReviewsProps = {
  offerId: TOffer['id'];
}

function ReviewForm({offerId}: TReviewsProps) {
  const dispatch = useAppDispatch();
  const sendingStatus = useAppSelector((state) => state.reviewFetchingStatus);
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);
  const isSending = sendingStatus === RequestStatus.Loading;

  const isSubmitDisabled =
    comment.length >= MIN_REVIEW_lENGTH &&
    comment.length <= MAX_REVIEW_lENGTH &&
    rating !== 0;


  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(evt.target.value);
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(
      postReview({
        reviewData: {
          comment,
          rating: +rating,
        },
        offerId
      })
    );

  };

  useEffect(() => {
    if(sendingStatus === RequestStatus.Success) {
      setComment('');
      setRating(0);
      dispatch(dropReviewSendingStatus());

    }
  }, [sendingStatus, dispatch]);


  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      {sendingStatus === RequestStatus.Error && (
        <p>Failed to post review. Please try again! </p>
      )}
      <label className="reviews__label form__label" htmlFor="review">
       Your review
      </label>
      <Rating onChange={handleRatingChange}/>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={comment}
      />
      <div className="reviews__button-wrapper">
        {isSending && <p>Sending...</p>}

        <p className="reviews__help">
        To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
        with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isSubmitDisabled}
        >
        Submit
        </button>
      </div>
    </form>

  );
}

export {ReviewForm};
