function generateIdentifierUrl(accountId, onError, callRequestMaker) {
    let identifierUrl = '';
    // check type array if needed
    if (accountId && accountId.length > 0) {
        if (accountId.length === 1) {
            const { key = '', value = '' } = accountId[0];
            identifierUrl = `${key}/${value}`;
        } else {
            identifierUrl = accountId
                .map((accountItem) => `${accountItem.key}@${accountItem.value}`)
                .join('$');
        }
    } else {
        if (onError) {
            onError(
                {
                    errorCategory: 'validation',
                    errorCode: 'MandatoryValueNotSupplied',
                    errorDescription: 'Provided accountId must not be empty',
                    errorParameters: [{ key: 'accountId', value: [] }],
                },
                400
            );
        }
    }
    if (identifierUrl && identifierUrl.length > 0) {
        return callRequestMaker(identifierUrl);
    }
}

export default generateIdentifierUrl;
