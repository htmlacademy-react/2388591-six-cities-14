import React, { ChangeEvent, useEffect, useState } from 'react';

import { useAppSelector } from '../../hooks';

import { selectFetchingStatus } from '../../store/reviews-data/selectors';

import { RequestStatus } from '../../const/const';

type RatingProps = {
  value: number;
  onChange: (value: number) => void;
  disabled?: boolean;
};

const RatingMap = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
} as const;

function Rating({ value, onChange, disabled }: RatingProps) {
  const sendingStatus = useAppSelector(selectFetchingStatus);

  const isSending = sendingStatus === RequestStatus.Loading;
  const [lastValidRating, setLastValidRating] = useState(value);
  const [submissionError, setSubmissionError] = useState(false);

  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLastValidRating(Number(e.target.value));
    onChange(Number(e.target.value));
  };

  useEffect(() => {
    if (isSending) {
      setLastValidRating(value);
      setSubmissionError(false);
    }
  }, [isSending, value]);

  useEffect(() => {
    if (!isSending && sendingStatus === RequestStatus.Error) {
      setSubmissionError(true);
    }
  }, [isSending, sendingStatus]);

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RatingMap).reverse().map(([star, title]) => (
        <React.Fragment key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            onChange={handleRatingChange}
            checked={submissionError ? lastValidRating === Number(star) : value === Number(star)}
            disabled={disabled || isSending}
          />
          <label
            htmlFor={`${star}-stars`}
            className="reviews__rating-label form__rating-label"
            title={title}
          >
            <svg className="form__star-image" width={37} height={33}>
              <use xlinkHref="#icon-star" />
            </svg>
          </label>
        </React.Fragment>
      ))}
    </div>
  );
}

export { Rating };
