import {
    DISBURSEMENT_INDIVIDUAL,
    DISBURSEMENT_BULK,
} from '../../const/paymentTypes';
import { common } from '../Common';
import individualDisbursement from './individualDisbursement';
import bulkDisbursement from './bulkDisbursement';
export default {
    [DISBURSEMENT_INDIVIDUAL]: individualDisbursement,
    [DISBURSEMENT_BULK]: bulkDisbursement,
    ...common,
};
