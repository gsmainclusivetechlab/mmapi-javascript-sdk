gsma.initBasicAuth(
    '59vthmq3f6i15v6jmcjskfkmh', //consumer key
    'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb' //consumer secret key
);
GSMA_BASIC_AUTH = gsma.auth;
console.log('key', GSMA_BASIC_AUTH);
GSMA_BASIC_AUTH.disbursement({
    type: 'individualDisbursement',
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
    onSuccess: (data) => {
        console.log('handling sucess', data);
        getBulkTransactionState(data);
    },
    onFailure: (error) => {
        console.log('show error', error);
    },
});

// used for polling ---
function getBulkTransactionState({ serverCorrelationId }) {
    GSMA_BASIC_AUTH.disbursement({
        type: 'requestState',
        serverCorrelationId: serverCorrelationId,
        onSuccess: (data) => {
            console.log(' sucess: polling request state', data);
            disbursementReversal(data);
        },
        onFailure: (error) => {
            console.log(' error: polling request state', error);
        },
    });
}

// used for polling reference ----
// function getBulkTransactionReference({ objectReference }) {
//     GSMA_BASIC_AUTH.disbursement({
//         type: 'transactionReference',
//         transactionReference: objectReference,
//         onSuccess: (data) => {
//             console.log(' sucess: polling request reference', data);
//         },
//         onFailure: (error) => {
//             console.log(' error: polling request reference', error);
//         },
//     });
// }

// check for reversal---

// function disbursementReversal({ objectReference }) {
//     GSMA_BASIC_AUTH.disbursement({
//         type: 'reversal',
//         transactionReference: objectReference,
//         callbackUrl:
//             'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
//         onSuccess: (data) => {
//             console.log(' sucess: disbursement reversal', data);
//             getBulkTransactionReference(data);
//         },
//         onFailure: (error) => {
//             console.log(' error: disbursement reversal', error);
//         },
//     });
// }

// GSMA_BASIC_AUTH.disbursement({
//     type: 'bulkDisbursement',
//     data: {
//         transactions: [
//             {
//                 amount: '200.00',
//                 type: 'transfer',
//                 creditParty: [
//                     {
//                         key: 'accountid',
//                         value: '2000',
//                     },
//                 ],
//                 currency: 'RWF',
//                 debitParty: [
//                     {
//                         key: 'accountid',
//                         value: '2999',
//                     },
//                 ],
//             },
//             {
//                 amount: '200.00',
//                 type: 'transfer',
//                 creditParty: [
//                     {
//                         key: 'accountid',
//                         value: '2999',
//                     },
//                 ],
//                 currency: 'RWF',
//                 debitParty: [
//                     {
//                         key: 'accountid',
//                         value: '2000',
//                     },
//                 ],
//             },
//         ],
//         batchTitle: 'Batch_Test',
//         batchDescription: 'Testing a Batch',
//         scheduledStartDate: '2019-12-11T15:08:03.158Z',
//     },
//     callbackUrl:
//         'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',

//     onSuccess: (data) => {
//         console.log('bulk disbursement sucess', data);
//     },
//     onFailure: (error) => {
//         console.error('bulk disbursement error', error);
//     },
// });

// GSMA_BASIC_AUTH.disbursement({
//     type: 'bulkDisbursementStatus',
//     batchId: 'REF-1635788600694',
//     onSuccess: (data) => {
//         console.log('bulk disbursement  status sucess', data);
//     },
//     onFailure: (error) => {
//         console.error('bulk disbursement status error', error);
//     },
// });

// GSMA_BASIC_AUTH.disbursement({
//     type: 'bulkDisbursementCompleted',
//     batchId: 'REF-1635786695336',
//     onSuccess: (data, status) => {
//         console.log('bulk disbursement  completed sucess', data, status);
//     },
//     onFailure: (error) => {
//         console.error('bulk disbursement completed error', error);
//     },
// });

// GSMA_BASIC_AUTH.disbursement({
//     type: 'bulkDisbursementRejected',
//     batchId: 'REF-1635786695336',
//     onSuccess: (data, status) => {
//         console.log('sucess: bulk disbursement rejected :', data, status);
//     },
//     onFailure: (error) => {
//         console.error('error :bulk disbursement rejected ', error);
//     },
// });

// GSMA_BASIC_AUTH.disbursement({
//     type: 'bulkDisbursementApproval',
//     batchId: 'REF-1635788600694',
//     callbackUrl:
//         'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
//     data: [
//         {
//             op: 'replace',
//             path: '/status',
//             value: 'approved',
//         },
//     ],
//     onSuccess: (data, status) => {
//         console.log('sucess: bulkDisbursementApproval :', data, status);
//     },
//     onFailure: (error) => {
//         console.error('error :bulkDisbursementApproval ', error);
//     },
// });
