import React from 'react';

import * as Styles from './styles';

export enum ButtonColor {
  RED = '#ea1d2c',
  GREEN = '#50a773',
}

interface Props {
  color: ButtonColor;
  isDisabled?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<Props> = ({ color, isDisabled, children, onClick }) => {
  return (
    <Styles.Button color={color} disabled={isDisabled} onClick={onClick}>
      {children}
    </Styles.Button>
  );
};

export default Button;
