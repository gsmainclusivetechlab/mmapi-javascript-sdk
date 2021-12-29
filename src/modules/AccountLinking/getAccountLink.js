import {
  checkRequiredProps,
  requestMaker,
  generateIdentifierUrl,
} from "../../utils";
/**
 * Function to get all transaction for a specific account
 * @param  {} props
 * @param  {} onError triggers some validation errors
 */
export default function getAccountLink(props, onError) {
  if (checkRequiredProps(props, ["accountId", "linkReference"], onError)) {
    const { accountId, linkReference } = props;
    return generateIdentifierUrl(accountId, onError, (accountUrl) => {
      return requestMaker(
        `/accounts/${accountUrl}/links/${linkReference}`
      ).get();
    });
  }
}
