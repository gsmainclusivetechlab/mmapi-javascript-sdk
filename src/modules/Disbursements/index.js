import {
    DISBURSEMENT_INDIVIDUAL,
    DISBURSEMENT_BULK,
    DISBURSEMENT_BULK_STATUS,
    DISBURSEMENT_BULK_COMPLETED,
    DISBURSEMENT_BULK_REJECTED,
    DISBURSEMENT_BULK_APPROVAL,
} from '../../const/paymentTypes';
import { common } from '../Common';
import individualDisbursement from './individualDisbursement';
import bulkDisbursement from './bulkDisbursement';
import bulkDisbursementApproval from './bulkDisbursementApproval';
import getBulkDisbursementStatus from './getBulkDisbursementStatus';
import getBulkDisbursementCompleted from './getBulkDisbursementCompleted';
import getBulkDisbursementRejected from './getBulkDisbursementRejected';
export default {
    [DISBURSEMENT_INDIVIDUAL]: individualDisbursement,
    [DISBURSEMENT_BULK]: bulkDisbursement,
    [DISBURSEMENT_BULK_STATUS]: getBulkDisbursementStatus,
    [DISBURSEMENT_BULK_COMPLETED]: getBulkDisbursementCompleted,
    [DISBURSEMENT_BULK_REJECTED]: getBulkDisbursementRejected,
    [DISBURSEMENT_BULK_APPROVAL]: bulkDisbursementApproval,
    ...common,
};
