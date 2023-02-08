/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { configureStore } from '@reduxjs/toolkit';
import { applyMiddleware, compose } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import Reactotron from './reactotronConfig';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: '@order-manager',
  storage,
  whitelist: ['order', 'merchant'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const enhancer =
  process.env.NODE_ENV === 'development'
    ? compose(Reactotron.createEnhancer!(), applyMiddleware(...middlewares))
    : applyMiddleware(...middlewares);

const store = configureStore({
  reducer: persistedReducer,
  enhancers: [enhancer],
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };
