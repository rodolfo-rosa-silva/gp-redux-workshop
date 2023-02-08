import React from 'react';
import { useDispatch } from 'react-redux';
import Button, { ButtonColor } from 'src/components/Button';
import { OrderActions } from 'src/store/order/actions';
import { OrderStatus, type OrderType } from 'src/store/order/types';

import * as Styled from './styles';

interface Props {
  order: OrderType;
}

const orderTextByStatus = {
  [OrderStatus.PLACED]: 'Aguardando a confirmação do restaurante',
  [OrderStatus.CONFIRMED]: 'O pedido está sendo preparado e logo sairá para entrega',
  [OrderStatus.DISPATCHED]: 'Seu pedido está indo até você',
  [OrderStatus.CONCLUDED]: 'Pedido concluido',
  [OrderStatus.CANCELLED]: 'Pedido cancelado',
};

const ConsumerOrderItem: React.FC<Props> = ({ order }) => {
  const dispatch = useDispatch();

  const handleConcludeOrder = () => {
    dispatch(OrderActions.setOrder({ order: { ...order, status: OrderStatus.CONCLUDED } }));
  };

  return (
    <Styled.Container>
      <div className='infos'>
        <span className='merchant-name'>{order.merchant.name}</span>
        <span className='order-status'>
          {orderTextByStatus[order.status]} • Nº {order.shortId}
        </span>
      </div>
      {order.status === OrderStatus.DISPATCHED && (
        <Button color={ButtonColor.RED} onClick={handleConcludeOrder}>
          Confirmar entrega
        </Button>
      )}
    </Styled.Container>
  );
};

export default ConsumerOrderItem;
