// Successful Retrieval of Bills

gsma.auth.BillPayment({
    type: 'viewAccountBills',
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
            value: '10',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAccountBills success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountBills error', error, status);
    },
});

// Create a Bill Transaction

gsma.auth.BillPayment({
    type: 'createBillTransaction',
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
                value: '2999',
            },
        ],
        currency: 'RWF',
    },
    onSuccess: (data, headers, status) => {
        console.log('createBillTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createBillTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Make a Bill Payment

gsma.auth.BillPayment({
    type: 'createBillPayment',
    billReference: 'REF-000001',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    data: {
        currency: 'GBP',
        amountPaid: '5.30',
    },
    onSuccess: (data, headers, status) => {
        console.log('createBillPayment success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createBillPayment error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Make a Bill Payment with Polling

gsma.auth.BillPayment({
    type: 'createBillPayment',
    billReference: 'REF-000001',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    data: {
        currency: 'GBP',
        amountPaid: '5.30',
    },
    onSuccess: (data, headers, status) => {
        console.log('createBillPayment success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createBillPayment error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Retrieval of Bill Payments

gsma.auth.BillPayment({
    type: 'viewBillPayment',
    billReference: 'REF-000001',
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
            value: '10',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewBillPayment success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewBillPayment error', error, status);
    },
});

// view Account Balance

gsma.auth.BillPayment({
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

gsma.auth.BillPayment({
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

gsma.auth.BillPayment({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.BillPayment({
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

gsma.auth.BillPayment({
    type: 'viewRequestState',
    serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
    onSuccess: (data, headers, status) => {
        console.log('viewRequestState success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewRequestState error', error, status);
    },
});
