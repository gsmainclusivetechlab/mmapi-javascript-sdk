
GSMA_BASIC_AUTH = gsma.auth;
// GSMA_BASIC_AUTH.disbursement({
//     type: 'individualDisbursement',
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
//     onSuccess: (data) => {
//         console.log('handling sucess', data);
//         getBulkTransactionState(data);
//     },
//     onFailure: (error) => {
//         console.log('show error', error);
//     },
// });

// used for polling ---
// function getBulkTransactionState({ serverCorrelationId }) {
//     GSMA_BASIC_AUTH.disbursement({
//         type: 'requestState',
//         serverCorrelationId: serverCorrelationId,
//         onSuccess: (data) => {
//             console.log(' sucess: polling request state', data);
//             disbursementReversal(data);
//         },
//         onFailure: (error) => {
//             console.log(' error: polling request state', error);
//         },
//     });
// }

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

GSMA_BASIC_AUTH.disbursement({
    type: 'bulkDisbursement',
    data: {
        transactions: [
            {
                amount: '2001.00',
                type: 'transfer',
                creditParty: [
                    {
                        key: 'accountid',
                        value: '2000',
                    },
                ],
                currency: 'RWF',
                debitParty: [
                    {
                        key: 'accountid',
                        value: '2999',
                    },
                ],
            },
            {
                amount: '200.00',
                type: 'transfer',
                creditParty: [
                    {
                        key: 'accountid',
                        value: '2999',
                    },
                ],
                currency: 'RWF',
                debitParty: [
                    {
                        key: 'accountid',
                        value: '2000',
                    },
                ],
            },
        ],
        batchTitle: 'Batch_Test',
        batchDescription: 'Testing a Batch',
        scheduledStartDate: '2019-12-11T15:08:03.158Z',
    },
    // callbackUrl:
    //     'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
    notificationMethod:'polling',
    onSuccess: (data) => {
        console.log('bulk disbursement sucess', data);
        getState(data)
    },
    onFailure: (error) => {
        console.error('bulk disbursement error', error);
    },
});




function getState({serverCorrelationId}){
    GSMA_BASIC_AUTH.international({
        type: 'requestState',
        serverCorrelationId:serverCorrelationId,
        onSuccess: (data, header, status) => {
            console.log('BASIC AUTH success international getState', status, data);
            getTransactionReference(data)
            approval(data)
        },
        onFailure: (error, header, status) => {
            console.error('BASIC AUTH error international getState', error);
        },
    });
}

function approval({objectReference:batchId}){
    GSMA_BASIC_AUTH.disbursement({
    type: 'bulkDisbursementApproval',
    batchId: batchId,
    callbackUrl:
        'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
    onSuccess: (data, status) => {
        console.log('sucess: bulkDisbursementApproval :', data, status);
        // getState(data)
    },
    onFailure: (error) => {
        console.error('error :bulkDisbursementApproval ', error);
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
//     onSuccess: (data, status) => {
//         console.log('sucess: bulkDisbursementApproval :', data, status);
//     },
//     onFailure: (error) => {
//         console.error('error :bulkDisbursementApproval ', error);
//     },
// });

// GSMA_BASIC_AUTH.disbursement({
//     type: 'payments',
//     identifierType: 'accountid',
//     identifier: 2000,
//     offset: 0,
//     limit: 20,
//     getClientCorrelationId: (id) => {
//         console.log('getting client id', id);
//     },
//     onSuccess: (data, status) => {
//         console.log('sucess: get all transactions :', data, status);
//     },
//     onFailure: (error) => {
//         console.error('error :get all transactions ', error);
//     },
// });
