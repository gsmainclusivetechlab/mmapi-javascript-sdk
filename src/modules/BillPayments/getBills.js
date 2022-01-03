import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';
/**
 * Function to get all bills for a specific account
 * @param  {} props params to handle the request
 * @param  {} onError triggers some validation errors
 */
export default function getBills(props, onError) {
    if (checkRequiredProps(props, ['accountId'], onError)) {
        let { accountId, filter=[] } = props;
        let params = {};
        filter.length>0 && filter.map(filers=>{
            if(filers.key)
            params[filers.key]=filers.value
        })
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/bills`
            ).get(params);
        });
    }
}
