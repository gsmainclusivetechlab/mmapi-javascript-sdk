import chooseAuthType from './chooseAuthType';

test('Check basic auth without passing any config values', () => {
    const basicAuthCallbackMock = jest.fn((e) => {});
    chooseAuthType(null, null, null, basicAuthCallbackMock);

    expect(basicAuthCallbackMock).toHaveBeenCalledTimes(1);
    expect(basicAuthCallbackMock.mock.calls[0][0]).toEqual({});
});

test('Check basic auth without passing headers in config', () => {
    const basicAuthCallbackMock = jest.fn((e) => {});
    const standardAuthCallbackMock = jest.fn((e) => {});
    chooseAuthType(
        null,
        { username: '' },
        { headers: { 'X-Callback-URL': '/sample/demourl' } },
        basicAuthCallbackMock
    );

    expect(basicAuthCallbackMock).toHaveBeenCalledTimes(1);
    expect(standardAuthCallbackMock).toHaveBeenCalledTimes(0);
    expect(basicAuthCallbackMock.mock.calls[0][0]).toEqual({
        'X-Callback-URL': '/sample/demourl',
    });
});

test('Check standard auth with apiKey & accessToken', () => {
    const basicAuthCallbackMock = jest.fn((e) => {});
    const standardAuthCallbackMock = jest.fn((e) => {});
    chooseAuthType(
        null,
        { apiKey: 'apikey-sample', accessToken: 'access-token-sample' },
        { headers: { 'X-Callback-URL': '/sample/demourl' } },
        basicAuthCallbackMock,
        standardAuthCallbackMock
    );

    expect(basicAuthCallbackMock).toHaveBeenCalledTimes(0);
    expect(standardAuthCallbackMock).toHaveBeenCalledTimes(1);

    expect(standardAuthCallbackMock.mock.calls[0][0]).toEqual(
        expect.objectContaining({
            'X-API-Key': expect.stringMatching('apikey-sample'),
            'X-Callback-URL': expect.stringMatching('/sample/demourl'),
            Authorization: expect.stringMatching('Bearer access-token-sample'),
        })
    );
});

test('Check basic auth with username & password', () => {
    const basicAuthCallbackMock = jest.fn((e) => {});
    chooseAuthType(
        null,
        { username: 'sample_user_name', pass: 'sample_pass' },
        { headers: { 'X-Callback-URL': '/sample/demourl' } },
        basicAuthCallbackMock
    );

    expect(basicAuthCallbackMock).toHaveBeenCalledTimes(1);
    expect(basicAuthCallbackMock.mock.calls[0][0]).toEqual(
        expect.objectContaining({
            'X-Callback-URL': expect.stringMatching('/sample/demourl'),
            Authorization: expect.any(String),
        })
    );
});
