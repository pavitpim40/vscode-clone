import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { darkModeReducer } from './slices/dark-mode/darkMode';
import { fileReducer } from './slices/file/files';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistStore } from 'redux-persist';

const rootReducer = combineReducers({
  darkMode: darkModeReducer,
  files: fileReducer,
});

const persistConfig = {
  key: 'root',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,

  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
      },
    });
  },
});

export const persistor = persistStore(store);
