import { configureStore } from '@reduxjs/toolkit';
import { cartApi } from './services/CartService';
import CartSlice from './slices/CartSlice';
import logger from 'redux-logger';
import { useDispatch, useSelector } from 'react-redux';
import UserSlice from './slices/UserSlice';

const createCustomStore = (options?: any) => {
  return configureStore({
    reducer: {
      [cartApi.reducerPath]: cartApi.reducer,
      cart: CartSlice,
      user: UserSlice,
    },
    middleware: (getDefaultMiddleware) => [
      ...getDefaultMiddleware({
        serializableCheck: false,
      }).concat(cartApi.middleware, logger),
    ],
    ...options,
  });
};

const store = createCustomStore();
const useCustomDispatch = () => useDispatch();
const useTypedSelector = useSelector;

export { createCustomStore, store, useCustomDispatch, useTypedSelector };
