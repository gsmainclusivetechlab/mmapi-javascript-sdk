export default function chooseAuthType(
    restParentProps,
    authHeaderProps,
    requestConfig,
    basicAuthCallBack,
    standarsAuthCallBack,
    onFailure
) {
    if (restParentProps.hasOwnProperty('auth')) {
        let {
            auth: {
                apiKey = null,
                accessToken = null,
                username = null,
                pass = null,
            },
        } = rest;
        generateAuthHeaderFormGivenParams(
            {
                apiKey,
                accessToken,
                username,
                pass,
            },
            requestConfig,
            basicAuthCallBack,
            standarsAuthCallBack,
            onFailure
        );
    } else if (authHeaderProps) {
        let {
            apiKey = null,
            accessToken = null,
            username = null,
            pass = null,
        } = authHeaderProps;

        generateAuthHeaderFormGivenParams(
            {
                apiKey,
                accessToken,
                username,
                pass,
            },
            requestConfig,
            basicAuthCallBack,
            standarsAuthCallBack,
            onFailure
        );
    } else {
        // no auth can throw error
        basicAuthCallBack({
            ...requestConfig.headers,
        });
    }
}

/**
 * Function generates added Auth related headers and call curresponding callback fun.
 * @param  {} {apiKey
 * @param  {} accessToken
 * @param  {} username
 * @param  {} pass} auth params
 * @param  {} requestConfig existing request params
 * @param  {} basicAuth basic auth call back function
 * @param  {} stdAuth standard auth call back function
 * @param  {} onFailure call back to throw error in b/w
 */
function generateAuthHeaderFormGivenParams(
    { apiKey, accessToken, username, pass },
    requestConfig,
    basicAuth,
    stdAuth,
    onFailure
) {
    if (apiKey && accessToken) {
        stdAuth({
            ...requestConfig.headers,
            'X-API-Key': apiKey,
            Authorization: `Bearer ${accessToken}`,
        });
    } else if (username && pass) {
        const base64Data = window.btoa(`${username}:${pass}`);

        basicAuth({
            ...requestConfig.headers,
            Authorization: `Bearer ${base64Data}`,
        });
    } else {
        // onFailure('Missing auth params', '400');
        basicAuth({
            ...requestConfig.headers
        });
    }
}
