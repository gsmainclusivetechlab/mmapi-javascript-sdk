import { checkRequiredProps, requestMaker } from '../../utils';
export default function transactionInit(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/transactions/type/merchantpay', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
