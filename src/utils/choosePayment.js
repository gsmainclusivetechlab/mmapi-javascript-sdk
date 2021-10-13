import apiCall from '../apis';
import checkForExistingType from './checkPaymentType';
export default function choosePayment(payamentTypes) {
  return ({ onSucess = () => {}, onFailure = () => {}, type, ...rest }) => {
    console.log('calling...', type);
    // handle auth
    if (rest.hasOwnProperty('auth')) {
      let {
        auth: {
          apiKey = null,
          accessToken = null,
          userName = null,
          pass = null,
        },
      } = rest;
      let reqConfig = checkForExistingType(
        payamentTypes,
        type,
        rest,
        onFailure
      );

      if (reqConfig) {
        if (apiKey && accessToken) {
          reqConfig['headers'] = {
            ...reqConfig.headers,
            'X-API-Key': apiKey,
            Authorization: `Bearer ${accessToken}`,
          };
          apiCall(reqConfig, onSucess, onFailure, true);
        } else if (userName && pass) {
          const base64Data = window.btoa(`${userName}:${pass}`);
          reqConfig['headers'] = {
            ...reqConfig.headers,
            // 'X-API-Key': apiKey,
            Authorization: `Bearer ${base64Data}`,
          };
          apiCall(reqConfig, onSucess, onFailure, false);
        } else {
          onFailure('000', 'Missing auth params');
        }
      }
    } else {
      apiCall(
        checkForExistingType(payamentTypes, type, rest, onFailure),
        onSucess,
        onFailure,
        false
      );
    }
  };
}
