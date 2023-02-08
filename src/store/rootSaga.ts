import { all, fork } from 'redux-saga/effects';

import orderSaga from './order/sagas';

export default function* rootSaga() {
  yield all([fork(orderSaga)]);
}
