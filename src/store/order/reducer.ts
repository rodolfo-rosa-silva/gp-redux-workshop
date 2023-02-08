import produce from 'immer';

import { ActionTypes, type OrderActionsType, type OrderState } from './types';

const initialState: OrderState = {
  orders: {},
  selectedOrderId: null,
};

export default (state = initialState, action: OrderActionsType) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SET_ORDERS: {
        draft.orders = action.payload.orders;
        break;
      }
      case ActionTypes.SET_ORDER: {
        const { order } = action.payload;
        draft.orders[order.id] = order;
        break;
      }
      case ActionTypes.SET_SELECTED_ORDER_ID: {
        draft.selectedOrderId = action.payload.orderId;
        break;
      }
      default:
    }
  });
};
