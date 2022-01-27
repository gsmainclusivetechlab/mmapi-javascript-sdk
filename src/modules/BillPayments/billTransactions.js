import { checkRequiredProps, requestMaker } from '../../utils';
/**
 * @param  {} props conatin parmas to make the request
 * @param  {} onError callback to throw error
 */
export default function billTransactions(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/transactions/type/billpay', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
