import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';
/**
 * Function to get all transaction for a specific account
 * @param  {} props must contain account identifier deatails and page offset & limit
 * @param  {} onError triggers some validation errors
 */
export default function getAuthCode(props, onError) {
    if (
        checkRequiredProps(props, ['accountId', 'authorisationCode'], onError)
    ) {
        const { accountId, authorisationCode } = props;
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/authorisationcodes/${authorisationCode}`
            ).get();
        });
    }
}
