// Perform an International Transfer

gsma.auth.InternationalTransfer({
    type: 'createInternationalTransaction',
    data: {
        amount: '100.00',
        creditParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        currency: 'GBP',
        debitParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        internationalTransferInformation: {
            originCountry: 'GB',
            quotationReference: '{{quotationReference}}',
            quoteId: '{{quoteId}}',
            receivingCountry: 'RW',
            remittancePurpose: 'personal',
            relationshipSender: 'none',
            deliveryMethod: 'agent',
            sendingServiceProviderCountry: 'AD',
        },
        senderKyc: {
            nationality: 'GB',
            dateOfBirth: '1970-07-03T11:43:27.405Z',
            occupation: 'Manager',
            employerName: 'MFX',
            contactPhone: '+447125588999',
            gender: 'm',
            emailAddress: 'luke.skywalkeraaabbb@gmail.com',
            birthCountry: 'GB',
            idDocument: [
                {
                    idType: 'nationalidcard',
                    idNumber: '1234567',
                    issueDate: '2018-07-03T11:43:27.405Z',
                    expiryDate: '2021-07-03T11:43:27.405Z',
                    issuer: 'UKPA',
                    issuerPlace: 'GB',
                    issuerCountry: 'GB',
                    otherIdDescription: 'test',
                },
            ],
            postalAddress: {
                country: 'GB',
                addressLine1: '111 ABC Street',
                city: 'New York',
                stateProvince: 'New York',
                postalCode: 'ABCD',
            },
            subjectName: {
                title: 'Mr',
                firstName: 'Luke',
                middleName: 'R',
                lastName: 'Skywalker',
                fullName: 'Luke R Skywalker',
                nativeName: 'ABC',
            },
        },
        requestingOrganisation: {
            requestingOrganisationIdentifierType: 'organisationid',
            requestingOrganisationIdentifier: 'testorganisation',
        },
    },
    callbackUrl:
        'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
    onSuccess: (data, headers, status) => {
        console.log('createInternationalTransaction success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createInternationalTransaction error', error, status);
    },
    getClientCorrelationId: (clientCorrelationId) => {
        console.log(
            'createMerchantTransaction correlationId',
            clientCorrelationId
        );
    },
});

// view Account Balance

gsma.auth.InternationalTransfer({
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

gsma.auth.InternationalTransfer({
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

gsma.auth.InternationalTransfer({
    type: 'viewServiceAvailability',
    onSuccess: (data, headers, status) => {
        console.log('viewServiceAvailability success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewServiceAvailability error', error, status);
    },
});

// Retrieve a Missing Response

gsma.auth.InternationalTransfer({
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

gsma.auth.InternationalTransfer({
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

gsma.auth.InternationalTransfer({
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

gsma.auth.InternationalTransfer({
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

// Request for Quotation

gsma.auth.InternationalTransfer({
    callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
    type: 'createQuotation',
    data: {
        creditParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        debitParty: [
            {
                key: 'accountid',
                value: '2999',
            },
        ],
        requestAmount: '75.30',
        requestCurrency: 'RWF',
        requestDate: '2018-07-03T11:43:27.405Z',
        type: 'inttransfer',
        subType: 'abc',
        chosenDeliveryMethod: 'agent',
        senderKyc: {
            nationality: 'GB',
            dateOfBirth: '1970-07-03T11:43:27.405Z',
            occupation: 'Manager',
            employerName: 'MFX',
            contactPhone: '+447125588999',
            gender: 'm',
            emailAddress: 'luke.skywalkeraaabbb@gmail.com',
            birthCountry: 'GB',
            idDocument: [
                {
                    idType: 'nationalidcard',
                    idNumber: '1234567',
                    issueDate: '2018-07-03T11:43:27.405Z',
                    expiryDate: '2021-07-03T11:43:27.405Z',
                    issuer: 'UKPA',
                    issuerPlace: 'GB',
                    issuerCountry: 'GB',
                    otherIdDescription: 'test',
                },
            ],
            postalAddress: {
                country: 'GB',
                addressLine1: '111 ABC Street',
                city: 'New York',
                stateProvince: 'New York',
                postalCode: 'ABCD',
            },
            subjectName: {
                title: 'Mr',
                firstName: 'Luke',
                middleName: 'R',
                lastName: 'Skywalker',
                fullName: 'Luke R Skywalker',
                nativeName: 'ABC',
            },
        },
        customData: [
            {
                key: 'keytest',
                value: 'keyvalue',
            },
        ],
        sendingServiceProviderCountry: 'AD',
        originCountry: 'AD',
        receivingCountry: 'AD',
    },
    onSuccess: (data, headers, status) => {
        console.log('createQuotation success', data, status);
    },
    onFailure: (error, status) => {
        console.log('createQuotation error', error, status);
    },
});

// View a Quotation

gsma.auth.InternationalTransfer({
    type: 'viewQuotation',
    quotationReference: 'REF-1637125420801',
    onSuccess: (data, headers, status) => {
        console.log('viewQuotation success', data, status);
    },
    onFailure: (error, status) => {
        console.log('viewQuotation error', error, status);
    },
});
