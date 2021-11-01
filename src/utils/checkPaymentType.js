import { v4 as uuidv4 } from 'uuid';
// check payment type exist in a particular module
export default function checkForExistingType(
    paymentTypes,
    type,
    rest,
    onFailure
) {
    if (paymentTypes[type]) {
        const correlationId = uuidv4();
        let restWithcorrelationId = { correlationId, ...rest };
        return paymentTypes[type](restWithcorrelationId, onFailure);
    } else {
        onFailure('Invalid Payment Type : ' + type, '400');
        // return;
    }
}
