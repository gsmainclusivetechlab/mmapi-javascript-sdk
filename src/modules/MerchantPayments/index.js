import {
  MERCHANT_PAYEE_INIT,
  MERCHANT_PAYER_INIT,
  MERCHANT_REQUEST_STATE,
  MERCHANT_TRANSACTION_REFERENCE,
  MERCHANT_AUTH_CODE,
  MERCHANT_REFUND,
  MERCHANT_REVERSAL,
  MERCHANT_PAYMENTS,
} from '../../utils/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import { common } from '../Common';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import merchantTransactionInit from './transactionInit';
import transInitWithPreAuthCode from './transInitWithPreAuthCode';
import reversal from './reversal';
import refund from './refund';
export default {
  [MERCHANT_PAYEE_INIT]: merchantTransactionInit,
  [MERCHANT_PAYER_INIT]: merchantTransactionInit,
  [MERCHANT_REQUEST_STATE]: (props, onError) => {
    if (checkRequiredProps(props, ['serverCorrelationId'], onError)) {
      let { serverCorrelationId } = props;
      return requestMaker(`/requeststates/${serverCorrelationId}`).get();
    }
  },
  [MERCHANT_TRANSACTION_REFERENCE]: (props, onError) => {
    if (checkRequiredProps(props, ['transactionReference'], onError)) {
      let { transactionReference } = props;
      return requestMaker(`/transactions/${transactionReference}`).get();
    }
  },
  [MERCHANT_AUTH_CODE]: transInitWithPreAuthCode,
  [MERCHANT_REFUND]: refund,
  [MERCHANT_REVERSAL]: reversal,
  [MERCHANT_PAYMENTS]: (props, onError) => {
    if (
      checkRequiredProps(
        props,
        ['identifierType', 'identifier', 'offset', 'limit'],
        onError
      )
    ) {
      let { identifierType, identifier, offset, limit } = props;
      return requestMaker(
        `/accounts/${identifierType}/${identifier}/transactions`
      ).get({
        offset,
        limit,
      });
    }
  },
  ...common,
};
