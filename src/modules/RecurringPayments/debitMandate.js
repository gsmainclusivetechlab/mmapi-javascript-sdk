import {
  checkRequiredProps,
  requestMaker,
  generateIdentifierUrl,
} from "../../utils";

export default function debitMandate(props, onError) {
  const { correlationId, callbackUrl, accountId, data } = props;
  if (checkRequiredProps(props, ["data", "accountId"], onError)) {
    let header = {
      "X-CorrelationID": correlationId,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }

    return generateIdentifierUrl(accountId, onError, (accountUrl) => {
      return requestMaker(
        `/accounts/${accountUrl}/debitmandates`, //url
        header //  headers
      ).post(
        data //data
      );
    });
  }
}
