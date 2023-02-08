import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSelector } from 'src/store/order/selectors';

import OrderCard from './OrderCard';
import * as Styles from './styles';

const OrderList: React.FC = () => {
  const orders = useSelector(OrderSelector.getOrders);

  return (
    <Styles.Container>
      {Object.values(orders)
        .reverse()
        .map(order => (
          <OrderCard order={order} key={order.id} />
        ))}
    </Styles.Container>
  );
};

export default OrderList;
