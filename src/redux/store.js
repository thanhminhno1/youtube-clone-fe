import { applyMiddleware, createStore, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducer';
import middleware, { sagaMiddleware } from './middleware';
import { ONCE_TILL_UNMOUNT, DAEMON } from './constants';

const reducer = persistReducer(
  {
    key: 'bootcamp', // key is required
    storage, // storage is now required
    whitelist: ['user'],
  },
  rootReducer(),
);

const enhancers = [];

// Dev tools are helpful
if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

/* istanbul ignore next */
const configStore = (initialState = {}) => {
  const store = createStore(reducer, initialState, composedEnhancers);

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      store.replaceReducer(rootReducer());
    });
  }

  store.injectedSagas = {};
  store.injectedReducers = {};

  store.injectSaga = (key, saga, mode) => {
    const hasSaga = Reflect.has(store.injectedSagas, key);
    if (!hasSaga || (mode === DAEMON && mode === ONCE_TILL_UNMOUNT)) {
      store.injectedSagas[key] = { saga, mode, task: sagaMiddleware.run(saga) };
    }
  };

  store.ejectSaga = key => {
    if (!Reflect.has(store.injectedSagas, key)) return;
    const { task, mode } = store.injectedSagas[key];
    if (mode !== DAEMON) task.cancel();
  };

  store.injectReducer = (key, _reducer) => {
    if (Reflect.has(store.injectedReducers, key)) return;
    store.injectedReducers[key] = _reducer;
    store.replaceReducer(rootReducer(store.injectedReducers));
    return store;
  };

  return {
    persistor: persistStore(store),
    store,
  };
};

const { store, persistor } = configStore();

global.store = store;

export { store, persistor };
