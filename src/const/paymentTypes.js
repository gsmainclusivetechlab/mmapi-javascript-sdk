// common -  types
export const BALANCE_CHECK = 'viewAccountBalance';
export const SERVICE_AVAILABILITY = 'viewServiceAvailability';
export const RETRIEVE_MISSING_API = 'viewResponse';
export const REQUEST_STATE = 'viewRequestState';
export const TRANSACTION_REFERENCE = 'viewTransaction';
export const REVERSAL = 'createReversal';
export const TRANSACTIONS = 'viewAccountTransaction';
export const QUOTATION_REQ = 'createQuotation'
export const QUOTATION_VIEW = 'viewQuotation'

// merchant - types
export const MERCHANT_INIT_PAYMENT = 'createMerchantTransaction';
export const MERCHANT_AUTH_CODE = 'createAuthorisationCode';
// export const MERCHANT_PAYMENT_WITH_PREAUTH_CODE = 'paymentWithPreAuthCode'; // can use MERCHANT_INIT_PAYMENT itself
export const MERCHANT_REFUND = 'createRefundTransaction';

// Disbursement -types
export const DISBURSEMENT_INDIVIDUAL = 'createDisbursementTransaction';
export const DISBURSEMENT_BULK = 'createBatchTransaction';
export const DISBURSEMENT_BULK_STATUS = 'viewBatchTransaction';
export const DISBURSEMENT_BULK_COMPLETED = 'viewBatchCompletions';
export const DISBURSEMENT_BULK_REJECTED = 'viewBatchRejections';
export const DISBURSEMENT_BULK_APPROVAL = 'updateBatchTransaction';

// International 
export const INTERNATIONAL_TRANSFER = 'createInternationalTransaction'