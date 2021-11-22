import { checkRequiredProps, requestMaker } from '../../utils';
/**
 * Function to get the state of any previously called request
 * @param  {} props must contain serverCorrelationId to identify the request
 * @param  {} onError triggered when there is some error in validation
 */
export default function getQuotation(props, onError) {
    if (checkRequiredProps(props, ['quotationReference'], onError)) {
        let { quotationReference } = props;
        return requestMaker(`/quotations/${quotationReference}`).get();
    }
}
