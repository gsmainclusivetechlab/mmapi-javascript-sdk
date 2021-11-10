import { moduleWrapperWithAuth, moduleWrapperWithoutAuth } from './modules';
import sdkWithTokenHandler from './utils/initSdkWithTokenHandler';
// sepereate call to get token
import generateToken from './apis/generateToken';

window.gsma = {
    initBasicAuth: (username, pass, callbackUrl = null) => {
        moduleWrapperWithAuth({ username, pass, callbackUrl });
    },
    // initStandardAuthWithToken: (apiKey, accessToken) => {
    //     moduleWrapperWithAuth({ apiKey, accessToken });
    // },
    initStandardAuth: sdkWithTokenHandler,
    // getToken: generateToken,
    noAuth: moduleWrapperWithoutAuth,
};
