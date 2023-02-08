import React from 'react';
import { useSelector } from 'react-redux';
import { MerchantSelector } from 'src/store/merchant/selectors';

import * as Styles from './styles';

const Header: React.FC = () => {
  const selectedMerchant = useSelector(MerchantSelector.getSelectedMerchant);

  return (
    <Styles.Container>
      <h1>{selectedMerchant.name}</h1>
    </Styles.Container>
  );
};

export default Header;
