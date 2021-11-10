import requestMaker from '../../utils/requestMaker';
import checkRequiredProps from '../../utils/checkRequiredKeys';

export default (props, onError) => {
    if (
        checkRequiredProps(
            props,
            ['identifierType', 'identifier', 'data'],
            onError
        )
    ) {
        const { identifierType, identifier, data, correlationId, callbackUrl } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }
        return requestMaker(
            `/accounts/${identifierType}/${identifier}/authorisationcodes`,
            header
        ).post(data);
    }
};
