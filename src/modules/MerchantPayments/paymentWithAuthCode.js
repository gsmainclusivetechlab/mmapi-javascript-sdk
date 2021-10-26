import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { transactionObjectValidtor } from '../../utils/transactionObjectValidator';
export default function paymentWithAuthCode(props, onError) {
    const { correlationId, callbackUrl, data } = props;
    if (
        checkRequiredProps(props, ['data'], onError) &&
        checkRequiredProps(
            data,
            ['amount', 'currency', 'oneTimeCode'],
            onError
        ) &&
        transactionObjectValidtor(data, ['amount'], onError)
    ) {
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
