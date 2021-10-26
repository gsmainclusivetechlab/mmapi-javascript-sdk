import gsma from './gsma';
import gsmaAuth from './gsmaAuth';

export default function fetchHandler(
    reqConfig = null,
    successHandler = null,
    errorHandler = null,
    hasAuth = false
) {
    if (reqConfig) {
        // choose auth type
        let apiInstance;
        if (hasAuth) {
            apiInstance = gsmaAuth;
        } else {
            apiInstance = gsma;
        }
        apiInstance(reqConfig)
            .then((res) => {
                return successHandler
                    ? successHandler(res?.data, res?.status)
                    : null;
            })
            .catch((error) => {
                return errorHandler && error.response
                    ? errorHandler(
                          error?.response?.data,
                          error?.response?.status
                      )
                    : null;
            });
    }
}
