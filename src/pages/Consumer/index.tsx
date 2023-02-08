import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonColor } from 'src/components/Button';
import { MerchantSelector } from 'src/store/merchant/selectors';
import { OrderActions } from 'src/store/order/actions';
import { OrderSelector } from 'src/store/order/selectors';
import { OrderStatus } from 'src/store/order/types';
import { v4 as uuidv4 } from 'uuid';

import ConsumerOrders from './ConsumerOrders';
import * as Styles from './styles';

const Consumer: React.FC = () => {
  const dispatch = useDispatch();
  const orders = useSelector(OrderSelector.getOrders);
  const merchants = useSelector(MerchantSelector.getMerchants);
  const [clientName, setClientName] = useState('');
  const [merchantId, setMerchantId] = useState(Object.values(merchants)[0]?.id);

  const onResetForm = () => {
    setClientName('');
    setMerchantId(Object.values(merchants)[0]?.id);
  };

  const generateOrderShortId = (merchantIdToFind: string) => {
    const ordersByMerchant = Object.values(orders).filter(
      order => order.merchant.id === merchantIdToFind,
    );
    return ordersByMerchant.length + 1;
  };

  const handleRequestOrder = () => {
    dispatch(
      OrderActions.setOrder({
        order: {
          id: uuidv4(),
          clientName,
          merchant: merchants[merchantId],
          status: OrderStatus.PLACED,
          shortId: generateOrderShortId(merchantId).toString(),
        },
      }),
    );
    onResetForm();
  };

  return (
    <Styles.Container>
      <Styles.Title>Preencha seu nome e selecione um restaurante para fazer o pedido</Styles.Title>
      <Styles.Input
        placeholder='Nome do cliente'
        value={clientName}
        onChange={e => {
          setClientName(e.target.value);
        }}
      />
      <Styles.Select
        defaultValue={merchantId}
        value={merchantId}
        onChange={e => {
          setMerchantId(e.target.value);
        }}>
        {Object.values(merchants).map(merchant => (
          <option value={merchant.id} key={merchant.id}>
            {merchant.name}
          </option>
        ))}
      </Styles.Select>
      {clientName.length > 0 && merchantId.length > 0 && (
        <Styles.ButtonRequest color={ButtonColor.GREEN} onClick={handleRequestOrder}>
          Fazer pedido
        </Styles.ButtonRequest>
      )}
      <ConsumerOrders />
    </Styles.Container>
  );
};

export default Consumer;
