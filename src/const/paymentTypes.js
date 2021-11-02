// merchant - types
export const MERCHANT_PAYEE_INIT = 'payeeInitiated';
export const MERCHANT_PAYER_INIT = 'payerInitiated';
export const MERCHANT_AUTH_CODE = 'generatePreAuthCode';
export const MERCHANT_PAYMENT_WITH_PREAUTH_CODE = 'paymentWithPreAuthCode';
export const MERCHANT_REFUND = 'refund';

// common -  types
export const BALANCE_CHECK = 'balanceCheck';
export const SERVICE_AVAILABILITY = 'serviceAvailability';
export const RETRIEVE_MISSING_API = 'retrieveMissingRequest';
//--exp--
export const REQUEST_STATE = 'requestState';
export const TRANSACTION_REFERENCE = 'transactionReference';
export const REVERSAL = 'reversal';
export const TRANSACTIONS = 'payments';

// Disbursement -types
export const DISBURSEMENT_INDIVIDUAL = 'individualDisbursement';
export const DISBURSEMENT_BULK = 'bulkDisbursement';
export const DISBURSEMENT_BULK_STATUS = 'bulkDisbursementStatus';
export const DISBURSEMENT_BULK_COMPLETED = 'bulkDisbursementCompleted';
export const DISBURSEMENT_BULK_REJECTED = 'bulkDisbursementRejected';
export const DISBURSEMENT_BULK_APPROVAL = 'bulkDisbursementApproval';
