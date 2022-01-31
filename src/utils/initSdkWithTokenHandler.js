import generateToken from '../apis/generateToken';
import { moduleWrapperWithAuth } from '../modules';

// function handling token generation
export default function tokenGenerator({
    username = null,
    pass = null,
    apiKey = null,
    callbackUrl = null,
    onSuccess = null,
    onFailure = null,
}) {
    if (username && pass && apiKey) {
        // if user has token in cache
        if (sessionStorage.getItem('mmSdkToken')) {
            const tokenData = JSON.parse(sessionStorage.getItem('mmSdkToken'));
            const { access_token: accessToken, expires_at } = tokenData;

            // if token not expired
            if (
                accessToken &&
                checkForTokenExpire(expires_at) &&
                accessToken.length > 0
            ) {
                // All moduled are initated with new accessToken and api key
                moduleWrapperWithAuth({ apiKey, accessToken, callbackUrl });
                onSuccess &&
                    onSuccess(
                        'You can access our functions using : window.gsma.auth'
                    );
            } else {
                getToken({
                    username,
                    pass,
                    apiKey,
                    callbackUrl,
                    onSuccess,
                    onFailure,
                });
            }
        } else {
            getToken({
                username,
                pass,
                apiKey,
                callbackUrl,
                onSuccess,
                onFailure,
            });
        }
    } else {
        if (onFailure) {
            onFailure(
                {
                    errorCategory: 'validation',
                    errorCode: 'MandatoryValueNotSupplied',
                    errorDescription:
                        'Any of the mandatory value has not been provided while initialization.',
                    errorParameters: [
                        { key: 'username', value: '' },
                        { key: 'pass', value: '' },
                        { key: 'apiKey', value: '' },
                    ],
                },
                400
            );
        }
    }
}

function getToken({
    username,
    pass,
    apiKey,
    callbackUrl = null,
    onSuccess: onSuccessCallback = null,
    onFailure = null,
}) {
    generateToken({
        username,
        pass,
        onSuccess: (data = null) => {
            if (data) {
                setExpireTokenInStorage(data);
                const { access_token: accessToken } = data;
                // All moduled are initated with new accessToken and api key

                moduleWrapperWithAuth({
                    apiKey,
                    accessToken,
                    callbackUrl,
                });

                onSuccessCallback &&
                    onSuccessCallback(
                        'You can access our functions using : window.gsma.auth'
                    );
            } else {
                onFailure &&
                    onFailure(
                        {
                            errorCategory: 'Internal',
                            errorCode: 'GenericError',
                            errorDescription:
                                'The request could not be completed as access token is missing',
                            errorParameters: [
                                { key: 'accessToken', value: '' },
                            ],
                        },
                        400
                    );
            }
        },
        onFailure,
    });
}

const checkForTokenExpire = (expiresAt) => {
    return new Date().getTime() / 1000 < expiresAt;
};

const setExpireTokenInStorage = ({ access_token = '', expires_in = 3600 }) => {
    let tokenSaveData = {
        access_token,
        expires_in,
        expires_at: new Date().getTime() / 1000 + expires_in,
        created_at: new Date().getTime() / 1000,
    };

    sessionStorage.setItem('mmSdkToken', JSON.stringify(tokenSaveData));
};

export { checkForTokenExpire, setExpireTokenInStorage };
