import {
    BALANCE_CHECK,
    SERVICE_AVAILABILITY,
    RETRIEVE_MISSING_API,
} from '../..//const/paymentTypes';
import requestMaker from '../../utils/requestMaker';
import balanceCheck from './balanceCheck';
import retriveMissingResponse from './retriveMissingResponse';
export const common = {
    [BALANCE_CHECK]: balanceCheck,
    [SERVICE_AVAILABILITY]: () => requestMaker('/heartbeat').get(),
    [RETRIEVE_MISSING_API]: retriveMissingResponse,
};
