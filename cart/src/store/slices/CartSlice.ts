import { Slice, SliceCaseReducers, createSlice } from '@reduxjs/toolkit';

type TCartSlice = {
  cartList: any[];
  checkoutDetails: {
    subtotal: number;
    discount: number;
    grandTotal: number;
  };
};

const initialState: TCartSlice = {
  cartList: [],
  checkoutDetails: {
    discount: 0,
    grandTotal: 0,
    subtotal: 0,
  },
};

const productSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {},
});
