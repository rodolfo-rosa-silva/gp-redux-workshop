import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSelector } from 'src/store/order/selectors';

import ConsumerOrderItem from './ConsumerOrderItem';
import * as Styled from './styles';

const ConsumerOrders: React.FC = () => {
  const orders = useSelector(OrderSelector.getOrders);

  return (
    <Styled.Container>
      {Object.values(orders)
        .reverse()
        .map(order => (
          <ConsumerOrderItem order={order} key={order.id} />
        ))}
    </Styled.Container>
  );
};

export default ConsumerOrders;
