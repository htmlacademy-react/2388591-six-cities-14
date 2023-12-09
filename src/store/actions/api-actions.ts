import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';
import { AxiosError } from 'axios';

import { TOffer } from '../../types/offer';
import { TPreviewOffer } from '../../types/preview-offer';
import { TReview, TReviewData } from '../../types/review';
import { TLoginData } from '../../types/login-data';
import { TAuthorizedUser } from '../../types/authorized-user';

import { dropToken, saveToken } from '../../services/token';

import { API_URL, APIRoute, AppRoute, FavoriteStatus, HttpStatus } from '../../const/const';

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

export const fetchReviews = createAsyncThunk<TReview[], TOffer['id'], TExtra>(
  'reviews/fetch',
  async (offerId, { extra: api }) => {
    const { data } = await api.get<TReview[]>(`${APIRoute.Comments}/${offerId}`);
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
    const { data } = await api.get<TPreviewOffer[]>(APIRoute.Favorite);

    return data;

  }
);

export const addFavorite = createAsyncThunk<TPreviewOffer, TOffer['id'], TExtra>(
  'favorites/add',
  async (offerId, { extra: api }) => {
    const { data } = await api.post<TPreviewOffer>(`${APIRoute.Favorite}/${offerId}/${FavoriteStatus.Added}`);
    return data;
  }
);

export const deleteFavorite = createAsyncThunk<TPreviewOffer, TOffer['id'], TExtra>(
  'favorites/delete',
  async (offerId, { extra: api}) => {
    const { data } = await api.post<TPreviewOffer>(`${APIRoute.Favorite}/${offerId}/${FavoriteStatus.Deleted}`);
    return data;
  });

export const checkAuth = createAsyncThunk<TAuthorizedUser, undefined, TExtra>(
  'user/checkAuth',
  async (_arg, {extra: api}) =>{
    const { data } = await api.get<TAuthorizedUser>(APIRoute.Login);

    return data;
  }
);

export const login = createAsyncThunk<TAuthorizedUser, TLoginData, TExtra>(
  'user/login',
  async (loginData, { extra: api, rejectWithValue }) => {
    try {
      const { data } = await api.post<TAuthorizedUser>(AppRoute.Login, loginData);
      saveToken(data.token);
      return data;
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response && error.response.status === HttpStatus.BadRequest) {
          return rejectWithValue('Bad Request: Some data is missing or invalid.');
        } else {
          return rejectWithValue('Error during login.');
        }
      } else {
        return rejectWithValue('Unknown error during login.');
      }
    }
  }
);

export const logout = createAsyncThunk<void, undefined, TExtra> (
  'user/logout',
  async (_arg, { extra: api }) => {
    await api.delete(APIRoute.Logout);
    dropToken();
  }
);

export const postReview = createAsyncThunk<
  TReview,
  { reviewData: TReviewData; offerId: TOffer['id'] },
  TExtra
>(
  'comment/post',
  async ({reviewData, offerId}, { extra: api }) => {
    const { data } = await api.post<TReview>(
      `${APIRoute.Comments}/${offerId}`,
      reviewData
    );
    return data;
  }
);


