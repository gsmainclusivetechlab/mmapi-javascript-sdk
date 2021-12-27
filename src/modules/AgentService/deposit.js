import { checkRequiredProps, requestMaker } from '../../utils';

export default function deposit(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/transactions/type/deposit', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
