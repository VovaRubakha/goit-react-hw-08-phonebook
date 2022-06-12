import { configureStore } from '@reduxjs/toolkit';

import contactsReducer from './contacts/contact-slice';
import userReducer from './user/user-slice';

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};
const persistedReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    user: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
