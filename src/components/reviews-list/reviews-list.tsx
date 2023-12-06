import { useEffect } from 'react';

import { fetchReviews } from '../../store/actions/api-actions';
import { useAppDispatch, useAppSelector } from '../../hooks';

import { Review } from '../review/review';
import { ReviewForm } from '../review-form/review-form';

import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { selectReviews } from '../../store/reviews-data/selectors';

import { TOffer } from '../../types/offer';

import { AuthorizationStatus, MAX_SHOWN_REVIEWS } from '../../const/const';

type ReviewListProp = {
  offerId: TOffer['id'];
}

function ReviewList({offerId}: ReviewListProp) {
  const dispatch = useAppDispatch();
  const reviews = useAppSelector(selectReviews);
  const sortedReviews = reviews.toSorted((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  const shownReviews = sortedReviews.slice(0, MAX_SHOWN_REVIEWS);
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);

  useEffect(() => {
    dispatch(fetchReviews(offerId));
  }, [dispatch, offerId]);


  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {shownReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm offerId={offerId} />}
    </section>
  );
}

export { ReviewList };
