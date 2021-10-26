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
//     type: 'balanceCheck',
//     identifierType: 'accountid',
//     identifier: 1,
//     onSuccess: (data, status) => {
//         console.log('BASIC AUTH success balance check', status, data);
//     },
//     onFailure: (error, status) => {
//         console.error('BASIC AUTH error balance check', error);
//     },
// });

//  call for pay init
// GSMA_BASIC_AUTH.merchantPay({
//     type: 'payeeInitiated',
//     data: {
//         amount: '200.00',
//         debitParty: [
//             {
//                 key: 'accountid',
//                 value: '2999',
//             },
//         ],
//         creditParty: [
//             {
//                 key: 'accountid',
//                 value: '2999',
//             },
//         ],
//         currency: 'RWF',
//     },
//     // callbackUrl:
//     //   'https://1527dea3-111f-48de-ba27-1c840df261c1.mock.pstmn.io/callback',

//     onSuccess: (data, status) => {
//         console.log('BASIC AUTH success in payInit', status, data);
//         getState(data);
//     },
//     onFailure: (error, status) => {
//         console.error('BASIC AUTH  error in payInit', error, status);
//     },
// });

// generate pre auth code
// GSMA_BASIC_AUTH.merchantPay({
//     type: 'preAuthCode',
//     identifierType: 'accountid',
//     identifier: 1,
//     callbackUrl:
//         'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',

//     data: {
//         requestDate: '2018-07-03T10:43:27.405Z',
//         currency: 'GBP',
//         amount: '1000.00',
//     },
//     onSuccess: (data, status) => {
//         console.log('BASIC AUTH success preAuth code generator ', status, data);
//         // getState(data);
//         // getTransactionReference(data);
//         // payWithPreAuthCode();
//     },
//     onFailure: (error, status) => {
//         console.log('BASIC AUTH error preAuth code generator', error);
//     },
// });

function payWithPreAuthCode(code) {
    GSMA_BASIC_AUTH.merchantPay({
        type: 'paymentWithAuthCode',
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
            oneTimeCode: 'e8f51f4e-c8d6-4b4e-873b-fcdbda22523d',
        },
        callbackUrl:
            'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',

        onSuccess: (data, status) => {
            console.log(
                'BASIC AUTH success payment with preAuth code ',
                status,
                data
            );
            // getState(data);
            // getTransactionReference(data);
        },
        onFailure: (error, status) => {
            console.log(
                'BASIC AUTH error payment with preAuth code',
                error,
                status
            );
        },
    });
}

function getState(data) {
    let { serverCorrelationId } = data;
    // request for state
    GSMA_BASIC_AUTH.merchantPay({
        type: 'requestState',
        serverCorrelationId: serverCorrelationId,
        onSuccess: (data, status) => {
            console.log('BASIC AUTH success in get state ', status, data);
            // reversal(data);
            getTransactionReference(data);
        },
        onFailure: (error, status) => {
            console.log('BASIC AUTH error in get state', error);
        },
    });
}

function reversal({ objectReference: transactionReference }) {
    //   call to get transaction referece
    GSMA_BASIC_AUTH.merchantPay({
        type: 'reversal',
        transactionReference: transactionReference,
        onSuccess: (data, status) => {
            console.log(
                'BASIC AUTH success transaction reversal',
                status,
                data
            );
            getState(data);
        },
        onFailure: (error, status) => {
            console.error(
                'BASIC AUTH error transaction reversal',
                error,
                status
            );
        },
    });
}

function getTransactionReference({ objectReference: transactionReference }) {
    //   call to get transaction referece
    GSMA_BASIC_AUTH.merchantPay({
        type: 'transactionReference',
        transactionReference: transactionReference,
        onSuccess: (data, status) => {
            console.log(
                'BASIC AUTH success transaction reference',
                status,
                data
            );
        },
        onFailure: (error, status) => {
            console.log('BASIC AUTH error transaction reference', error);
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
//   onSuccess: ( data,status) => {
//     console.log('BASIC AUTH success payments', status, data);
//   },
//   onFailure: (error,status) => {
//     console.log('BASIC AUTH error payments',  error);
//   },
// });

//---------------- service availability ----------------

// GSMA_BASIC_AUTH.merchantPay({
//   type: 'serviceAvailability',
//   onSuccess: ( data,status) => {
//     console.log('BASIC AUTH success serviceAvailability', status, data);
//   },
//   onFailure: (error,status) => {
//     console.log('BASIC AUTH error serviceAvailability', error);
//   },
// });

// retrive missing apis
GSMA_BASIC_AUTH.merchantPay({
    type: 'retrieveMissingRequest',
    clientCorrelationId: '84002d65-229c-4434-a48f-3cdfd1c030e3',
    onSuccess: (data, status) => {
        console.log('BASIC AUTH success missing apis', status, data);
        getMissedResponse(data);
    },
    onFailure: (error, status) => {
        console.log('BASIC AUTH error missing apis', error);
    },
});

// function getMissedResponse({ link }) {
//     GSMA_BASIC_AUTH.merchantPay({
//         type: 'retrieveMissingResponse',
//         link: link,
//         onSuccess: (data, status) => {
//             console.log(
//                 'BASIC AUTH success retrieveMissingResponse',
//                 status,
//                 data
//             );
//         },
//         onFailure: (error, status) => {
//             console.log('BASIC AUTH error retrieveMissingResponse', error);
//         },
//     });
// }
