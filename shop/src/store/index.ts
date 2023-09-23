import { configureStore } from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductSlice from './slices/ProductSlice';
import { productsApi } from './services/ProductService';
import logger from 'redux-logger';
import { cartApi } from './services/CartService';
import CartSlice from './slices/CartSlice';

export const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [cartApi.reducerPath]: cartApi.reducer,
      user: UserSlice,
      product: ProductSlice,
      cart: CartSlice,
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }).concat(productsApi.middleware, logger),
      ...getDefaultMiddleware({
        serializableCheck: false,
      }).concat(cartApi.middleware, logger),
    ],
    ...options,
  });
};

export const store = createCustomStore();
export const useCustomDispatch = () => useDispatch();
export const useTypedSelector = useSelector;
