import { combineReducers } from 'redux';

import merchant from './merchant/reducer';
import order from './order/reducer';

const rootReducer = combineReducers({
  order,
  merchant,
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;
