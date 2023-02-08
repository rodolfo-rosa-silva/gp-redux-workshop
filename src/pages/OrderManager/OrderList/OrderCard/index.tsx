import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OrderActions } from 'src/store/order/actions';
import { OrderSelector } from 'src/store/order/selectors';
import { OrderStatus, type OrderType } from 'src/store/order/types';

import * as Styles from './styles';

interface Props {
  order: OrderType;
}

const orderTextByStatus = {
  [OrderStatus.PLACED]: 'Confirme o pedido',
  [OrderStatus.CONFIRMED]: 'Entregue o pedido',
  [OrderStatus.DISPATCHED]: 'Despachado',
  [OrderStatus.CONCLUDED]: 'Concluido',
  [OrderStatus.CANCELLED]: 'Cancelado',
};

const OrderCard: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();
  const selectedOrder = useSelector(OrderSelector.getSelectedOrder);

  const handleSelectOrder = () => {
    dispatch(OrderActions.setSelectedOrderId({ orderId: order.id }));
  };

  return (
    <Styles.Container onClick={handleSelectOrder} isSelected={selectedOrder?.id === order.id}>
      <span className='merchant-name'>{order.merchant.name}</span>
      <div className='row'>
        <span className='order-id'>{`#${order.shortId}`}</span>
        <span className='client-name'> • {order.clientName}</span>
      </div>
      <span className={`order-status ${order.status === OrderStatus.PLACED ? 'attention' : ''}`}>
        {orderTextByStatus[order.status]}
      </span>
    </Styles.Container>
  );
};

export default OrderCard;
