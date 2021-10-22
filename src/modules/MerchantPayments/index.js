import {
  MERCHANT_PAYEE_INIT,
  MERCHANT_REQUEST_STATE,
  MERCHANT_TRANSACTION_REFERENCE,
  MERCHANT_AUTH_CODE,
  MERCHANT_REFUND,
  MERCHANT_REVERSAL,
} from "../../utils/paymentTypes";
import requestMaker from "../../utils/requestMaker";
import { common } from "../Common";

const merchantTransactionInit = (
  { corelationId, callBackUrl, data },
  onError
) => {
  if (corelationId && callBackUrl) {
    return requestMaker(
      "/transactions/type/merchantpay", //url
      {
        "X-CorrelationID": corelationId,
        "X-Callback-URL": callBackUrl,
      } //  headers
    ).post(
      data //data
    );
  } else {
    onError("000", "CorilationId or Callback url missing !");
  }
};

export default {
  [MERCHANT_PAYEE_INIT]: merchantTransactionInit,
  // [MERCHANT_PAYER_INIT]: merchantTransactionInit,
  [MERCHANT_REQUEST_STATE]: ({ serverCorrelationId = null }, onError) => {
    if (serverCorrelationId) {
      return requestMaker(`/requeststates/${serverCorrelationId}`).get();
    } else {
      onError("000", "could not get serverCorrelationId");
    }
  },
  [MERCHANT_TRANSACTION_REFERENCE]: ({ transactionReference }) => {
    if (transactionReference) {
      return requestMaker(`/transactions/${transactionReference}`).get();
    } else {
      onError("000", "transactionReference is required");
    }
  },
  [MERCHANT_AUTH_CODE]: (params, onError) => {
    if (
      checkRequiredProps(
        ["identifierType", "identifier", "data", "corelationId", "callBackUrl"],
        params,
        onError
      )
    ) {
      let { identifierType, identifier, data, corelationId, callBackUrl } =
        params;
      return requestMaker(
        `/accounts/${identifierType}/${identifier}/authorisationcodes`,
        {
          "X-CorrelationID": corelationId,
          "X-Callback-URL": callBackUrl,
        }
      ).post(data);
    }
  },
  [MERCHANT_REFUND]: (params, onError) => {
    if (
      checkRequiredProps(
        ["data", "corelationId", "callBackUrl"],
        params,
        onError
      )
    ) {
      let { data, corelationId, callBackUrl } = params;
      return requestMaker(`/transactions/type/adjustment`, {
        "X-CorrelationID": corelationId,
        "X-Callback-URL": callBackUrl,
      }).post(data);
    }
  },
  [MERCHANT_REVERSAL]: (params, onError) => {
    if (
      checkRequiredProps(
        ["corelationId", "callBackUrl", "transactionReference"],
        params,
        onError
      )
    ) {
      let {
        data = { type: "reversal" },
        corelationId,
        callBackUrl,
        transactionReference,
      } = params;
      return requestMaker(`/transactions/${transactionReference}/reversals`, {
        "X-CorrelationID": corelationId,
        "X-Callback-URL": callBackUrl,
      }).post(data);
    }
  },
  ...common,
};

const checkRequiredProps = (keys = [], allObjs = null, onError) => {
  if (keys.length > 0) {
    let hasErrors = [];
    keys.forEach((k) => {
      if (allObjs[k]) {
      } else {
        hasErrors.push(`${k} is required`);
      }
    });
    if (hasErrors.length > 0) {
      onError("00", hasErrors);
      return false;
    } else {
      return true;
    }
  } else {
    return true;
  }
};
