import apiCall from '../apis';
import checkForExistingType from './checkPaymentType';
export default function choosePayment(paymentTypes, hasAuthHeaders = null) {
    return ({ onSuccess = () => {}, onFailure = () => {}, type, ...rest }) => {
        let reqConfig = checkForExistingType(
            paymentTypes,
            type,
            rest,
            onFailure
        );

        // check for payment type

        if (reqConfig) {
            // handle auth
            if (rest.hasOwnProperty('auth')) {
                let {
                    auth: {
                        apiKey = null,
                        accessToken = null,
                        username = null,
                        pass = null,
                    },
                } = rest;

                if (apiKey && accessToken) {
                    reqConfig['headers'] = {
                        ...reqConfig.headers,
                        'X-API-Key': apiKey,
                        Authorization: `Bearer ${accessToken}`,
                    };
                    // apiCall(reqConfig, onSuccess, onFailure, true);
                } else if (username && pass) {
                    const base64Data = window.btoa(`${username}:${pass}`);
                    reqConfig['headers'] = {
                        ...reqConfig.headers,
                        // 'X-API-Key': apiKey,
                        Authorization: `Bearer ${base64Data}`,
                    };
                    // apiCall(reqConfig, onSuccess, onFailure, false);
                } else {
                    onFailure('Missing auth params', '400');
                }
            } else {
                if (hasAuthHeaders) {
                    let {
                        apiKey = null,
                        accessToken = null,
                        username = null,
                        pass = null,
                    } = hasAuthHeaders;

                    if (apiKey && accessToken) {
                        reqConfig['headers'] = {
                            ...reqConfig.headers,
                            'X-API-Key': apiKey,
                            Authorization: `Bearer ${accessToken}`,
                        };
                        // apiCall(reqConfig, onSuccess, onFailure, true);
                    } else if (username && pass) {
                        const base64Data = window.btoa(`${username}:${pass}`);
                        reqConfig['headers'] = {
                            ...reqConfig.headers,
                            Authorization: `Bearer ${base64Data}`,
                        };
                        // apiCall(reqConfig, onSuccess, onFailure, false);
                    } else {
                        onFailure('Missing auth params', '400');
                    }
                } else {
                    // apiCall(reqConfig, onSuccess, onFailure, false);
                }
            }

            // choose sucess handler or tailing call back handler
            const { tailingApiCall = null, ...restConfig } = reqConfig;
            if (tailingApiCall) {
                apiCall(
                    restConfig,
                    (data) => {
                        apiCall(
                            tailingApiCall(data, onFailure),
                            onSuccess,
                            onFailure,
                            false
                        );
                    },
                    onFailure,
                    false
                );
            } else {
                apiCall(reqConfig, onSuccess, onFailure, false);
            }
        }
    };
}
