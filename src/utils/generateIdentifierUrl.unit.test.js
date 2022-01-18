import generateIdentifierUrl from './generateIdentifierUrl';

test('Testing generateIdentifierUrl with null params', () => {
    const mokeCallbackForGeneratedUrl = jest.fn(() => {});
    generateIdentifierUrl(null, null, mokeCallbackForGeneratedUrl);
    expect(mokeCallbackForGeneratedUrl).toBeCalledTimes(0);
});

test('Testing generateIdentifierUrl with empty accountIds', () => {
    const mokeCallbackForGeneratedUrl = jest.fn(() => {});
    const mokeCallbackForErrorHandling = jest.fn(() => {});
    generateIdentifierUrl(
        [],
        mokeCallbackForErrorHandling,
        mokeCallbackForGeneratedUrl
    );
    expect(mokeCallbackForGeneratedUrl).toBeCalledTimes(0);
    expect(mokeCallbackForErrorHandling).toBeCalledTimes(1);
    expect(mokeCallbackForErrorHandling.mock.calls[0][0]).toEqual({
        errorCategory: 'validation',
        errorCode: 'MandatoryValueNotSupplied',
        errorDescription: 'Provided accountId must not be empty',
        errorParameters: [{ key: 'accountId', value: [] }],
    });
    expect(mokeCallbackForErrorHandling.mock.calls[0][1]).toEqual(400);
});

test('Testing generateIdentifierUrl with empty accountIds', () => {
    const mokeCallbackForGeneratedUrl = jest.fn(() => {});
    const mokeCallbackForErrorHandling = jest.fn(() => {});
    generateIdentifierUrl(
        [{ key: 'accountId', value: 3000 }],
        mokeCallbackForErrorHandling,
        mokeCallbackForGeneratedUrl
    );
    expect(mokeCallbackForGeneratedUrl).toBeCalledTimes(1);
    expect(mokeCallbackForErrorHandling).toBeCalledTimes(0);

    expect(mokeCallbackForGeneratedUrl.mock.calls[0][0]).toEqual(
        'accountId/3000'
    );
});

test('Testing generateIdentifierUrl with empty accountIds', () => {
    const mokeCallbackForGeneratedUrl = jest.fn(() => {});
    const mokeCallbackForErrorHandling = jest.fn(() => {});
    generateIdentifierUrl(
        [
            { key: 'accountId', value: 3000 },
            { key: 'accountId', value: 2000 },
        ],
        mokeCallbackForErrorHandling,
        mokeCallbackForGeneratedUrl
    );
    expect(mokeCallbackForGeneratedUrl).toBeCalledTimes(1);
    expect(mokeCallbackForErrorHandling).toBeCalledTimes(0);

    expect(mokeCallbackForGeneratedUrl.mock.calls[0][0]).toEqual(
        'accountId@3000$accountId@2000'
    );
});
