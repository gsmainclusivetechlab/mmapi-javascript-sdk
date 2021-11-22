import { checkRequiredProps, requestMaker } from '../../utils';

export default function requestQuotation(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (checkRequiredProps(props, ['data'], onError)) {
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/quotations', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
