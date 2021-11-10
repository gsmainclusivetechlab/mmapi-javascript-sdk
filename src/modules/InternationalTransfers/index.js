import {
    INTERNATIONAL_TRANSFER
} from '../../const/paymentTypes';
import { common } from '../Common';
import internationalTransfer from './internationalTransfer'
export default {
    [INTERNATIONAL_TRANSFER]: internationalTransfer,
    ...common,
};