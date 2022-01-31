import apiCall from '../apis';
import checkForExistingType from './checkPaymentType';
import chooseAuthType from './chooseAuthType';

export default function choosePayment(paymentTypes, authHeaderProps = {}) {
    const { callbackUrl: globalCallBackUrl } = authHeaderProps;
    return (clientProps) => {
        // check for required basic props in called function
        if (
            clientProps &&
            clientProps.hasOwnProperty('onFailure') &&
            clientProps.hasOwnProperty('onSuccess')
        ) {
            const {
                onSuccess = () => {},
                onFailure = () => {},
                type,
                getClientCorrelationId = () => {},
                ...rest
            } = clientProps;
            // check for payment type
            let reqConfig = checkForExistingType(
                paymentTypes,
                type,
                rest,
                onFailure,
                getClientCorrelationId,
                globalCallBackUrl
            );

            if (reqConfig) {
                let authConfigHeaders = null;
                let isStdAuth = false;
                // handle auth
                chooseAuthType(
                    rest,
                    authHeaderProps,
                    reqConfig,
                    (reqConfigWithBasicAuth) => {
                        // basic auth config setup
                        authConfigHeaders = reqConfigWithBasicAuth;
                        isStdAuth = false;
                    },
                    (reqConfigWithStdAuth) => {
                        // std auth config setup
                        authConfigHeaders = reqConfigWithStdAuth;
                        isStdAuth = true;
                    },
                    onFailure
                );
                // choose sucess handler or tailing call back handler
                const { tailingFunctionCall = null, ...restConfig } = reqConfig;
                restConfig['headers'] = {
                    ...authConfigHeaders,
                };
                if (tailingFunctionCall) {
                    apiCall(
                        restConfig,
                        (dataFromParentSucessResponse) => {
                            let tailingReqConfig = tailingFunctionCall(
                                dataFromParentSucessResponse,
                                onFailure
                            );
                            tailingReqConfig['headers'] = {
                                ...authConfigHeaders,
                            };
                            apiCall(
                                tailingReqConfig,
                                onSuccess,
                                onFailure,
                                isStdAuth
                            );
                        },
                        onFailure,
                        isStdAuth
                    );
                } else {
                    apiCall(restConfig, onSuccess, onFailure, isStdAuth);
                }
            }
        } else {
            console.error('Missing onSucess/onFailure in request !');
        }
    };
}
