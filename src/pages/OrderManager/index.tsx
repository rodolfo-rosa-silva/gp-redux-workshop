import React from 'react';
import { useSelector } from 'react-redux';
import { OrderSelector } from 'src/store/order/selectors';

import Header from './Header';
import OrderDetails from './OrderDetails';
import OrderList from './OrderList';
import * as Styles from './styles';

const OrderManager: React.FC = () => {
  const selectedOrder = useSelector(OrderSelector.getSelectedOrder);

  return (
    <Styles.Container>
      <Header />
      <Styles.Body>
        <OrderList />
        {selectedOrder != null && <OrderDetails order={selectedOrder} />}
      </Styles.Body>
    </Styles.Container>
  );
};

export default OrderManager;
