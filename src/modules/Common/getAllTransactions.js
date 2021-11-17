import requestMaker from "../../utils/requestMaker";
import checkRequiredProps from "../../utils/checkRequiredKeys";
/**
 * Function to get all transaction for a specific account
 * @param  {} props must contain account identifier deatails and page offset & limit
 * @param  {} onError triggers some validation errors
 */
export default function getAllTransactions(props, onError) {
  if (checkRequiredProps(props, ["identifierType", "identifier"], onError)) {
    const { identifierType, identifier, offset = null, limit = null } = props;
    let params = null;
    if (offset && limit) {
      params = {
        offset,
        limit,
      };
    }
    return requestMaker(
      `/accounts/${identifierType}/${identifier}/transactions`
    ).get(params);
  }
}
