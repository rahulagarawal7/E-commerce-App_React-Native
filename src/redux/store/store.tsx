import {configureStore} from '@reduxjs/toolkit';
import productsReducer from '../slices/products/products.reducer';
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
