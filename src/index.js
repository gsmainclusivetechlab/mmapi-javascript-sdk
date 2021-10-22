import choosePayment from "./utils/choosePayment";
import merchantPayments from "./modules/MerchantPayments";
// sepereate call to get token
import generateToken from "./apis/generateToken";
const allFunctions = (authHeaders) => {
  window.gsma.auth = {
    merchantPay: choosePayment(merchantPayments, authHeaders),
  };
};
window.gsma = {
  initBasicAuth: (userName, pass) => {
    return allFunctions({ userName, pass });
  },
  initStandardAuthWithToken: (apiKey, accessToken) => {
    return allFunctions({ apiKey, accessToken });
  },
  initStandardaAuth: tokenGenerator,
  getToken: generateToken,
  noAuth: {
    merchantPay: choosePayment(merchantPayments),
  },
};

// helper functions
const checkForTokenExpire = (expiresAt) => {
  return new Date().getTime() / 1000 < expiresAt;
};

const setExpireTokenInStorage = ({ access_token, expires_in }) => {
  let tokenSaveData = {
    access_token,
    expires_in,
    expires_at: new Date().getTime() / 1000 + expires_in,
    created_at: new Date().getTime() / 1000,
  };
  sessionStorage.setItem("token", JSON.stringify(tokenSaveData));
};

// function handling token generation
function tokenGenerator({ userName, pass, apiKey, onSucess, onFailure }) {
  // if user has token in cache
  if (sessionStorage.getItem("token")) {
    const tokenData = JSON.parse(sessionStorage.getItem("token"));
    const { access_token: accessToken, expires_at } = tokenData;

    // if token not expired
    if (
      accessToken &&
      checkForTokenExpire(expires_at) &&
      accessToken.length > 0
    ) {
      console.log("sdk using existing token", accessToken);
      onSucess(allFunctions({ apiKey, accessToken }));
    } else {
      console.log("token expired");
      generateToken({
        userName,
        pass,
        onSucess: (status, data) => {
          setExpireTokenInStorage(data);
          const { access_token: accessToken } = data;

          console.log("return sdk function after expiry", data);
          // returning sdk function with newly create access token
          onSucess(allFunctions({ apiKey, accessToken }));
        },
        onFailure: (status, data) => {
          onFailure(status, data);
          console.error("error to get token on sdk", status, data);
        },
      });
    }
  } else {
    generateToken({
      userName,
      pass,
      onSucess: (status, data) => {
        setExpireTokenInStorage(data);
        const { access_token: accessToken } = data;

        console.log("returns sdk function from new token", status, data);
        // returning sdk function with newly create access token
        onSucess(allFunctions({ apiKey, accessToken }));
      },
      onFailure: (err) => {
        onFailure({ status: 401, response: err });
        console.error("error to get token on sdk", data);
      },
    });
  }
}
