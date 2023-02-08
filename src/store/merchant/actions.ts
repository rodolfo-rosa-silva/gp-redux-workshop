import { ActionTypes, type SetMerchant, type SetMerchants } from './types';

function setMerchants(payload: SetMerchants['payload']) {
  return {
    type: ActionTypes.SET_MERCHANTS,
    payload,
  };
}

function setMerchant(payload: SetMerchant['payload']) {
  return {
    type: ActionTypes.SET_MERCHANT,
    payload,
  };
}

export const MerchantActions = {
  setMerchants,
  setMerchant,
};
