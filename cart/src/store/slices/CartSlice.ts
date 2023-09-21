import { AnyAction, createSlice } from '@reduxjs/toolkit';
import { cartApi } from '../services/CartService';

type TCartSlice = {
  cartList: any[];
  checkoutDetails: {
    subtotal: number;
    discount: number;
    grandTotal: number;
  };
  isLoading: boolean;
  isError: boolean;
};

const initialState: TCartSlice = {
  cartList: [],
  checkoutDetails: {
    discount: 0,
    grandTotal: 0,
    subtotal: 0,
  },
  isLoading: false,
  isError: false,
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
  extraReducers(builder) {
    builder
      .addMatcher(
        cartApi.endpoints.getCart.matchPending,
        (state, action: any) => {
          return {
            ...state,
            isLoading: true,
          };
        }
      )
      .addMatcher(
        cartApi.endpoints.getCart.matchFulfilled,
        (state, action: AnyAction) => {
          return {
            ...state,
            cartList: action?.payload?.data || action.payload,
            isLoading: false,
          };
        }
      )
      .addMatcher(cartApi.endpoints.getCart.matchRejected, (state, action) => {
        return {
          ...state,
          isError: true,
        };
      });
  },
});

export default cartSlice.reducer;
