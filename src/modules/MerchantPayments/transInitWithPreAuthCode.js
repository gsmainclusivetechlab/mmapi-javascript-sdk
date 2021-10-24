import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { regxChecker } from '../../utils/validator';

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ['identifierType', 'identifier', 'data', 'callBackUrl'],
      onError
    ) &&
    checkRequiredProps(props.data, ['currency', 'amount'], onError)
  ) {
    let { identifierType, identifier, data, corelationId, callBackUrl } = props;
    let header = {
      'X-CorrelationID': corelationId,
    };
    if (callBackUrl) {
      header['X-Callback-URL'] = callBackUrl;
    }
    return requestMaker(
      `/accounts/${identifierType}/${identifier}/authorisationcodes`,
      header
    ).post(data);
  }
};
