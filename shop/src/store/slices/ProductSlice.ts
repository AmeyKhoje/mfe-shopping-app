import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';
import { productsApi } from '../services/ProductService';
import { EndpointBuilder } from '@reduxjs/toolkit/dist/query/endpointDefinitions';

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
  extraReducers: (builder: ActionReducerMapBuilder<IProductSlice>) => {
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
            products: action.payload.data || action.payload,
          };
        }
      )
      .addMatcher(
        productsApi.endpoints.getAllProducts.matchRejected,
        (state, action) => {
          console.log('Product_Rejected');
        }
      );
    builder
      .addMatcher(
        productsApi.endpoints.addProduct.matchPending,
        (state, action) => {
          console.log('Loading products');
        }
      )
      .addMatcher(
        productsApi.endpoints.addProduct.matchFulfilled,
        (state, action) => {
          console.log('ACTION', action);

          // return {
          //   ...state,
          //   products: action.payload.data,
          // };
        }
      )
      .addMatcher(
        productsApi.endpoints.addProduct.matchRejected,
        (state, action) => {
          console.log('Failed to add');
        }
      );
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
