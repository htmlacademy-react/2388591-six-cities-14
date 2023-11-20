import { createAction } from '@reduxjs/toolkit';
import { TOffer, TCity } from '../types/offer-type';


export const setActiveCity = createAction<TCity>('offers/setCity');

export const fetchOffers = createAction('offers/fetch');

export const fetchOffer = createAction<TOffer['id']>('offer/fetch');

export const fetchNearPlaces = createAction<TOffer['id']>('near_places/fetch');

export const fetchReviews = createAction<TOffer['id']>('reviews/fetch');

export const dropOffer = createAction('offer/dropOffer');

export const fetchFavorities = createAction('favorities/fetch');


