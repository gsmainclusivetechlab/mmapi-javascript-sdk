// ------------ Basic Auth ----------------
//needed to add  api key ,call back url
gsma.initBasicAuth(
  "59vthmq3f6i15v6jmcjskfkmh", //consumer key
  "ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb" //consumer secret key
);
GSMA_BASIC_AUTH = gsma.auth;

console.log("gsma basic fun", GSMA_BASIC_AUTH);

//   call for balance check
// GSMA_BASIC_AUTH.merchantPay({
//   type: 'balanceCheck',
//   onSuccess: (status, data) => {
//     console.log('handling success BASIC AUTH', status, data);
//   },
//   onFailure: (status, data) => {
//     console.log('handling error BASIC AUTH', status, data);
//   },
// });

//  call for pay init
// GSMA_BASIC_AUTH.merchantPay({
//   type: 'payeeInitiated',
//   data: {
//     amount: '200.00',
//     debitParty: [
//       {
//         key: 'accountid',
//         value: '2999',
//       },
//     ],
//     creditParty: [
//       {
//         key: 'accountid',
//         value: '2999',
//       },
//     ],
//     currency: 'RWF',
//   },
//   // correlationId: '9ed1792d-96de-45c7-a301-56a07e6d4883',
//   callbackUrl:
//     'https://1527dea3-111f-48de-ba27-1c840df261c1.mock.pstmn.io/callback',

//   onSuccess: (status, data) => {
//     console.log('handling success in basicAuth payInit', status, data);
//   },
//   onFailure: (status, data) => {
//     console.error('handling error in basicAuth payInit', status, data);
//   },
// });

// generate pre auth code
// GSMA_BASIC_AUTH.merchantPay({
//   type: 'preAuthCode',
//   identifierType: 'accountid',
//   identifier: 1,
//   callbackUrl:
//     'https://1527dea3-111f-48de-ba27-1c840df261c1.mock.pstmn.io/callback',

//   data: {
//     requestDate: '2018-07-03T10:43:27.405Z',
//     currency: 'GBP',
//     amount: '1000.00',
//   },
//   onSuccess: (status, data) => {
//     console.log('BASIC AUTH success preAuth code generator ', status, data);
//     // getState(data);
//   },
//   onFailure: (status, data) => {
//     console.log('BASIC AUTH error preAuth code generator', status, data);
//   },
// });
function getState(data) {
  let { serverCorrelationId } = data;
  // request for state
  GSMA_BASIC_AUTH.merchantPay({
    type: "requestState",
    serverCorrelationId: serverCorrelationId,
    onSuccess: (status, data) => {
      console.log("BASIC AUTH success in get state ", status, data);
      getTransactionReference(data);
    },
    onFailure: (status, data) => {
      console.log("BASIC AUTH error in get state", status, data);
    },
  });
}

function getTransactionReference({ objectReference: transactionReference }) {
  //   call to get transaction referece
  GSMA_BASIC_AUTH.merchantPay({
    type: "transactionReference",
    transactionReference: transactionReference,
    onSuccess: (status, data) => {
      console.log("BASIC AUTH success transaction reference", status, data);
    },
    onFailure: (status, data) => {
      console.log("BASIC AUTH error transaction reference", status, data);
    },
  });
}

// --------------------- get all payments --------

// GSMA_BASIC_AUTH.merchantPay({
//   type: 'payments',
//   identifierType: 'accountid',
//   identifier: 1,
//   offset: 10,
//   limit: 100,
//   onSuccess: (status, data) => {
//     console.log('BASIC AUTH success payments', status, data);
//   },
//   onFailure: (status, data) => {
//     console.log('BASIC AUTH error payments', status, data);
//   },
// });

//---------------- service availability ----------------

// GSMA_BASIC_AUTH.merchantPay({
//   type: 'serviceAvailability',
//   onSuccess: (status, data) => {
//     console.log('BASIC AUTH success serviceAvailability', status, data);
//   },
//   onFailure: (status, data) => {
//     console.log('BASIC AUTH error serviceAvailability', status, data);
//   },
// });

// retrive missing apis
GSMA_BASIC_AUTH.merchantPay({
  type: "retrieveMissingRequest",
  clientcorrelationId: "84002d65-229c-4434-a48f-3cdfd1c030e3",
  onSuccess: (status, data) => {
    console.log("BASIC AUTH success missing apis", status, data);
    getMissedResponse(data);
  },
  onFailure: (status, data) => {
    console.log("BASIC AUTH error missing apis", status, data);
  },
});

function getMissedResponse({ link }) {
  GSMA_BASIC_AUTH.merchantPay({
    type: "retrieveMissingResponse",
    link: link,
    onSuccess: (status, data) => {
      console.log("BASIC AUTH success retrieveMissingResponse", status, data);
    },
    onFailure: (status, data) => {
      console.log("BASIC AUTH error retrieveMissingResponse", status, data);
    },
  });
}
