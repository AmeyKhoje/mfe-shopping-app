import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthSliceInterface {
  user: object;
  isLoggedIn: boolean;
}

const initialState: AuthSliceInterface = {
  user: {},
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedIn: (
      state: AuthSliceInterface,
      action: PayloadAction<boolean>
    ) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = authSlice.actions;

export default authSlice.reducer;
