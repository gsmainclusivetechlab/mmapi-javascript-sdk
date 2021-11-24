import {
  checkRequiredProps,
  requestMaker,
  generateIdentifierUrl,
} from "../../utils";
/**
 * Function to get all transaction for a specific account
 * @param  {} props must contain account identifier deatails and page offset & limit
 * @param  {} onError triggers some validation errors
 */
export default function getAllTransactions(props, onError) {
  if (checkRequiredProps(props, ["accountId"], onError)) {
    let { accountId, offset = null, limit = null } = props;
    let params = {};
    if (offset) params["offset"] = offset;
    if (limit) params["limit"] = limit;
    return generateIdentifierUrl(accountId, onError, (accountUrl) => {
      return requestMaker(`/accounts/${accountUrl}/transactions`).get(params);
    });
  }
  return requestMaker(
    `/accounts/${identifierType}/${identifier}/transactions`
  ).get(params);
}
