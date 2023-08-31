import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/AuthSlice';
import { useDispatch, useSelector } from 'react-redux';

export const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      auth: AuthSlice,
    },
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
