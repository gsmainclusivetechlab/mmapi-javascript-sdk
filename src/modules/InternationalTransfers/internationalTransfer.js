import { requestMaker, checkRequiredProps } from '../../utils';
export default function internationalTransfer(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (checkRequiredProps(props, ['data'], onError)) {
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/transactions/type/inttransfer', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
