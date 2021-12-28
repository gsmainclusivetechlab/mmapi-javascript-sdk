import {
  checkRequiredProps,
  requestMaker,
  generateIdentifierUrl,
} from "../../utils";

export default function setupAccountLink(props, onError) {
  if (checkRequiredProps(props, ["data", "accountId"], onError)) {
    const { correlationId, callbackUrl, data, accountId } = props;

    let header = {
      "X-CorrelationID": correlationId,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return generateIdentifierUrl(accountId, onError, (accountUrl) => {
      return requestMaker(
        `/accounts/${accountUrl}/links`, //url
        header //  headers
      ).post(
        data //data
      );
    });
  }
}