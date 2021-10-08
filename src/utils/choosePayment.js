import apiCall from '../apis';
import checkForExistingType from './checkPaymentType';
export default function choosePayment(payamentTypes) {
  return ({ onSucess = () => {}, onFailure = () => {}, type, ...rest }) => {
    console.log('calling...', type);
    // handle auth
    if (rest.hasOwnProperty('auth')) {
      let {
        auth: { apiKey = null, accessToken = null },
      } = rest;
      if (apiKey && accessToken) {
        let reqConfig = checkForExistingType(
          payamentTypes,
          type,
          rest,
          onFailure
        );

        if (reqConfig) {
          reqConfig['headers'] = {
            ...reqConfig.headers,
            'X-API-Key': apiKey,
            Authorization: `Bearer ${accessToken}`,
          };
          apiCall(reqConfig, onSucess, onFailure, true);
        }
      } else {
        onFailure('000', 'Missing api key or access-token');
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
