import { requestMaker, checkRequiredProps } from '../../utils';

export default function bulkDisbursement(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (checkRequiredProps(props, ['data'], onError)) {
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/batchtransactions', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
