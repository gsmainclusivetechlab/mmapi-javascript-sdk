import generateToken from '../apis/generateToken';
import { moduleWrapperWithAuth } from '../modules';

// function handling token generation
export default function initSdkWithTokenHandler({
    username,
    pass,
    apiKey,
    callbackUrl = null,
    onSuccess,
    onFailure,
}) {
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
            onSuccess('You can access our functions using : window.gsma.auth');
        } else {
            getToken({ username, pass, apiKey, onSuccess, onFailure });
        }
    } else {
        getToken({ username, pass, apiKey, onSuccess, onFailure });
    }
}

function getToken({ username, pass, apiKey, onSuccess, onFailure }) {
    generateToken({
        username,
        pass,
        onSuccess: (data) => {
            setExpireTokenInStorage(data);
            const { access_token: accessToken } = data;
            // All moduled are initated with new accessToken and api key
            moduleWrapperWithAuth({
                apiKey,
                accessToken,
                callbackUrl,
            });

            onSuccess('You can access our functions using : window.gsma.auth');
        },
        onFailure,
    });
}

const checkForTokenExpire = (expiresAt) => {
    return new Date().getTime() / 1000 < expiresAt;
};

const setExpireTokenInStorage = ({ access_token, expires_in }) => {
    let tokenSaveData = {
        access_token,
        expires_in,
        expires_at: new Date().getTime() / 1000 + expires_in,
        created_at: new Date().getTime() / 1000,
    };
    sessionStorage.setItem('mmSdkToken', JSON.stringify(tokenSaveData));
};
