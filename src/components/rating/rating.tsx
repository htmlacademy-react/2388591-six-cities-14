import React, { ChangeEvent } from 'react';

type RatingProps = {
  value: number;
  onChange: (value: number) => void;
};

const RATING_MAP = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function Rating({ value, onChange }: RatingProps) {
  const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RATING_MAP).reverse().map(([star, title]) => (
        <React.Fragment key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            onChange={handleRatingChange}
            checked={value === Number(star)}
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
