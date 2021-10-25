import apiCall from "../apis";
import checkForExistingType from "./checkPaymentType";
export default function choosePayment(paymentTypes, hasAuthHeaders = null) {
  return ({ onSucess = () => {}, onFailure = () => {}, type, ...rest }) => {
    let reqConfig = checkForExistingType(paymentTypes, type, rest, onFailure);

    // check for payment type

    if (reqConfig) {
      // handle auth
      if (rest.hasOwnProperty("auth")) {
        let {
          auth: {
            apiKey = null,
            accessToken = null,
            username = null,
            pass = null,
          },
        } = rest;

        if (apiKey && accessToken) {
          reqConfig["headers"] = {
            ...reqConfig.headers,
            "X-API-Key": apiKey,
            Authorization: `Bearer ${accessToken}`,
          };
          apiCall(reqConfig, onSucess, onFailure, true);
        } else if (username && pass) {
          const base64Data = window.btoa(`${username}:${pass}`);
          reqConfig["headers"] = {
            ...reqConfig.headers,
            // 'X-API-Key': apiKey,
            Authorization: `Bearer ${base64Data}`,
          };
          apiCall(reqConfig, onSucess, onFailure, false);
        } else {
          onFailure("000", "Missing auth params");
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
            reqConfig["headers"] = {
              ...reqConfig.headers,
              "X-API-Key": apiKey,
              Authorization: `Bearer ${accessToken}`,
            };
            apiCall(reqConfig, onSucess, onFailure, true);
          } else if (username && pass) {
            const base64Data = window.btoa(`${username}:${pass}`);
            reqConfig["headers"] = {
              ...reqConfig.headers,
              Authorization: `Bearer ${base64Data}`,
            };
            apiCall(reqConfig, onSucess, onFailure, false);
          } else {
            onFailure("000", "Missing auth params");
          }
        } else {
          apiCall(reqConfig, onSucess, onFailure, false);
        }
      }
    }
  };
}
