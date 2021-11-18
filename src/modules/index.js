import choosePayment from '../utils/choosePayment';
import merchantPayments from './MerchantPayments';
import disbursement from './Disbursements';

export const moduleWrapperWithAuth = (authHeaders) => {
    window.gsma.auth = {
        merchantPay: choosePayment(merchantPayments, authHeaders),
        disbursement: choosePayment(disbursement, authHeaders),
    };
};

export const moduleWrapperWithoutAuth = {
    merchantPay: choosePayment(merchantPayments),
    disbursement: choosePayment(disbursement),
};
