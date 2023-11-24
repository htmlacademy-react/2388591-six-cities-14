import {Review} from '../review/review';
import ReviewForm from '../review-form/review-form';
import { REVIEWS } from '../../mocks/reviews';
import { MAX_SHOWN_REVIEWS } from '../../const';

function ReviewList() {
  const sortedReviews = REVIEWS.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const shownReviews = sortedReviews.slice(0, MAX_SHOWN_REVIEWS);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{shownReviews.length}</span></h2>
      <ul className="reviews__list">
        {shownReviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export {ReviewList};

