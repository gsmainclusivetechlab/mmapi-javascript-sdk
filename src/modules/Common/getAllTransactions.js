import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
/**
 * Function to get all transaction for a specific account
 * @param  {} props must contain account identifier deatails and page offset & limit
 * @param  {} onError triggers some validation errors
 */
export default function getAllTransactions(props, onError) {
    if (checkRequiredProps(props, ['identifierType', 'identifier'], onError)) {
        let { identifierType, identifier, offset = null, limit = null } = props;
        let params = {};
        if (offset) params['offset'] = offset;
        if (limit) params['limit'] = limit;
        return requestMaker(
            `/accounts/${identifierType}/${identifier}/transactions`
        ).get(params);
    }
}
