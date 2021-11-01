import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { transactionObjectValidtor } from '../../utils/transactionObjectValidator';

export default function bulkDisbursementApproval(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (
        checkRequiredProps(props, ['data'], onError) &&
        checkRequiredProps(props, ['batchId'], onError)
    ) {
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        const { batchId } = props;
        return requestMaker(
            `/batchtransactions/${batchId}`, //url
            header //  headers
        ).patch(
            data //data
        );
    }
}
