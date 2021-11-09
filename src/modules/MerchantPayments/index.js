import {
    MERCHANT_INIT_PAYMENT,
    MERCHANT_AUTH_CODE,
    MERCHANT_PAYMENT_WITH_PREAUTH_CODE,
    MERCHANT_REFUND,
} from '../../const/paymentTypes';
import { common } from '../Common';
import merchantTransactionInit from './transactionInit';
import generatePreAuthCode from './transInitWithPreAuthCode';
import paymentWithAuthCode from './paymentWithAuthCode';
import refund from './refund';

export default {
    [MERCHANT_INIT_PAYMENT]: merchantTransactionInit,
    [MERCHANT_AUTH_CODE]: generatePreAuthCode,
    [MERCHANT_PAYMENT_WITH_PREAUTH_CODE]: paymentWithAuthCode,
    [MERCHANT_REFUND]: refund,
    ...common,
};
