import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { regxChecker } from '../../utils/validator';

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ['data', 'corelationId', 'callBackUrl'],
      onError
    ) &&
    checkRequiredProps(props.data, ['amount', 'currency'], onError)
  ) {
    let { data, corelationId, callBackUrl } = props;
    return requestMaker(`/transactions/type/adjustment`, {
      'X-CorrelationID': corelationId,
      'X-Callback-URL': callBackUrl,
    }).post(data);
  }
};
