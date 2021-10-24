import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { regxChecker } from '../../utils/validator';

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ['corelationId', 'callBackUrl', 'transactionReference'],
      onError
    )
  ) {
    let {
      data = { type: 'reversal' },
      corelationId,
      callBackUrl,
      transactionReference,
    } = props;
    return requestMaker(`/transactions/${transactionReference}/reversals`, {
      'X-CorrelationID': corelationId,
      'X-Callback-URL': callBackUrl,
    }).post(data);
  }
};
