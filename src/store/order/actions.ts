import { ActionTypes, type SetOrder, type SetOrders, type SetSelectedOrderId } from './types';

function setOrders(payload: SetOrders['payload']) {
  return {
    type: ActionTypes.SET_ORDERS,
    payload,
  };
}

function setOrder(payload: SetOrder['payload']) {
  return {
    type: ActionTypes.SET_ORDER,
    payload,
  };
}

function setSelectedOrderId(payload: SetSelectedOrderId['payload']) {
  return {
    type: ActionTypes.SET_SELECTED_ORDER_ID,
    payload,
  };
}

export const OrderActions = {
  setOrders,
  setOrder,
  setSelectedOrderId,
};
