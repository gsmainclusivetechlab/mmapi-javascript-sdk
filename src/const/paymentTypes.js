// common -  types
export const BALANCE_CHECK = 'viewAccountBalance';
export const SERVICE_AVAILABILITY = 'viewServiceAvailability';
export const RETRIEVE_MISSING_API = 'viewResponse';
export const REQUEST_STATE = 'viewRequestState';
export const TRANSACTION_REFERENCE = 'viewTransaction';
export const REVERSAL = 'createReversal';
export const TRANSACTIONS = 'viewAccountTransactions';
export const QUOTATION_REQ = 'createQuotation';
export const QUOTATION_VIEW = 'viewQuotation';
export const REFUND = 'createRefundTransaction';

// merchant - types
export const MERCHANT_INIT_PAYMENT = 'createMerchantTransaction';
export const MERCHANT_AUTH_CODE = 'createAuthorisationCode';
export const MERCHANT_VIEW_AUTH_CODE = 'viewAuthorisationCode';

// Disbursement -types
export const DISBURSEMENT_INDIVIDUAL = 'createDisbursementTransaction';
export const DISBURSEMENT_BULK = 'createBatchTransaction';
export const DISBURSEMENT_BULK_STATUS = 'viewBatchTransaction';
export const DISBURSEMENT_BULK_COMPLETED = 'viewBatchCompletions';
export const DISBURSEMENT_BULK_REJECTED = 'viewBatchRejections';
export const DISBURSEMENT_BULK_APPROVAL = 'updateBatchTransaction';

// International
export const INTERNATIONAL_TRANSFER = 'createInternationalTransaction';

// P2P
export const P2P_ACCOUNT_NAME = 'viewAccountName';
export const P2P_TRANSFER = 'createTransferTransaction';

// Recurring Payments
export const RECURRING_DEBIT_MANDATE = 'createAccountDebitMandate';
export const RECURRING_VIEW_DEBIT_MANDATE = 'viewAccountDebitMandate';

// Agent Service
export const AGENT_INIT_CASH_OUT = 'createWithdrawalTransaction';
export const AGENT_GENERATE_AUTH_CODE = 'createAuthorisationCode';
export const AGENT_VIEW_AUTH_CODE = 'viewAuthorisationCode';
export const AGENT_VIEW_ACCOUNT_NAME = 'viewAccountName';
export const AGENR_DEPOSIT = 'createDepositTransaction';
export const AGENT_CREATE_ACCOUNT= 'createAccount';
export const AGENT_VIEW_ACCOUNT = 'viewAccount';
export const AGENT_UPDATE_ACCOUNT = 'updateAccountIdentity';
