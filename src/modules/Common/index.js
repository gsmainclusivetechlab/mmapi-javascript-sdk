import {
    BALANCE_CHECK,
    SERVICE_AVAILABILITY,
    RETRIEVE_MISSING_API,
    REQUEST_STATE,
    TRANSACTION_REFERENCE,
    REVERSAL,
    TRANSACTIONS,
} from '../../const/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import balanceCheck from './balanceCheck';
import retriveMissingResponse from './retriveMissingResponse';
import getRequestState from './getRequestState';
import getTransactionReference from './getTransactionReference';
import reversal from './reversal';
import getAllTransactions from './getAllTransactions';
export const common = {
    [BALANCE_CHECK]: balanceCheck,
    [SERVICE_AVAILABILITY]: () => requestMaker('/heartbeat').get(),
    [RETRIEVE_MISSING_API]: retriveMissingResponse,
    [REQUEST_STATE]: getRequestState,
    [TRANSACTION_REFERENCE]: getTransactionReference,
    [REVERSAL]: reversal,
    [TRANSACTIONS]: getAllTransactions,
};
