import { configureStore } from '@reduxjs/toolkit';
import { cartApi } from './services/CartService';
import CartSlice from './slices/CartSlice';
import logger from 'redux-logger';
import { useDispatch, useSelector } from 'react-redux';

const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      [cartApi.reducerPath]: cartApi.reducer,
      cart: CartSlice,
    },
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(cartApi.middleware, logger);
    },
    ...options,
  });
};

const store = createCustomStore();
const useCustomDispatch = () => useDispatch();
const useTypedSelector = useSelector;

export { createCustomStore, store, useCustomDispatch, useTypedSelector };
