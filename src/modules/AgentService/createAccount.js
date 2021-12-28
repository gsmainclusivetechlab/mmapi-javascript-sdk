import { checkRequiredProps, requestMaker } from '../../utils';
export default function createAccount(props, onError) {
    if (checkRequiredProps(props, ['data'], onError)) {
        const { correlationId, callbackUrl, data } = props;
        let header = {
            'X-CorrelationID': correlationId,
        };
        if (callbackUrl) {
            header['X-Callback-URL'] = callbackUrl;
        }

        return requestMaker(
            '/accounts/individual', //url
            header //  headers
        ).post(
            data //data
        );
    }
}
