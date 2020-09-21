import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import {AsyncStorage as storage} from 'react-native';
import rootReducer from './index';
import rootSaga from '../Saga';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage,
  // whitelist: [],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// create saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [];
const enhancers = [];

middleware.push(sagaMiddleware);
middleware.push(logger);
enhancers.push(applyMiddleware(...middleware));

const store = createStore(persistedReducer, composeEnhancers(...enhancers));
const persistor = persistStore(store);

// run the saga
sagaMiddleware.run(rootSaga);
export {store, persistor};
