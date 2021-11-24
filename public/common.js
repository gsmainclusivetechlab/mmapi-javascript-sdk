GSMA_BASIC_AUTH=gsma.auth
function getState({serverCorrelationId}){
    GSMA_BASIC_AUTH.international({
        type: 'requestState',
        serverCorrelationId:serverCorrelationId,
        onSuccess: (data, header, status) => {
            console.log('BASIC AUTH success international getState', status, data);
            getReference(data)
        },
        onFailure: (error, header, status) => {
            console.error('BASIC AUTH error international getState', error);
        },
    });
}

// retrive missing apis
// GSMA_BASIC_AUTH.merchantPay({
//     type: 'retrieveMissingRequest',
//     clientCorrelationId: '84002d65-229c-4434-a48f-3cdfd1c030e3',
//     onSuccess: (data, status) => {
//         console.log('BASIC AUTH success missing apis', status, data);
//         getMissedResponse(data);
//     },
//     onFailure: (error, status) => {
//         console.log('BASIC AUTH error missing apis', error);
//     },
// });

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


// function getTransactionReference({ objectReference: transactionReference }) {
//     //   call to get transaction referece
//     GSMA_BASIC_AUTH.merchantPay({
//         type: 'transactionReference',
//         transactionReference: transactionReference,
//         onSuccess: (data, status) => {
//             console.log(
//                 'BASIC AUTH success transaction reference',
//                 status,
//                 data
//             );
//         },
//         onFailure: (error, status) => {
//             console.log('BASIC AUTH error transaction reference', error);
//         },
//     });
// }

// --------------------- get all payments --------

// GSMA_BASIC_AUTH.merchantPay({
//   type: 'transactions',
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
