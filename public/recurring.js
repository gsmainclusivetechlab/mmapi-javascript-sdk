// Setup a Recurring Payment

gsma.auth.RecurringPayment({
    type: 'createAccountDebitMandate',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    data: {
        payee: [
            {
                key: 'accountId',
                value: '2999',
            },
        ],
        startDate: '2018-11-20',
        requestDate: '2021-11-24T12:44:34.223Z',
    },
    onSuccess: (data, headers, status) => {
        console.log('createAccountDebitMandate success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createAccountDebitMandate error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Retrieve a Debit Mandate

gsma.auth.RecurringPayment({
    type: 'viewAccountDebitMandate',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    mandateReference: 'REF-1637758263349',

    onSuccess: (data, headers, status) => {
        console.log('viewAccountDebitMandate success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountDebitMandate error', error, status);
    },
});

// Take a Recurring Payment

gsma.auth.RecurringPayment({
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
                value: '30',
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

// view Account Balance

gsma.auth.RecurringPayment({
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
});

// Retrieve a Set of Transactions for an Account

gsma.auth.RecurringPayment({
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

gsma.auth.RecurringPayment({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.RecurringPayment({
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

gsma.auth.RecurringPayment({
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

gsma.auth.RecurringPayment({
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

gsma.auth.RecurringPayment({
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

// Perform a Payment Refund

gsma.auth.RecurringPayment({
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
                value: '30',
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
