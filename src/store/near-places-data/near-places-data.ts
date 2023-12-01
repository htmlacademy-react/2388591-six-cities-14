import { createSlice } from '@reduxjs/toolkit';

import { fetchNearPlaces } from '../api-actions';

import { TNearPlacesData } from '../../types/state';

const initialState: TNearPlacesData = {
  nearPlaces: [],

};

export const nearPlacesData = createSlice({
  name: 'NEAR-PLACES',
  initialState,
  reducers:{},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlaces = action.payload;
      });
  }
});
