import {
    BILL_VIEW_BILLS,
    BILL_TRANSACTION,
    BILL_PAYMENT,
    BILL_VIEW_BILL_PAYMENTS,
} from '../../const/paymentTypes';
import { common } from '../Common';
import getBills from './getBills';
import billTransactions from './billTransactions';
import billPayment from './billPayment';
import getBillPayments from './getBillPayments';
export default {
    [BILL_VIEW_BILLS]: getBills,
    [BILL_TRANSACTION]: billTransactions,
    [BILL_PAYMENT]: billPayment,
    [BILL_VIEW_BILL_PAYMENTS]: getBillPayments,
    ...common,
};
