import { type StoreState } from '../rootReducer';
import { type OrderType } from './types';

const getOrders = (state: StoreState) => {
  return state.order.orders;
};

const getOrderById = (orderId: OrderType['id']) => (state: StoreState) => {
  return state.order.orders[orderId];
};

const getSelectedOrder = (state: StoreState) => {
  const { orders, selectedOrderId } = state.order;
  return selectedOrderId != null ? orders[selectedOrderId] : null;
};

export const OrderSelector = {
  getOrders,
  getOrderById,
  getSelectedOrder,
};
