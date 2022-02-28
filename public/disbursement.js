// Individual Disbursement

gsma.auth.Disbursement({
    type: 'createDisbursementTransaction',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
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
                value: '30',
            },
        ],
        currency: 'RWF',
    },
    onSuccess: (data, headers, status) => {
        console.log('createDisbursementTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createDisbursementTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Individual Disbursement using polling

gsma.auth.Disbursement({
    type: 'createDisbursementTransaction',
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
                value: '30',
            },
        ],
        currency: 'RWF',
    },
    onSuccess: (data, headers, status) => {
        console.log('createDisbursementTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createDisbursementTransaction error', error, status);
    },
});

//:: Bulk Disbursement
// Create a Transaction Batch

gsma.auth.Disbursement({
    type: 'createBatchTransaction',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    data: {
        transactions: [
            {
                type: 'billpay',
                amount: '200.00',
                currency: 'RWF',
                debitParty: [
                    {
                        key: 'accountid',
                        value: '2999',
                    },
                ],
                creditParty: [
                    {
                        key: 'accountid',
                        value: '30',
                    },
                ],
            },
            {
                type: 'billpay',
                amount: '400.00',
                currency: 'RWF',
                debitParty: [
                    {
                        key: 'accountid',
                        value: '2999',
                    },
                ],
                creditParty: [
                    {
                        key: 'accountid',
                        value: '30',
                    },
                ],
            },
        ],
    },
    onSuccess: (data, headers, status) => {
        console.log('createBatchTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createBatchTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});
// View a Transaction Batch

gsma.auth.Disbursement({
    type: 'viewBatchTransaction',
    batchId: 'REF-1635833835849',
    onSuccess: (data, headers, status) => {
        console.log('viewBatchTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewBatchTransaction error', error, status);
    },
});

// View Batch Completions

gsma.auth.Disbursement({
    type: 'viewBatchCompletions',
    batchId: 'REF-1635833835849',
    onSuccess: (data, headers, status) => {
        console.log('viewBatchCompletions success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewBatchCompletions error', error, status);
    },
});

// View Batch Completions

gsma.auth.Disbursement({
    type: 'viewBatchRejections',
    batchId: 'REF-1635833835849',
    onSuccess: (data, headers, status) => {
        console.log('viewBatchRejections success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewBatchRejections error', error, status);
    },
});

//  :: Bulk Disbursement with Maker / Checker
// Update a Transaction Batch

gsma.auth.Disbursement({
    type: 'updateBatchTransaction',
    batchId: 'REF-1635833835849',
    onSuccess: (data, headers, status) => {
        console.log('updateBatchTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('updateBatchTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// view Account Balance

gsma.auth.Disbursement({
    type: 'viewAccountBalance',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAccountBalance success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountBalance error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Retrieve a Set of Transactions for an Account

gsma.auth.Disbursement({
    type: 'viewAccountTransaction',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    filter: [
        {
            key: 'offset',
            value: '0',
        },
        {
            key: 'limit',
            value: '2',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAccountTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountTransaction error', error, status);
    },
});

// Check for Service Availability

gsma.auth.Disbursement({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.Disbursement({
    type: 'viewResponse',
    clientCorrelationId: 'cc56daf1-b2dd-4553-aeba-43d61d81f5c8',
    onSuccess: (data, headers, status) => {
        console.log('viewResponse success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewResponse error', error, status);
    },
});

// View Request State

gsma.auth.Disbursement({
    type: 'viewRequestState',
    serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
    onSuccess: (data, headers, status) => {
        console.log('viewRequestState success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewRequestState error', error, status);
    },
});

// Retrieve a Transaction

gsma.auth.Disbursement({
    type: 'viewTransaction',
    transactionReference: 'REF-1633678194929',
    onSuccess: (data, headers, status) => {
        console.log('viewTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewTransaction error', error, status);
    },
});

// Perform a Payment Reversal

gsma.auth.Disbursement({
    type: 'createReversal',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    transactionReference: 'REF-1466171557592',
    onSuccess: (data, headers, status) => {
        console.log('createReversal success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createReversal error', error, status);
    },
});
