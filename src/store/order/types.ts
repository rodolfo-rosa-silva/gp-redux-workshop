import { type MerchantType } from '../merchant/types';

export enum OrderStatus {
  PLACED = 'PLACED',
  CONFIRMED = 'CONFIRMED',
  DISPATCHED = 'DISPATCHED',
  CONCLUDED = 'CONCLUDED',
  CANCELLED = 'CANCELLED',
}

export interface OrderType {
  id: string;
  merchant: MerchantType;
  shortId: string;
  status: OrderStatus;
  clientName: string;
}

export interface OrderState {
  orders: Record<string, OrderType>;
  selectedOrderId: OrderType['id'] | null;
}

export enum ActionTypes {
  SET_ORDERS = '@order/SET_ORDERS',
  SET_ORDER = '@order/SET_ORDER',
  SET_SELECTED_ORDER_ID = '@order/SET_SELECTED_ORDER_ID',
}

export interface SetOrders {
  type: typeof ActionTypes.SET_ORDERS;
  payload: { orders: OrderState['orders'] };
}

export interface SetOrder {
  type: typeof ActionTypes.SET_ORDER;
  payload: { order: OrderType };
}

export interface SetSelectedOrderId {
  type: typeof ActionTypes.SET_SELECTED_ORDER_ID;
  payload: { orderId: OrderType['id'] };
}

export type OrderActionsType = SetOrders | SetOrder | SetSelectedOrderId;
