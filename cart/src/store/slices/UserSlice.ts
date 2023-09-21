import { AnyAction, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { cartApi } from '../services/CartService';
import { AnyObject } from 'yup';

type TUserSlice = {
  user: AnyObject;
};

const initialState: TUserSlice = {
  user: {},
};

const cartSlice = createSlice({
  initialState,
  name: 'cart',
  reducers: {
    setUser: (state: TUserSlice, action: PayloadAction<AnyObject>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = cartSlice.actions;

export default cartSlice.reducer;
