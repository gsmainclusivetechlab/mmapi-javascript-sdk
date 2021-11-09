import {
    INTERNATIONAL_REQ_QUOTATION,
    INTERNATIONAL_TRANSFER
} from '../../const/paymentTypes';
import { common } from '../Common';
import requestQuotation from './requestQuotation'
import internationalTransfer from './internationalTransfer'
export default {
    [INTERNATIONAL_REQ_QUOTATION]: requestQuotation,
    [INTERNATIONAL_TRANSFER]: internationalTransfer,
    ...common,
};