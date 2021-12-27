import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';
/**
 * Function to get recepient name
 * @param  {} props must contain identifierType and identifier
 * @param  {} onError triggered when there is some error in validation
 */
export default function updateAccount(props, onError) {
    if (checkRequiredProps(props, ['accountId','identityId','data'], onError)) {
        const { accountId } = props;
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(`/accounts/${accountUrl}/identities/${identityId}`).patch(data);
        });
    }
}