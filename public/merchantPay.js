// init merchant transaction vi callback
gsma.auth.MerchantPayment({
    type: 'createMerchantTransaction',
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
                value: '1',
            },
        ],
        currency: 'RWF',
    },
    callbackUrl:
        'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
    onSuccess: (data, headers, status) => {
        console.log('createMerchantTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createMerchantTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// init merchant transaction vi polling
gsma.auth.MerchantPayment({
    type: 'createMerchantTransaction',
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
                value: '1',
            },
        ],
        currency: 'RWF',
    },
    onSuccess: (data, headers, status) => {
        console.log('createMerchantTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createMerchantTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// create aith code
gsma.auth.MerchantPayment({
    type: 'createAuthorisationCode',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    data: {
        amount: '200.00',
        currency: 'RWF',
        amountType: 'exact',
        codeLifetime: '600',
        holdFundsIndicator: true,
        redemptionAccountIdentifiers: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
    },
    onSuccess: (data, headers, status) => {
        console.log('createAuthorisationCode success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createAuthorisationCode error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// view account balance
gsma.auth.MerchantPayment({
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

// view transaction Accounts
gsma.auth.MerchantPayment({
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

// check for service availibility
gsma.auth.MerchantPayment({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// view missing response
gsma.auth.MerchantPayment({
    type: 'viewResponse',
    clientCorrelationId: 'cc56daf1-b2dd-4553-aeba-43d61d81f5c8',
    onSuccess: (data, headers, status) => {
        console.log('viewResponse success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewResponse error', error, status);
    },
});

// Request state
gsma.auth.MerchantPayment({
    type: 'viewRequestState',
    serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
    onSuccess: (data, headers, status) => {
        console.log('viewRequestState success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewRequestState error', error, status);
    },
});

// view Transaction
gsma.auth.MerchantPayment({
    type: 'viewTransaction',
    transactionReference: 'REF-1633678194929',
    onSuccess: (data, headers, status) => {
        console.log('viewTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewTransaction error', error, status);
    },
});

//Perform a Payment Refund

gsma.auth.MerchantPayment({
    type: 'createRefundTransaction',
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
                value: '1',
            },
        ],
        currency: 'RWF',
    },
    onSuccess: (data, headers, status) => {
        console.log('createRefundTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createRefundTransaction error', error, status);
    },
});

// Perform a Payment Reversal

gsma.auth.MerchantPayment({
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
