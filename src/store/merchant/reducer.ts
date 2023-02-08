import produce from 'immer';
import { indexBy, prop } from 'ramda';
import { v4 as uuidv4 } from 'uuid';

import {
  ActionTypes,
  type MerchantActionsType,
  type MerchantState,
  type MerchantType,
} from './types';

const merchants: MerchantType[] = [
  { id: uuidv4(), name: 'Loja do Rodolfo' },
  { id: uuidv4(), name: 'Loja da Lis' },
  { id: uuidv4(), name: 'Loja da Lau' },
  { id: uuidv4(), name: 'Loja da Rafa' },
];

const initialState: MerchantState = {
  merchants: indexBy(prop('id'), merchants),
  selectedMerchantId: merchants[0].id,
};

export default (state = initialState, action: MerchantActionsType) => {
  return produce(state, draft => {
    switch (action.type) {
      case ActionTypes.SET_MERCHANTS: {
        draft.merchants = action.payload.merchants;
        break;
      }
      case ActionTypes.SET_MERCHANT: {
        const { merchant } = action.payload;
        draft.merchants[merchant.id] = merchant;
        break;
      }
      default:
    }
  });
};
