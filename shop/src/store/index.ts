import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';

export const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      user: UserSlice,
    },
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
