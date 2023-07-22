import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptData, decryptData } from '../middleware/encrypted';
import rootReducer from './reducers';
import thunk from 'redux-thunk';

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
  storage,
  transforms: [
    {
      // Transform state during storage and retrieval
      in: (state) => encryptData(state),
      out: (encryptedState) => decryptData(encryptedState),
    },
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const preloadedState = loadInitialState();

const store = configureStore({
  reducer: persistedReducer,
  middleware: [...getDefaultMiddleware({ thunk })],
  preloadedState,
});

export const persistor = persistStore(store);
export default store;
