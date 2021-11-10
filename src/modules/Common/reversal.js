import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
/**
 * @param  {} props
 * @param  {} onError
 */
export default function reversal(props, onError) {
    if (
        checkRequiredProps(
            props,
            ['correlationId', 'transactionReference'],
            onError
        )
    ) {
        const {
            data = { type: 'reversal' },
            correlationId,
            callbackUrl,
            transactionReference,
        } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        return requestMaker(
            `/transactions/${transactionReference}/reversals`,
            header
        ).post(data);
    }
}
