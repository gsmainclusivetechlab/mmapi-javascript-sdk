import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';
/**
 * Function to get all bill payments for a specific account
 * @param  {} props params to handle the request
 * @param  {} onError triggers some validation errors
 */
export default function getBillPayments(props, onError) {
    if (checkRequiredProps(props, ['accountId', 'billReference'], onError)) {
        let { accountId, filter = [], billReference } = props;
        let params = {};
        filter.length > 0 &&
            filter.map((filers) => {
                if (filers.key) {
                    params[filers.key] = filers.value;
                }
            });
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/bills/${billReference}/payments`
            ).get(params);
        });
    }
}
