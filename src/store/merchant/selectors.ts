import { type StoreState } from '../rootReducer';
import { type MerchantType } from './types';

const getMerchants = (state: StoreState) => {
  return state.merchant.merchants;
};

const getMerchantById = (merchantId: MerchantType['id']) => (state: StoreState) => {
  return state.merchant.merchants[merchantId];
};

const getSelectedMerchant = (state: StoreState) => {
  const { merchants, selectedMerchantId } = state.merchant;
  return merchants[selectedMerchantId];
};

export const MerchantSelector = {
  getMerchants,
  getMerchantById,
  getSelectedMerchant,
};
