import choosePayment from '../utils/choosePayment';
import merchantPayments from './MerchantPayments';
import disbursement from './Disbursements';
import internationalTransfers from './InternationalTransfers';
import p2p from './P2P';
import RecurringPayments from './RecurringPayments';
export const moduleWrapperWithAuth = (authHeaders) => {
    window.gsma.auth = {
        merchantPay: choosePayment(merchantPayments, authHeaders),
        disbursement: choosePayment(disbursement, authHeaders),
        international: choosePayment(internationalTransfers, authHeaders),
        p2p: choosePayment(p2p, authHeaders),
        recurring: choosePayment(RecurringPayments, authHeaders),
    };
};

export const moduleWrapperWithoutAuth = {
    merchantPay: choosePayment(merchantPayments),
    disbursement: choosePayment(disbursement),
    international: choosePayment(internationalTransfers),
    p2p: choosePayment(p2p),
    recurring: choosePayment(RecurringPayments),
};
