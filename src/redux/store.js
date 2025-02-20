import { configureStore } from '@reduxjs/toolkit';
import { productApi } from '@/services/productApi'; 
import { authApi } from '@/services/authApi'; 
import authReducer from './features/authSlice';
import { saveState } from '@/utils/storage';
import throttle from 'lodash/throttle';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer, 
    [authApi.reducerPath]: authApi.reducer, 
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productApi.middleware) 
      .concat(authApi.middleware), 
});

store.subscribe(
  throttle(() => {
    saveState({
      auth: store.getState().auth
    });
  }, 1000) 
);

export default store;