import { all } from 'redux-saga/effects';
import livestreamSaga from './livestream/sagas';

function* rootSaga() {
  yield all([livestreamSaga()]);
}

export default rootSaga;
