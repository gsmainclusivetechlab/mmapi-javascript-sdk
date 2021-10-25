import requestMaker from "../../utils/requestMaker";
import checkRequiredProps from "../../utils/checkRequiredKeys";
import { regxChecker } from "../../utils/validator";

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ["data", "correlationId", "callbackUrl"],
      onError
    ) &&
    checkRequiredProps(props.data, ["amount", "currency"], onError)
  ) {
    let { data, correlationId, callbackUrl } = props;
    return requestMaker(`/transactions/type/adjustment`, {
      "X-CorrelationID": correlationId,
      "X-Callback-URL": callbackUrl,
    }).post(data);
  }
};
