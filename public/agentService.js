// Agent-initiated Cash-out
gsma.auth.AgentService({
    type: 'createWithdrawalTransaction',
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
        console.log('createWithdrawalTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createWithdrawalTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Customer Cash-out at an ATM using an Authorisation Code
// Obtain an Authorisation Code

gsma.auth.AgentService({
    type: 'createAuthorisationCode',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    data: {
        requestDate: '2018-07-03T10:43:27.405Z',
        currency: 'GBP',
        amount: '1000.00',
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

// Retrieve Authorisation Code

gsma.auth.AgentService({
    type: 'viewAuthorisationCode',
    authorisationCode: '059f88cc-c4c8-4e48-9388-0c3abb7b329b',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAuthorisationCode success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAuthorisationCode error', error, status);
    },
});

// Agent-initiated Customer Cash-in
// Retrieve the Name of the Depositing Customer

gsma.auth.AgentService({
    type: 'viewAccountName',
    accountId: [
        {
            key: 'accountid',
            value: '2999',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAccountName success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccountName error', error, status);
    },
});

// Agent Initiated Cash-in

gsma.auth.AgentService({
    type: 'createDepositTransaction',
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
        console.log('createDepositTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createDepositTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Register a Customer Mobile Money Account

gsma.auth.AgentService({
    type: 'createAccount',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    data: {
        accountIdentifiers: [
            {
                key: 'msisdn',
                value: '+447777777774',
            },
        ],
        identity: [
            {
                identityKyc: {
                    birthCountry: 'AD',
                    contactPhone: '+447777777777',
                    dateOfBirth: '2000-11-20',
                    emailAddress: 'xyz@xyz.com',
                    employerName: 'string',
                    gender: 'm',
                    idDocument: [
                        {
                            idType: 'passport',
                            idNumber: '111111',
                            issueDate: '2018-11-20',
                            expiryDate: '2018-11-20',
                            issuer: 'ABC',
                            issuerPlace: 'DEF',
                            issuerCountry: 'AD',
                        },
                    ],
                    nationality: 'AD',
                    occupation: 'Miner',
                    postalAddress: {
                        addressLine1: '37',
                        addressLine2: 'ABC Drive',
                        addressLine3: 'string',
                        city: 'Berlin',
                        stateProvince: 'string',
                        postalCode: 'AF1234',
                        country: 'AD',
                    },
                    subjectName: {
                        title: 'Mr',
                        firstName: 'H',
                        middleName: 'I',
                        lastName: 'J',
                        fullName: 'H I J',
                        nativeName: 'string',
                    },
                },
                accountRelationship: 'accountholder',
                kycVerificationStatus: 'verified',
                kycVerificationEntity: 'ABC Agent',
                kycLevel: 1,
                customData: [
                    {
                        key: 'test',
                        value: 'custom',
                    },
                ],
            },
        ],
        accountType: 'string',
        customData: [
            {
                key: 'test',
                value: 'custom1',
            },
        ],
        fees: [
            {
                feeType: 'string',
                feeAmount: '5.46',
                feeCurrency: 'AED',
            },
        ],
        registeringEntity: 'ABC Agent',
        requestDate: '2021-02-17T15:41:45.194Z',
    },
    onSuccess: (data, headers, status) => {
        console.log('createAccount success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createAccount error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// Verify the KYC of a Customer
// Agent Initiated Cash-in

gsma.auth.AgentService({
    type: 'viewAccount',
    accountId: [
        {
            key: 'msisdn',
            value: '+447777777774',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('viewAccount success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewAccount error', error, status);
    },
});

// Update KYC Verification Status

gsma.auth.AgentService({
    type: 'updateAccountIdentity',
    accountId: [
        {
            key: 'msisdn',
            value: '+447777777774',
        },
    ],
    identityId: '2999',
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    data: [
        {
            op: 'replace',
            path: '/kycVerificationStatus',
            value: 'verified',
        },
    ],
    onSuccess: (data, headers, status) => {
        console.log('updateAccountIdentity success', data, status);
    },
    onFailure: (error, status) => {
        console.log('updateAccountIdentity error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// view Account Balance

gsma.auth.AgentService({
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

gsma.auth.AgentService({
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

gsma.auth.AgentService({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.AgentService({
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

gsma.auth.AgentService({
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

gsma.auth.AgentService({
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

gsma.auth.AgentService({
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
