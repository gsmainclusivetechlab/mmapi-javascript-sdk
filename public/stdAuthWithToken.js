// ------------ Standard Auth  --------------

//1.  sdk handling token creation and its expirey

gsma.initStandardaAuth({
  userName: '59vthmq3f6i15v6jmcjskfkmh', //consumer key
  pass: 'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb', //consumer secret key
  apiKey: 'oVN89kXyTx1cKT3ZohH7h6foEmQmjqQm3OK2U8Ue', //api key
  onSucess: (gsmaFunctions) => {
    console.log('on receving tokened data', gsmaFunctions);
    GSMA_STD_AUTH = gsma.auth;
    //   call for balance check
    GSMA_STD_AUTH.merchantPay({
      type: 'balanceCheck',
      onSucess: (status, data) => {
        console.log('handling sucess std AUTH 1', status, data);
      },
      onFailure: (status, data) => {
        console.log('handling error std AUTH 1', status, data);
      },
    });
  },
  onFailure: (error) => {
    console.log('got some error to get token');
  },
});
