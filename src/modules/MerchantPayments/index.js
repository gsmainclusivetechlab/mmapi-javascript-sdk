import {
    MERCHANT_INIT_PAYMENT,
    MERCHANT_AUTH_CODE,
    MERCHANT_VIEW_AUTH_CODE,
} from '../../const/paymentTypes';
import { common } from '../Common';
import transactionInit from './transactionInit';
import generatePreAuthCode from './transInitWithPreAuthCode';
import getPreAuthCode from './getPreAuthCode';

export default {
    [MERCHANT_INIT_PAYMENT]: transactionInit,
    [MERCHANT_AUTH_CODE]: generatePreAuthCode,
    [MERCHANT_VIEW_AUTH_CODE]: getPreAuthCode,
    ...common,
};
