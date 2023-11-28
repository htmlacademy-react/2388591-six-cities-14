import { Fragment } from 'react';

type RatingProps = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const RATING_MAP = {
  1: 'terribly',
  2: 'badly',
  3: 'not bad',
  4: 'good',
  5: 'perfect',
};

function Rating({ onChange }: RatingProps) {
  return (
    <div className="reviews__rating-form form__rating">
      {Object.entries(RATING_MAP).reverse().map(([star, title]) => (
        <Fragment key={star}>
          <input
            className="form__rating-input visually-hidden"
            name="rating"
            value={star}
            id={`${star}-stars`}
            type="radio"
            onChange={onChange}
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
        </Fragment>
      ))}
    </div>
  );
}

export {Rating};
