import gsma from './gsma';
import gsmaAuth from './gsmaAuth';

export default function fetchHandler(
  reqConfig = null,
  successHandler = null,
  errorHandler = null,
  hasAuth = false
) {
  if (reqConfig) {
    let apiInstance;
    if (hasAuth) {
      apiInstance = gsmaAuth;
    } else {
      apiInstance = gsma;
    }
    apiInstance(reqConfig)
      .then((res) => {
        return successHandler ? successHandler(res.status, res?.data) : null;
      })
      .catch((err) => {
        console.error(err);
        return errorHandler
          ? errorHandler(err?.response?.status, err?.response?.data)
          : null;
      });
  }
}
