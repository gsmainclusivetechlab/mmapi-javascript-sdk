import {
    checkRequiredProps,
    requestMaker,
    generateIdentifierUrl,
} from '../../utils';

export default function balanceCheck(props, onError) {
    if (checkRequiredProps(props, ['accountId'], onError)) {
        const { accountId } = props;
        return generateIdentifierUrl(accountId, onError, (accountUrl) => {
            return requestMaker(`/accounts/${accountUrl}/balance`).get();
        });
    }
}
