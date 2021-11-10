import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';
/**
 * Function to get the transaction object of previously created transaction
 * @param  {} props must contain transactionReference which is available while requesting state or from else where
 * @param  {} onError triggers validation errors
 */
export default function getTransactionReference(props, onError) {
    if (checkRequiredProps(props, ['transactionReference'], onError)) {
        let { transactionReference } = props;
        return requestMaker(`/transactions/${transactionReference}`).get();
    }
}
