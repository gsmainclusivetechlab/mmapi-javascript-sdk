import {
  BALANCE_CHECK,
  SERVICE_AVAILABILITY,
  RETRIEVE_MISSING_API,
  RETRIEVE_MISSING_API_RESPONSE,
} from '../../utils/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';

export const common = {
  [BALANCE_CHECK]: () => requestMaker('/accounts/accountid/1/balance').get(),
  [SERVICE_AVAILABILITY]: () => requestMaker('/heartbeat').get(),
  [RETRIEVE_MISSING_API]: (props, onError) => {
    if (checkRequiredProps(props, ['clientCorrelationId'], onError)) {
      const { clientCorrelationId } = props;
      return requestMaker(`/responses/${clientCorrelationId}`).get();
    }
  },
  [RETRIEVE_MISSING_API_RESPONSE]: (props, onError) => {
    if (checkRequiredProps(props, ['link'], onError)) {
      const { link } = props;
      return requestMaker(link).get();
    }
  },
};
