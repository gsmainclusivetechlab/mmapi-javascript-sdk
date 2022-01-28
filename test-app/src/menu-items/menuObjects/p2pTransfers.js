const p2pTransfers = [
    {
        id: 'p2pAccountName',
        title: 'Get P2P Account Name',
        type: 'item',
        requestType: 'viewAccountName',
        requestCategory: 'P2PTransfer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2pRequestQuotation',
        title: 'Request a P2P Quotation',
        type: 'item',
        requestType: 'createQuotation',
        requestCategory: 'P2PTransfer',
        target: true,
        polling: false,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
        ],
        params: [
            {
                id: 'body',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
                        creditParty: [
                            {
                                key: 'accountid',
                                value: '2000',
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
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2ptransfer',
        title: 'P2P Transfer',
        type: 'item',
        requestType: 'createTransferTransaction',
        requestCategory: 'P2PTransfer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
        ],
        params: [
            {
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
                        amount: '200.00',
                        debitParty: [
                            {
                                key: 'accountid',
                                value: '1',
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
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2pTransferFailure',
        title: 'View Request State',
        type: 'item',
        requestType: 'viewRequestState',
        requestCategory: 'P2PTransfer',
        polling: false,
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'serverCorrelationId',
                required: true,
                caption: 'Server-Correlation-ID',
                type: 'string',
                defaultValue: '214eff26-06e9-4def-83aa-54a2d194f25d',
            },
        ],
        params: [],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2pReversal',
        title: 'P2P Transfer Reversal',
        type: 'item',
        requestType: 'createReversal',
        requestCategory: 'P2PTransfer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
            {
                id: 'transactionReference',
                required: false,
                caption: 'Transaction Reference',
                type: 'string',
                defaultValue: 'REF-1636699885176',
            },
        ],
        params: [],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2pFSPBalance',
        title: 'Obtain FSP Balance',
        type: 'item',
        requestType: 'viewAccountBalance',
        requestCategory: 'P2PTransfer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'p2pFSPRetrieve',
        title: 'Retrieve Transactions for an FSP',
        type: 'item',
        requestType: 'viewAccountTransaction',
        requestCategory: 'P2PTransfer',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
            {
                id: 'filter',
                required: true,
                caption: 'Filter',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'offset',
                            value: '0',
                        },
                        {
                            key: 'limit',
                            value: '10',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'responses',
        title: 'Retrieve a Missing API Response',
        type: 'item',
        requestType: 'viewResponse',
        requestCategory: 'P2PTransfer',
        target: true,
        polling: false,
        returnClientCorrelation: false,
        headers: [
            {
                id: 'clientCorrelationId',
                required: false,
                caption: 'Client Correlation Id',
                type: 'string',
                defaultValue: 'a409a9d7-76ad-4ea3-b87f-3d282d6bea8f',
            },
        ],
        params: [],

        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
];
export default p2pTransfers;
