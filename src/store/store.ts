import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/es/storage' // defaults to localStorage for web

import sampleReducer from '@/features/sample/sampleSlice.ts'

const persistConfig = {
  key: 'root',
  storage,
  // White list specific slices if needed, e.g.:
  // whitelist: ['counter'],
}

const rootReducer = combineReducers({
  sample: sampleReducer,
  // Add more slices here
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist + Date objects
    }),
  // TODO: will add RTK Query's api middleware here when we add RTK Query
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
