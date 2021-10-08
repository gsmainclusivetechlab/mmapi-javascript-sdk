import { BALANCE_CHECK, GET_TOKEN } from '../../utils/paymentTypes';
import requestMaker from '../../utils/requestMaker';

export const common = {
  [BALANCE_CHECK]: () => requestMaker('/accounts/accountid/1/balance').get(),
};
