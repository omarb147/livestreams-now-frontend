import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import livestreamReducer from './livestream/reducer';

export const onError = (error: any) => {
  console.error(error); // eslint-disable-line no-console
  throw error;
};
const rootReducer = combineReducers({
  livestreamState: livestreamReducer,
});

export const sagaMiddleware = createSagaMiddleware({
  onError,
});

export default function configureStore(initialState = {}) {
  const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));
  const store = createStore(rootReducer, initialState, enhancer);

  sagaMiddleware.run(rootSaga);

  return store;
}
