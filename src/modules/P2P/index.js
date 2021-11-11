import { P2P_ACCOUNT_NAME, P2P_TRANSFER } from '../../const/paymentTypes';
import { common } from '../Common';
import getRecepientName from './getRecepientName';
import p2pTransfer from './p2pTransfer';
export default {
    [P2P_ACCOUNT_NAME]: getRecepientName,
    [P2P_TRANSFER]: p2pTransfer,
    ...common,
};
