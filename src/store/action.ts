import { createAction } from '@reduxjs/toolkit';
import { TCity } from '../types/offer';

export const setActiveCity = createAction<TCity>('offers/setCity');

export const dropOffer = createAction('offer/dropOffer');

