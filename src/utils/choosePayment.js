import apiCall from '../apis';
import checkForExistingType from './checkPaymentType';
import chooseAuthType from './chooseAuthType';

export default function choosePayment(paymentTypes, authHeaderProps = null) {
    return ({ onSuccess = () => {}, onFailure = () => {}, type, ...rest }) => {
        // check for payment type
        let reqConfig = checkForExistingType(
            paymentTypes,
            type,
            rest,
            onFailure
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
    };
}
