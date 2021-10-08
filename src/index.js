import choosePayment from './utils/choosePayment';
import merchantPayments from './modules/MerchantPayments';
// sepereate call to get token
import generateToken from './apis/generateToken';
window.gsma = {
  merchantPay: choosePayment(merchantPayments),
  getToken: generateToken,
};
