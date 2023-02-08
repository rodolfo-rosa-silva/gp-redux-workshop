import React from 'react';

import Consumer from '../Consumer';
import OrderManager from '../OrderManager';
import * as Styled from './styles';

const App: React.FC = () => {
  return (
    <Styled.Container>
      <OrderManager />
      <Consumer />
    </Styled.Container>
  );
};

export default App;
