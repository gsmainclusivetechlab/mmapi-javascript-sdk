import { checkRequiredProps, requestMaker } from "../../utils";
export default function p2pTransfer(props, onError) {
  const { correlationId, callbackUrl, data } = props;
  if (checkRequiredProps(props, ["data"], onError)) {
    let header = {
      "X-CorrelationID": correlationId,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }

    return requestMaker(
      "/transactions/type/transfer", //url
      header //  headers
    ).post(
      data //data
    );
  }
}
