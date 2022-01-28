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
    if (checkRequiredProps(props, ['accountId', 'identityId'], onError)) {
        const {
            accountId,
            data = [
                {
                    op: 'replace',
                    path: '/kycVerificationStatus',
                    value: 'verified',
                },
            ],
            identityId,
            correlationId,
            callbackUrl,
        } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/identities/${identityId}`,
                header
            ).patch(data);
        });
    }
}
