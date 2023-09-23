import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { AnyObject } from 'yup';
import { cartApi } from '../services/CartService';

type TCartSlice = {
  cart: AnyObject;
};

const initialState: TCartSlice = {
  cart: {},
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<TCartSlice>) => {
    builder
      .addMatcher(cartApi.endpoints.getCart.matchPending, (state, action) => {
        return {
          ...state,
          isLoading: true,
        };
      })
      .addMatcher(cartApi.endpoints.getCart.matchFulfilled, (state, action) => {
        return {
          ...state,
          cart: action.payload,
          isError: false,
        };
      })
      .addMatcher(cartApi.endpoints.getCart.matchFulfilled, (state, action) => {
        return {
          ...state,
          isLoading: false,
          isError: true,
        };
      });
  },
});

export default cartSlice.reducer;
