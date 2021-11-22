import {
    MERCHANT_INIT_PAYMENT,
    MERCHANT_AUTH_CODE,
    MERCHANT_VIEW_AUTH_CODE,
    MERCHANT_REFUND,
} from '../../const/paymentTypes';
import { common } from '../Common';
import merchantTransactionInit from './transactionInit';
import generatePreAuthCode from './transInitWithPreAuthCode';
import getPreAuthCode from './getPreAuthCode';
import refund from './refund';

export default {
    [MERCHANT_INIT_PAYMENT]: merchantTransactionInit,
    [MERCHANT_AUTH_CODE]: generatePreAuthCode,
    [MERCHANT_VIEW_AUTH_CODE]:getPreAuthCode,
    [MERCHANT_REFUND]: refund,
    ...common,
};
