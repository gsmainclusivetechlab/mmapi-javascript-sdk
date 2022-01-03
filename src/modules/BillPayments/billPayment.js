import { checkRequiredProps, requestMaker,generateIdentifierUrl } from '../../utils';
/**
 * @param  {} props conatin parmas to make the request
 * @param  {} onError callback to throw error 
 */
export default function billPayment(props, onError) {
    if (checkRequiredProps(props, ['data','billReference','accountId'], onError)) {
        const { correlationId, callbackUrl, data,billReference,accountId } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/bills/${billReference}/payments`, //url
                header //  headers
            ).post(
                data //data
            );
        });
    }
}
