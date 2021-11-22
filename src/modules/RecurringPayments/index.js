import {
    RECURRING_DEBIT_MANDATE,
    MERCHANT_INIT_PAYMENT,
    RECURRING_VIEW_DEBIT_MANDATE,
} from '../../const/paymentTypes';
import { common } from '../Common';
import debitMandate from './debitMandate';
import merchantTransactionInit from '../MerchantPayments/transactionInit';
import getDebitMandates from './getDebitMandates';
export default {
    [RECURRING_DEBIT_MANDATE]: debitMandate,
    [MERCHANT_INIT_PAYMENT]: merchantTransactionInit,
    [RECURRING_VIEW_DEBIT_MANDATE]: getDebitMandates,
    ...common,
};
