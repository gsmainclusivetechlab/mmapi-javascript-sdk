// ------------ Standard Auth  --------------

// 2. token handled by client and passing token and api key globaly

// call to get token
gsma.getToken({
  username: "59vthmq3f6i15v6jmcjskfkmh",
  pass: "ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb",
  onSuccess: (status, data) => {
    console.log("token call directly from client", status, data);
    // client can store token in (cache) or anywhere
    functionaCallAfterGettingToken(data);
  },
  onFailure: (status, data) => {
    console.log("error to get token", status, data);
  },
});

// function receving access token
function functionaCallAfterGettingToken({ access_token }) {
  // inti setup
  gsma.initStandardAuthWithToken(
    "oVN89kXyTx1cKT3ZohH7h6foEmQmjqQm3OK2U8Ue",
    access_token
  );
  const GSMA_WITH_KEY_TOKEN = gsma.auth;

  GSMA_WITH_KEY_TOKEN.merchantPay({
    type: "balanceCheck",
    onSuccess: (status, data) => {
      console.log("handling success std AUTH 2", status, data);
    },
    onFailure: (status, data) => {
      console.log("handling error std AUTH 2", status, data);
    },
  });
}
