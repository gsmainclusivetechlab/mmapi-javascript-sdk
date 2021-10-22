// ------------ Standard Auth  --------------

// 2. token handled by client and passing token and api key globaly

// call to get token
gsma.getToken({
  userName: '59vthmq3f6i15v6jmcjskfkmh',
  pass: 'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb',
  onSucess: (status, data) => {
    console.log('token call directly from client', status, data);
    // client can store token in (cache) or anywhere
    functionaCallAfterGettingToken(data);
  },
  onFailure: (status, data) => {
    console.log('error to get token', status, data);
  },
});

// function receving access token
function functionaCallAfterGettingToken({ access_token }) {
  // inti setup
  const GSMA_WITH_KEY_TOKEN = gsma.initStandardAuthWithToken(
    'oVN89kXyTx1cKT3ZohH7h6foEmQmjqQm3OK2U8Ue',
    access_token
  );
  GSMA_WITH_KEY_TOKEN.merchantPay({
    type: 'balanceCheck',
    onSucess: (status, data) => {
      console.log('handling sucess std AUTH 2', status, data);
    },
    onFailure: (status, data) => {
      console.log('handling error std AUTH 2', status, data);
    },
  });
}
