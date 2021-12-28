import {
    AGENT_INIT_CASH_OUT,
    AGENT_GENERATE_AUTH_CODE,
    AGENT_VIEW_AUTH_CODE,
    AGENT_VIEW_ACCOUNT_NAME,
    AGENR_DEPOSIT,
    AGENT_CREATE_ACCOUNT,
    AGENT_VIEW_ACCOUNT,
    AGENT_UPDATE_ACCOUNT
} from '../../const/paymentTypes';
import { common } from '../Common';
import initCashOut from './initCashOut';
import generateAuthCode from './generateAuthCode';
import getAuthCode from './getAuthCode';
import getAccountName from './getAccountName';
import deposit from './deposit';
import createAccount from './createAccount';
import getAccount from './getAccount';
import updateAccount from './updateAccount';
export default {
    [AGENT_INIT_CASH_OUT]: initCashOut,
    [AGENT_GENERATE_AUTH_CODE]: generateAuthCode,
    [AGENT_VIEW_AUTH_CODE]: getAuthCode,
    [AGENT_VIEW_ACCOUNT_NAME]: getAccountName,
    [AGENR_DEPOSIT]: deposit,
    [AGENT_CREATE_ACCOUNT]:createAccount,
    [AGENT_VIEW_ACCOUNT]: getAccount,
    [AGENT_UPDATE_ACCOUNT]: updateAccount,
    ...common,
};
