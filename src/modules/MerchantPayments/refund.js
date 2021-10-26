import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
import { transactionObjectValidtor } from '../../utils/transactionObjectValidator';
export default (props, onError) => {
    if (
        checkRequiredProps(props, ['data', 'callbackUrl'], onError) &&
        checkRequiredProps(data, ['amount', 'currency'], onError) &&
        transactionObjectValidtor(data, ['amount'], onError)
    ) {
        let { data, correlationId = '', callbackUrl } = props;
        return requestMaker(`/transactions/type/adjustment`, {
            'X-CorrelationID': correlationId,
            'X-Callback-URL': callbackUrl,
        }).post(data);
    }
};
