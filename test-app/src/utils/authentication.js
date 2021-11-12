//Basic Authentication
export const GSMA_AUTHENTICATED = {};
export const basicAuthentication = (
  consumerKey,
  consumerSecret,
  callbackUrl
) => {
  if (window) {
    GSMA_AUTHENTICATED.BASIC = window.gsma.initBasicAuth(
      consumerKey,
      consumerSecret,
      callbackUrl
    );
  }
};

//Standard Authentication
export const standardAuthentication = (
  username,
  password,
  callbackUrl,
  apiKey,
  onSuccess,
  onFailure
) => {
  window.gsma.initStandardAuth({
    username: username,
    pass: password,
    callbackUrl: callbackUrl,
    apiKey: apiKey,
    onSuccess: (gsmaFunctions) => {
      GSMA_AUTHENTICATED.STANDARD = gsmaFunctions;
      onSuccess();
    },
    onFailure: (res) => {
      console.log("ONFAILURE");
      return onFailure(res);
    },
  });
};
