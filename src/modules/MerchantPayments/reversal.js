import requestMaker from "../../utils/requestMaker";
import checkRequiredProps from "../../utils/checkRequiredKeys";
import { regxChecker } from "../../utils/validator";

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ["correlationId", "callbackUrl", "transactionReference"],
      onError
    )
  ) {
    let {
      data = { type: "reversal" },
      correlationId,
      callbackUrl,
      transactionReference,
    } = props;
    return requestMaker(`/transactions/${transactionReference}/reversals`, {
      "X-CorrelationID": correlationId,
      "X-Callback-URL": callbackUrl,
    }).post(data);
  }
};
