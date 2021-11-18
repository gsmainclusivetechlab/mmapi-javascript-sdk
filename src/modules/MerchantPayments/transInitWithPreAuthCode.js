import {
    generateIdentifierUrl,
    checkRequiredProps,
    requestMaker,
} from '../../utils';

export default (props, onError) => {
    if (checkRequiredProps(props, ['data', 'accountId'], onError)) {
        const { accountId, data, correlationId, callbackUrl } = props;

        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(
                `/accounts/${accountUrl}/authorisationcodes`,
                header
            ).post(data);
        });
    }
};
