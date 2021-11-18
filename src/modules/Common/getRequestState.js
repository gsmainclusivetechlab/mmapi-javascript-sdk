import { checkRequiredProps, requestMaker } from '../../utils';
/**
 * Function to get the state of any previously called request
 * @param  {} props must contain serverCorrelationId to identify the request
 * @param  {} onError triggered when there is some error in validation
 */
export default function getRequestState(props, onError) {
    if (checkRequiredProps(props, ['serverCorrelationId'], onError)) {
        let { serverCorrelationId } = props;
        return requestMaker(`/requeststates/${serverCorrelationId}`).get();
    }
}
