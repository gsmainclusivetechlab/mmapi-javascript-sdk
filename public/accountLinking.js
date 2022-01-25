// Setup an Account Link

gsma.auth.AccountLinking({
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    type: 'createAccountLink',
    data: {
        sourceAccountIdentifiers: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        status: 'active',
        mode: 'both',
        customData: [
            {
                key: 'keytest',
                value: 'keyvalue',
            },
        ],
        requestingOrganisation: {
            requestingOrganisationIdentifierType: 'organisationid',
            requestingOrganisationIdentifier: '12345',
        },
    },
    onSuccess: (data, headers, status) => {
        console.log('createAccountLink success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createAccountLink error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Read a specific link for a given account

gsma.auth.AccountLinking({
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    linkReference: 'REF-1638168563421',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    type: 'viewAccountLink',
    onSuccess: (data, headers, status) => {
        console.log('viewAccountLink success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountLink error', error, status);
    },
});

// Perform a Transfer for a Linked Account

gsma.auth.AccountLinking({
    type: 'createTransferTransaction',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    data: {
        amount: '200.00',
        creditParty: [
            {
                key: 'linkref',
                value: 'REF-1638168563421',
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
    onSuccess: (data, headers, status) => {
        console.log('createTransferTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createTransferTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// view Account Balance

gsma.auth.AccountLinking({
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

gsma.auth.AccountLinking({
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

gsma.auth.AccountLinking({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.AccountLinking({
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

gsma.auth.AccountLinking({
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

gsma.auth.AccountLinking({
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

gsma.auth.AccountLinking({
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
