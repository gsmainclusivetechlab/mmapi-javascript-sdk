// ------------ Basic Auth ----------------
//needed to add  api key ,call back url
gsma.initBasicAuth(
  '59vthmq3f6i15v6jmcjskfkmh', //consumer key
  'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb' //consumer secret key
);
GSMA_BASIC_AUTH = gsma.auth;

console.log('gsma basic fun', GSMA_BASIC_AUTH);

//   call for balance check
// GSMA_BASIC_AUTH.merchantPay({
//   type: 'balanceCheck',
//   onSucess: (status, data) => {
//     console.log('handling sucess BASIC AUTH', status, data);
//   },
//   onFailure: (status, data) => {
//     console.log('handling error BASIC AUTH', status, data);
//   },
// });

//  call for pay init
GSMA_BASIC_AUTH.merchantPay({
  type: 'payeeInitiated',
  data: {
    amount: '200.00',
    debitParty: [
      {
        key: 'accountid',
        value: '2999',
      },
    ],
    creditParty: [
      {
        key: 'accountid',
        value: '2999',
      },
    ],
    currency: 'RWF',
  },
  // corelationId: '9ed1792d-96de-45c7-a301-56a07e6d4883',
  callBackUrl:
    'https://1527dea3-111f-48de-ba27-1c840df261c1.mock.pstmn.io/callback',

  onSucess: (status, data) => {
    console.log('handling sucess in basicAuth payInit', status, data);
  },
  onFailure: (status, data) => {
    console.error('handling error in basicAuth payInit', status, data);
  },
});
