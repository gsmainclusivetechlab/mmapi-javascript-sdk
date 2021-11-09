import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
// import { transactionObjectValidtor } from '../../utils/transactionObjectValidator';

export default function individualDisbursement(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (
        checkRequiredProps(props, ['data'], onError) &&
        checkRequiredProps(data, ['amount', 'currency'], onError) 
    ) {
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/transactions/type/disbursement', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
