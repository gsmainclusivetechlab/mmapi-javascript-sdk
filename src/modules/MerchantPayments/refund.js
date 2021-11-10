import requestMaker from "../../utils/requestMaker";
import checkRequiredProps from "../../utils/checkRequiredKeys";
// import { transactionObjectValidtor } from "../../utils/transactionObjectValidator";
export default (props, onError) => {
  if (
    checkRequiredProps(props, ["data"], onError)
  ) {
    const { data, correlationId = "", callbackUrl } = props;
    let header = {
      'X-CorrelationID': correlationId,
    };
    if (callbackUrl) {
        header['X-Callback-URL'] = callbackUrl;
    }
    return requestMaker(`/transactions/type/adjustment`, header).post(data);
  }
};
