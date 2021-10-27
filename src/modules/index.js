import choosePayment from '../utils/choosePayment';
import merchantPayments from './MerchantPayments';

export const moduleWrapperWithAuth = (authHeaders) => {
    console.log('generated instance with auth', authHeaders);
    window.gsma.auth = {
        merchantPay: choosePayment(merchantPayments, authHeaders),
    };
};

export const moduleWrapperWithoutAuth = {
    merchantPay: choosePayment(merchantPayments),
};
