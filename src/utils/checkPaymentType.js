import { v4 as uuidv4 } from 'uuid';
// check payment type exist in a particular module
export default function checkPaymentType(
    paymentTypes,
    type,
    rest,
    onFailure,
    getClientCorrelationId = null,
    globalCallBackUrl = null
) {
    if (paymentTypes[type]) {
        const correlationId = uuidv4();
        let restWithcorrelationId = { correlationId, ...rest };

        // CALL BACK TO PASS CORRELATION ID TO CLIENT
        if (getClientCorrelationId) getClientCorrelationId(correlationId);

        // check individual request have a callback mentioned
        if (
            rest.hasOwnProperty('notificationMethod') &&
            rest.notificationMethod === 'polling'
        ) {
            if (rest.hasOwnProperty('callbackUrl')) {
                // remove callbackUrl property to switch into polling
                delete restWithcorrelationId.callbackUrl;
            }
        } else if (!rest.hasOwnProperty('callbackUrl')) {
            // CONFIG globalCallBackUrl TO EACH REQUEST
            if (globalCallBackUrl) {
                restWithcorrelationId['callbackUrl'] = globalCallBackUrl;
            }
        }

        return paymentTypes[type](restWithcorrelationId, onFailure);
    } else {
        onFailure(
            {
                errorCategory: 'validation',
                errorCode: 'typeError',
                errorDescription: 'Invalid Payment Type ',
                errorParameters: [
                    {
                        key: 'type',
                        value: type,
                    },
                ],
            },
            '400'
        );
    }
}
