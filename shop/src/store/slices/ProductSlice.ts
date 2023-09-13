import { createSlice } from '@reduxjs/toolkit';
import * as yup from 'yup';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { productsApi } from '../services/ProductService';

export interface IProductSlice {
  products: any[];
}

const initialState: IProductSlice = {
  products: [],
};

const userSlice = createSlice({
  initialState,
  name: 'product',
  reducers: {
    setUser: (state: IProductSlice, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        productsApi.endpoints.getAllProducts.matchPending,
        (state, action) => {
          console.log('Products_Pending');
        }
      )
      .addMatcher(
        productsApi.endpoints.getAllProducts.matchFulfilled,
        (state, action) => {
          return {
            ...state,
            products: action.payload.data,
          };
        }
      )
      .addMatcher(
        productsApi.endpoints.getAllProducts.matchRejected,
        (state, action) => {
          console.log('Product_Rejected');
        }
      );
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
