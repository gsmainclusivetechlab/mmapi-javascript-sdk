import choosePayment from "../utils/choosePayment";
import merchantPayments from "./MerchantPayments";
import disbursement from "./Disbursements";
import internationalTransfers from "./InternationalTransfers";
import p2p from "./P2P";
import RecurringPayments from "./RecurringPayments";
import accountLinking from "./AccountLinking";

export const moduleWrapperWithAuth = (authHeaders) => {
  window.gsma.auth = {
    MerchantPayment: choosePayment(merchantPayments, authHeaders),
    Disbursement: choosePayment(disbursement, authHeaders),
    InternationalTransfer: choosePayment(internationalTransfers, authHeaders),
    P2PTransfer: choosePayment(p2p, authHeaders),
    RecurringPayment: choosePayment(RecurringPayments, authHeaders),
    AccountLinking: choosePayment(accountLinking, authHeaders),
  };
};

export const moduleWrapperWithoutAuth = {
  MerchantPayment: choosePayment(merchantPayments),
  Disbursement: choosePayment(disbursement),
  InternationalTransfer: choosePayment(internationalTransfers),
  P2PTransfer: choosePayment(p2p),
  RecurringPayment: choosePayment(RecurringPayments),
  AccountLinking: choosePayment(accountLinking, authHeaders),
};
