import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';
/**
 * Function to get all transaction for a specific account
 * @param  {} props
 * @param  {} onError triggers some validation errors
 */
export default function getDebitMandates(props, onError) {
    if (checkRequiredProps(props, ['accountId', 'mandateReference'], onError)) {
        const { accountId, mandateReference } = props;
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/debitmandates/${mandateReference}`
            ).get();
        });
    }
}
