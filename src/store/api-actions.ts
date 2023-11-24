import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { API_URL, APIRoute } from '../const';

import { TOffer } from '../types/offer';
import { TReview } from '../types/review-type';
import { TPreviewOffer } from '../types/preview-offer';


type TExtra = {
  extra: AxiosInstance;
};

export const fetchOffers = createAsyncThunk<TPreviewOffer[], undefined, TExtra>(
  'offers/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(`${API_URL}/offers`);

    return data;
  }

);

export const fetchOffer = createAsyncThunk<TOffer, TOffer['id'], TExtra>(
  'offer/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TOffer>(`${APIRoute.Offers}/${offerId}`);

    return data;

  }
);

export const fetchReviews = createAsyncThunk<TReview[], undefined, TExtra>(
  'reviews/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${APIRoute.Offers}/${offerId}`);

    return data;
  }
);

export const fetchNearPlaces = createAsyncThunk<TPreviewOffer[], TOffer['id'], TExtra>(
  'near-places/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(`${APIRoute.Offers}/${offerId}${APIRoute.NearPlaces}`);

    return data;
  }
);

export const fetchFavorites = createAsyncThunk<TPreviewOffer[], undefined, TExtra>(
  'favorites/fetch',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<TPreviewOffer[]>(APIRoute.Favorites);

    return data;

  }
);
