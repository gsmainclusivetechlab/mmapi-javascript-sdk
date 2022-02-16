import { moduleWrapperWithAuth, moduleWrapperWithoutAuth } from './modules';
import sdkWithTokenHandler from './utils/initSdkWithTokenHandler';
import { isValidURL } from './utils';

window.gsma = {
    initBasicAuth: (username, pass, callbackUrl = null) => {
        if (callbackUrl) {
            if (isValidURL(callbackUrl)) {
                moduleWrapperWithAuth({ username, pass, callbackUrl });
            } else {
                console.error({
                    errorCategory: 'validation',
                    errorCode: 'Invalid CallBack Url',
                    errorDescription: 'SDK initiated without callback url',
                    errorParameters: [
                        { key: 'callbackUrl', value: callbackUrl },
                    ],
                });
            }
        } else {
            moduleWrapperWithAuth({ username, pass });
        }
    },
    // initStandardAuthWithToken: (apiKey, accessToken) => {
    //     moduleWrapperWithAuth({ apiKey, accessToken });
    // },
    initStandardAuth: sdkWithTokenHandler,
    // getToken: generateToken,
    noAuth: moduleWrapperWithoutAuth,
};
