import { requestMaker, checkRequiredProps } from '../../utils';
/**
 * Function to get the state of any previously called request
 * @param  {} props must contain serverCorrelationId to identify the request
 * @param  {} onError triggered when there is some error in validation
 */
export default function getBulkDisbursementRejected(props, onError) {
    if (checkRequiredProps(props, ['batchId'], onError)) {
        let { batchId } = props;
        return requestMaker(`/batchtransactions/${batchId}/rejections`).get();
    }
}
