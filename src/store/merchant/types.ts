export interface MerchantType {
  id: string;
  name: string;
}

export interface MerchantState {
  merchants: Record<string, MerchantType>;
  selectedMerchantId: MerchantType['id'];
}

export enum ActionTypes {
  SET_MERCHANTS = '@merchant/SET_MERCHANTS',
  SET_MERCHANT = '@merchant/SET_MERCHANT',
}

export interface SetMerchants {
  type: typeof ActionTypes.SET_MERCHANTS;
  payload: { merchants: MerchantState['merchants'] };
}

export interface SetMerchant {
  type: typeof ActionTypes.SET_MERCHANT;
  payload: { merchant: MerchantType };
}

export type MerchantActionsType = SetMerchants | SetMerchant;
