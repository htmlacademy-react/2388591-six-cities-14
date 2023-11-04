/* eslint-disable camelcase */
import React, {Fragment, useState} from 'react';

import { MAX_REVIEW_lENGTH,MIN_REVIEW_lENGTH } from '../../const';

const ratings = [5, 4, 3, 2, 1];

export default function ReviewForm(): JSX.Element {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);

  const isSubmitDisabled =
    review.length >= MIN_REVIEW_lENGTH &&
    review.length <= MAX_REVIEW_lENGTH &&
    rating !== 0;


  const handleFieldChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  const handleRatingChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">
       Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {ratings.map((star) => (
          <Fragment key={star}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={star}
              id={`${star}-stars`}
              type="radio"
              onChange={handleRatingChange}
              checked={rating === star}
            />
            <label
              htmlFor={`${star}-stars`}
              className={`reviews__rating-label form__rating-label ${
                rating >= star ? 'reviews__rating-label--active' : ''
              }`}
              title={star === 5 ? 'perfect' : ''}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </Fragment>
        ))}
      </div>
      <textarea
        onChange={handleFieldChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        defaultValue={review}
      />
      <div className="reviews__button-wrapper">
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
