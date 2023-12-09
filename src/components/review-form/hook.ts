import { FormEvent } from 'react';

import { useAppDispatch } from '../../hooks';

import { postReview } from '../../store/actions/api-actions';

import { TOffer } from '../../types/offer';
import { TReviewData } from '../../types/review';

const useFormSubmission = () => {
  const dispatch = useAppDispatch();

  const handleFormSubmit = (reviewData: TReviewData, offerId: TOffer['id']) => (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    dispatch(postReview({ reviewData, offerId }));
  };

  return { handleFormSubmit };
};

export { useFormSubmission };
