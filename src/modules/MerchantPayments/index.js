import {
    MERCHANT_PAYEE_INIT,
    MERCHANT_PAYER_INIT,
    MERCHANT_REQUEST_STATE,
    MERCHANT_TRANSACTION_REFERENCE,
    MERCHANT_AUTH_CODE,
    MERCHANT_PAYMENT_WITH_PREAUTH_CODE,
    MERCHANT_REFUND,
    MERCHANT_REVERSAL,
    MERCHANT_PAYMENTS,
} from '../../const/paymentTypes';
import { common } from '../Common';
import merchantTransactionInit from './transactionInit';
import generatePreAuthCode from './transInitWithPreAuthCode';
import paymentWithAuthCode from './paymentWithAuthCode';
import refund from './refund';

export default {
    [MERCHANT_PAYEE_INIT]: merchantTransactionInit,
    [MERCHANT_PAYER_INIT]: merchantTransactionInit,
    [MERCHANT_AUTH_CODE]: generatePreAuthCode,
    [MERCHANT_PAYMENT_WITH_PREAUTH_CODE]: paymentWithAuthCode,
    [MERCHANT_REFUND]: refund,
    ...common,
};
