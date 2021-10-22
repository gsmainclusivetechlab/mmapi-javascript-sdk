import requestMaker from '../../utils/requestMaker';
import { v4 as uuidv4 } from 'uuid';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { regxChecker } from '../../utils/validator';
const merchantTransactionInit = (params, onError) => {
  const { corelationId = uuidv4(), callBackUrl, data } = params;
  if (
    transactionObjectValidtor(data, ['amount'], onError) &&
    checkRequiredProps(params, ['data'], onError)
  ) {
    let header = {
      'X-CorrelationID': corelationId,
    };
    if (callBackUrl) {
      header['X-Callback-URL'] = callBackUrl;
    }

    return requestMaker(
      '/transactions/type/merchantpay', //url
      header //  headers
    ).post(
      data //data
    );
  }
};

export default merchantTransactionInit;

function transactionObjectValidtor(transactionObject, testKeys = [], onError) {
  let errors = [];
  if (testKeys.length > 0) {
    testKeys.forEach((testKey) => {
      switch (testKey) {
        case 'amount': {
          if (
            !regxChecker(
              /^([0]|([1-9][0-9]{0,17}))([.][0-9]{0,3}[0-9])?$/m,
              transactionObject[testKey]
            )
          ) {
            errors.push({
              key: 'amount',
              value:
                'must match "^([0]|([1-9][0-9]{0,17}))([.][0-9]{0,3}[0-9])?$"',
            });
          }
        }
        default:
          null;
      }
    });
  }
  console.log('testing transaction object', errors);
  if (errors.length > 0) {
    onError('status on validation', {
      errorCategory: 'validation',
      errorCode: 'formatError',
      errorDescription: 'Invalid JSON Field',
      errorParameters: errors,
    });
  }
  return errors.length === 0;
}
