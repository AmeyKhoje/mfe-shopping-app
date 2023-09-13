import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlice from './slices/ProductSlice';
import { productsApi } from './services/ProductService';
import logger from 'redux-logger';

export const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      user: UserSlice,
      product: ProductSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware, logger),
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
