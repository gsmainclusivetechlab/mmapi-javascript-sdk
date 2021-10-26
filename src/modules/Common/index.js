import {
    BALANCE_CHECK,
    SERVICE_AVAILABILITY,
    RETRIEVE_MISSING_API,
    RETRIEVE_MISSING_API_RESPONSE,
} from '../..//const/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import balanceCheck from './balanceCheck';
import retriveMissingResponse from './retriveMissingResponse';
export const common = {
    [BALANCE_CHECK]: balanceCheck,
    [SERVICE_AVAILABILITY]: () => requestMaker('/heartbeat').get(),
    [RETRIEVE_MISSING_API]: retriveMissingResponse,
    [RETRIEVE_MISSING_API_RESPONSE]: (props, onError) => {
        if (checkRequiredProps(props, ['link'], onError)) {
            const { link } = props;
            return requestMaker(link).get();
        }
    },
};
