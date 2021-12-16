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
    let { accountId, filter = [] } = props;
    let params = {};
    filter.length > 0 &&
      filter.map((filers) => {
        if (filers.key) params[filers.key] = filers.value;
      });
    return generateIdentifierUrl(accountId, onError, (accountUrl) => {
      return requestMaker(`/accounts/${accountUrl}/transactions`).get(params);
    });
  }
}
