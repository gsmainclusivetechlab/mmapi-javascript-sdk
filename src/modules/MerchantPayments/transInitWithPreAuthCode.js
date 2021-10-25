import requestMaker from "../../utils/requestMaker";
import checkRequiredProps from "../../utils/checkRequiredKeys";
import { regxChecker } from "../../utils/validator";

export default (props, onError) => {
  if (
    checkRequiredProps(
      props,
      ["identifierType", "identifier", "data", "callbackUrl"],
      onError
    ) &&
    checkRequiredProps(props.data, ["currency", "amount"], onError)
  ) {
    let { identifierType, identifier, data, correlationId, callbackUrl } =
      props;
    let header = {
      "X-CorrelationID": correlationId,
    };
    if (callbackUrl) {
      header["X-Callback-URL"] = callbackUrl;
    }
    return requestMaker(
      `/accounts/${identifierType}/${identifier}/authorisationcodes`,
      header
    ).post(data);
  }
};
