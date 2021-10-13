import {
  MERCHANT_PAYEE_INIT,
  MERCHANT_REQUEST_STATE,
  MERCHANT_TRANSACTION_REFERENCE,
} from '../../utils/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import { common } from '../Common';
const merchantPayments = {
  [MERCHANT_PAYEE_INIT]: (
    { corelationId, callBackUrl, data, fileUpload = false },
    onError
  ) => {
    if (corelationId && callBackUrl) {
      return requestMaker(
        '/transactions/type/merchantpay', //url
        {
          'X-CorrelationID': corelationId,
          'X-Callback-URL': callBackUrl,
        } //  headers
      ).post(
        data, //data
        fileUpload // check for file upload
      );
    } else {
      onError('000', 'CorilationId or Callback url missing !');
    }
  },
  [MERCHANT_REQUEST_STATE]: ({ serverCorrelationId = null }, onError) => {
    if (serverCorrelationId) {
      return requestMaker(`/requeststates/${serverCorrelationId}`).get();
    } else {
      onError('000', 'could not get serverCorrelationId');
    }
  },
  [MERCHANT_TRANSACTION_REFERENCE]: ({ transactionReference }) => {
    if (transactionReference) {
      return requestMaker(`/transactions/${transactionReference}`).get();
    } else {
      onError('000', 'transactionReference is required');
    }
  },
  ...common,
};

export default merchantPayments;
