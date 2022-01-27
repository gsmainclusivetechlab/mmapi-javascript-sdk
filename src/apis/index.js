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
                if (res && res.data && res.status) {
                    return successHandler
                        ? successHandler(res?.data, res?.headers, res?.status)
                        : null;
                } else {
                    return successHandler
                        ? successHandler(null, null, '')
                        : null;
                }
            })
            .catch((error) => {
                if (
                    error &&
                    error.response &&
                    error.response.data &&
                    error.response.status
                ) {
                    return errorHandler
                        ? errorHandler(
                              error?.response?.data,
                              error?.response?.status
                          )
                        : null;
                } else {
                    return errorHandler ? errorHandler({}, '') : null;
                }
            });
    }
}
