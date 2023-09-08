import { createSlice } from '@reduxjs/toolkit';
import * as yup from 'yup';
import { PayloadAction } from '@reduxjs/toolkit/dist/createAction';

export interface UserSliceInterface {
  user: yup.AnyObject;
}

const initialState: UserSliceInterface = {
  user: {},
};

const userSlice = createSlice({
  initialState,
  name: 'user',
  reducers: {
    setUser: (
      state: UserSliceInterface,
      action: PayloadAction<yup.AnyObject>
    ) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
