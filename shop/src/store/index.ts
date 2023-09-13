import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlice from './slices/ProductSlice';
import { productsApi } from './services/ProductService';
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';

export const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      user: UserSlice,
      product: ProductSlice,
    },
    middleware: (curryGetDefaultMiddleware) =>
      curryGetDefaultMiddleware().concat(productsApi.middleware),
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
