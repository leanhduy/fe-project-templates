import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage' // defaults to localStorage for web

import sampleReducer from '@/features/sample/sampleSlice.ts'
import { sampleApi } from '@/services/sampleApi.ts'
import { userApi } from '@/services/userApi.ts'

const persistConfig = {
  key: 'root',
  storage,
  // White list specific slices if needed, e.g.:
  // whitelist: ['counter'],
}

const rootReducer = combineReducers({
  sample: sampleReducer,
  [sampleApi.reducerPath]: sampleApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  // Add more slices here
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist + Date objects
    }).concat(
      sampleApi.middleware,
      // Other RTK Query middlewares can be added here as needed
      userApi.middleware,
    ),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
