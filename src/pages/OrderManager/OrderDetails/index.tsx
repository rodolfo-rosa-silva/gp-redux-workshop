import React from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonColor } from 'src/components/Button';
import { OrderActions } from 'src/store/order/actions';
import { OrderStatus, type OrderType } from 'src/store/order/types';

import * as Styles from './styles';

interface Props {
  order: OrderType;
}

const OrderDetails: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();

  const handleConfirmOrder = () => {
    dispatch(OrderActions.setOrder({ order: { ...order, status: OrderStatus.CONFIRMED } }));
  };

  const handleDispatchOrder = () => {
    dispatch(OrderActions.setOrder({ order: { ...order, status: OrderStatus.DISPATCHED } }));
  };

  return (
    <Styles.Container>
      <div className='content'>
        <h2>{`Cliente: ${order.clientName}`}</h2>
        <h3>{`Pedido #${order.shortId}`}</h3>
      </div>
      {[OrderStatus.PLACED, OrderStatus.CONFIRMED].includes(order.status) && (
        <div className='footer'>
          {order.status === OrderStatus.PLACED && (
            <Button color={ButtonColor.RED} onClick={handleConfirmOrder}>
              Confirmar pedido
            </Button>
          )}
          {order.status === OrderStatus.CONFIRMED && (
            <Button color={ButtonColor.GREEN} onClick={handleDispatchOrder}>
              Despachar pedido
            </Button>
          )}
        </div>
      )}
    </Styles.Container>
  );
};

export default OrderDetails;
