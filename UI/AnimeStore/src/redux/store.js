import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';
import userReducer from './userRedux';
import registerReducer from './registerReducer';
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
import storage from 'redux-persist/lib/storage';
import { encryptData, decryptData } from '../middleware/encrypted';

// Function to load initial state from secure storage
const loadInitialState = () => {
  try {
    const encryptedState = localStorage.getItem('reduxState');
    if (encryptedState) {
      return decryptData(encryptedState);
    }
    return undefined;
  } catch (error) {
    console.error('Error loading state from secure storage:', error);
    return undefined;
  }
};

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  transforms: [
    {
      in: (state) => encryptData(state),
      out: (encryptedState) => decryptData(encryptedState),
    },
  ],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  userRegistration: registerReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const preloadedState = loadInitialState();

export const store = configureStore({
  reducer: persistedReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
