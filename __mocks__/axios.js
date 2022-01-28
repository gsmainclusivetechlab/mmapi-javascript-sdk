export default {
    create: jest.fn(() => (req) => mockResolver(req)),
};

const mockResolver = (reqProps) => {
    let notificationMethod = 'polling';
    let status = 200;
    let statusValue = 'completed';
    const {
        url,
        headers: { 'X-Callback-URL': callbackUrl = null },
        method,
    } = reqProps;
    if (callbackUrl && (method === 'post' || method === 'patch')) {
        notificationMethod = 'callback';
        status = 202;
        statusValue = 'pending';
    }
    switch (url) {
        case '/transactions/type/deposit':
        case '/transactions/type/withdrawal':
        case '/transactions/type/inttransfer':
        case '/transactions/type/transfer':
        case '/transactions/type/disbursement':
        case '/transactions/type/merchantpay': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'e8eecfa8-090b-4c97-aed4-3f63d92a0831',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '15952',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/authorisationcodes/7006e6d7-d0e4-4cda-9300-8cb42bbf8915': {
            return Promise.resolve({
                data: {
                    authorisationCode: '7006e6d7-d0e4-4cda-9300-8cb42bbf8915',
                    codeState: 'active',
                    amount: '200.00',
                    currency: 'RWF',
                    amountType: 'exact',
                    codeLifetime: 600,
                    holdFundsIndicator: true,
                    redemptionAccountIdentifiers: [
                        {
                            key: 'msisdn',
                            value: '+449999999',
                        },
                        {
                            key: 'walletid',
                            value: '1',
                        },
                        {
                            key: 'accountid',
                            value: '1',
                        },

                        {
                            key: 'linkref',
                            value: 'REF-1614173872194',
                        },
                        {
                            key: 'linkref',
                            value: 'REF-1614174252665',
                        },
                        {
                            key: 'linkref',
                            value: 'REF-1614179612570',
                        },
                    ],
                    creationDate: '2021-11-17T04:45:43',
                    modificationDate: '2021-11-17T04:45:43',
                },
                headers: {},
                status,
            });
        }
        case '/accounts/accountid@1$accountid@2000/authorisationcodes': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'e64112e3-cde3-4942-adb8-4576006237b0',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '1888',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/batchtransactions': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '90fc8752-0ec1-455c-a22f-3c2550784b8a',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '1685',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/batchtransactions/REF-1635833835849/rejections':
        case '/batchtransactions/REF-1635833835849/completions': {
            return Promise.resolve({
                data: [],
                headers: {},
                status,
            });
        }
        case '/batchtransactions/REF-1635833835849': {
            if (method === 'get') {
                return Promise.resolve({
                    data: {
                        batchId: 'REF-1635833835849',
                        batchStatus: 'completed',
                        approvalDate: '2021-11-24T12:01:32',
                        completionDate: '2021-11-24T12:01:32',
                        processingFlag: false,
                        completedCount: 0,
                        rejectionCount: 0,
                        parsingSuccessCount: 0,
                        creationDate: '2021-11-02T06:17:16',
                        modificationDate: '2021-11-24T12:01:32',
                        requestDate: '2021-11-02T06:17:16',
                    },
                    headers: {},
                    status,
                });
            } else if (method === 'patch') {
                return Promise.resolve({
                    data: {
                        serverCorrelationId:
                            '090b18bd-fb2c-4987-9549-4079ecf05445',
                        status: 'completed',
                        notificationMethod: 'polling',
                        objectReference: 'REF-1635833835849',
                        pollLimit: 100,
                    },
                    headers: {},
                    status,
                });
            }
        }
        case '/accounts/accountid/1/accountname': {
            return Promise.resolve({
                data: {
                    name: {
                        title: 'Mr',
                        firstName: 'Jeff',
                        middleName: 'James',
                        lastName: 'Jimmer',
                        fullName: 'Jeff Jimmer',
                    },
                    lei: 'AAAA0012345678901299',
                },
                headers: {},
                status,
            });
        }
        case '/accounts/accountid/1/debitmandates': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'cfd042c0-f658-4a91-b540-eab5fff9ed25',
                    status: 'completed',
                    notificationMethod,
                    objectReference: 'REF-1640751902706',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }
        case '/accounts/accountid/1/debitmandates/REF-1637758263349': {
            return Promise.resolve({
                data: {
                    startDate: '2018-11-20',
                    numberOfPayments: 0,
                    mandateStatus: 'active',
                    requestDate: '2021-11-24T12:44:34',
                    mandateReference: 'REF-1637758263349',
                    creationDate: '2021-11-24T12:51:03',
                    modificationDate: '2021-11-24T12:51:03',
                    payee: [
                        {
                            key: 'msisdn',
                            value: '+449999999',
                        },
                        {
                            key: 'walletid',
                            value: '1',
                        },
                        {
                            key: 'accountid',
                            value: '1',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1583141449478',
                        },
                    ],
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/links': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'ac5c0f33-2e6a-4571-80e1-fab7ce184f38',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '614',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/links/REF-1638168563421': {
            return Promise.resolve({
                data: {
                    linkReference: 'REF-1638168563421',
                    sourceAccountIdentifiers: [
                        {
                            key: 'accountid',
                            value: '2999',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907197912',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907232832',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907265888',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907412029',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907483978',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637909732171',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1638330257762',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1638360515423',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1638444910612',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1639023787539',
                        },
                    ],
                    mode: 'both',
                    status: 'active',
                    requestingOrganisation: {
                        requestingOrganisationIdentifierType: 'organisationid',
                        requestingOrganisationIdentifier: '12345',
                    },
                    creationDate: '2021-11-29T06:49:23',
                    modificationDate: '2021-11-29T06:49:23',
                    customData: [
                        {
                            key: 'keytest',
                            value: 'keyvalue',
                        },
                    ],
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/bills': {
            return Promise.resolve({
                data: [
                    {
                        billReference: 'REF-000001',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-01-17T00:00:00',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-000004',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-000005',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-17T00:00:00',
                        modificationDate: '2021-02-17T00:00:00',
                        customData: [
                            {
                                key: 'customKey1',
                                value: 'customValue1',
                            },
                            {
                                key: 'customKey2',
                                value: 'customValue2',
                            },
                        ],
                        metadata: [
                            {
                                key: 'metadata1',
                                value: 'metadataValue1',
                            },
                        ],
                    },
                    {
                        billReference: 'REF-000006',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                        customData: [
                            {
                                key: 'customKey1',
                                value: 'customValue1',
                            },
                        ],
                    },
                    {
                        billReference: 'REF-000007',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-000008',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-000009',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-0000010',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-0000011',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                    {
                        billReference: 'REF-0000012',
                        amountDue: '50.00',
                        currency: 'GBP',
                        dueDate: '2016-08-02',
                        minimumAmountDue: '0.00',
                        creationDate: '2021-02-15T11:44:58',
                        modificationDate: '2021-02-17T00:00:00',
                    },
                ],
                headers: {},
                status,
            });
        }
        case '/transactions/type/billpay': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '9a94a616-d4d5-4029-b244-aa6f59e4fc0a',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '20567',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/bills/REF-000001/payments': {
            if (method === 'post') {
                return Promise.resolve({
                    data: {
                        serverCorrelationId:
                            'ffffdbb5-9021-47bf-8ec7-221d7260705d',
                        status: 'pending',
                        notificationMethod,
                        objectReference: '1357',
                        pollLimit: 100,
                    },
                    headers: {},
                    status,
                });
            } else if (method === 'get') {
                return Promise.resolve({
                    data: [
                        {
                            customerReference: 'customer ref 0001',
                            billPaymentStatus: 'unpaid',
                            amountPaid: '0.99',
                            currency: 'GBP',
                            supplementaryBillReferenceDetails: [
                                {
                                    paymentReferenceType: 'type 1',
                                    paymentReferenceValue: 'value 1',
                                },
                            ],
                            requestDate: '2021-02-18T08:21:27',
                            creationDate: '2021-02-17T00:00:00',
                            modificationDate: '2021-02-18T08:20:58',
                        },
                        {
                            customerReference: 'customer ref 0001',
                            billPaymentStatus: 'unpaid',
                            amountPaid: '0.99',
                            currency: 'GBP',
                            supplementaryBillReferenceDetails: [
                                {
                                    paymentReferenceType: 'type 1',
                                    paymentReferenceValue: 'value 1',
                                },
                            ],
                            requestDate: '2021-02-18T08:21:27',
                            creationDate: '2021-02-17T00:00:00',
                            modificationDate: '2021-02-18T08:20:58',
                        },
                    ],
                    headers: {},
                    status,
                });
            }
        }

        case '/accounts/accountid/1/authorisationcodes': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'f0a8d71f-ff8c-4f28-8bdf-781a4c952234',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '2589',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/authorisationcodes/059f88cc-c4c8-4e48-9388-0c3abb7b329b': {
            return Promise.resolve({
                data: {
                    authorisationCode: '059f88cc-c4c8-4e48-9388-0c3abb7b329b',
                    codeState: 'active',
                    amount: '1000.00',
                    currency: 'GBP',
                    redemptionAccountIdentifiers: [
                        {
                            key: 'msisdn',
                            value: '+449999999',
                        },
                        {
                            key: 'walletid',
                            value: '1',
                        },
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    creationDate: '2021-12-28T06:35:25',
                    modificationDate: '2021-12-28T06:35:25',
                    requestDate: '2018-07-03T10:43:27',
                },
                headers: {},
                status,
            });
        }

        case '/accounts/individual': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '1a144d42-af9a-43b9-a416-0c34051a28ec',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '332',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/msisdn/+447777777774': {
            return Promise.resolve({
                data: {
                    accountIdentifiers: [
                        {
                            key: 'msisdn',
                            value: '+447777777774',
                        },
                    ],
                    identity: [
                        {
                            identityId: '373',
                            identityType: 'individual',
                            identityStatus: 'active',
                            identityKyc: {
                                nationality: 'AD',
                                dateOfBirth: '2000-11-20',
                                occupation: 'Miner',
                                employerName: 'string',
                                contactPhone: '+447777777777',
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
                                emailAddress: 'xyz@xyz.com',
                                birthCountry: 'AD',
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
                    accountStatus: 'available',
                    accountSubStatus: 'subStatus',
                    fees: [
                        {
                            feeType: 'string',
                            feeAmount: '5.46',
                            feeCurrency: 'AED',
                        },
                    ],
                    registeringEntity: 'ABC Agent',
                    creationDate: '2022-01-03T17:42:16',
                    requestDate: '2021-02-17T15:41:45',
                    customData: [
                        {
                            key: 'test',
                            value: 'custom1',
                        },
                    ],
                },
                headers: {},
                status,
            });
        }

        case '/accounts/msisdn/+447777777774/identities/1': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '1e0a6155-9ae5-467b-b496-3d1b0c8a1a5c',
                    status: 'pending',
                    notificationMethod,
                    objectReference: '111',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/balance': {
            return Promise.resolve({
                data: {
                    currentBalance: '1000000000.00',
                    availableBalance: '0.00',
                    reservedBalance: '0.00',
                    unclearedBalance: '0.00',
                    currency: 'GBP',
                    accountStatus: 'available',
                },
                headers: {},
                status,
            });
        }

        case '/accounts/accountid/1/transactions': {
            return Promise.resolve({
                data: [
                    {
                        transactionReference: 'REF-1466171557592',
                        creditParty: [
                            {
                                key: 'msisdn',
                                value: '+449999999',
                            },
                            {
                                key: 'walletid',
                                value: '1',
                            },
                        ],
                        debitParty: [
                            {
                                key: 'msisdn',
                                value: '+44012345678',
                            },
                            {
                                key: 'accountid',
                                value: '3',
                            },
                        ],
                        type: 'transfer',
                        transactionStatus: 'created',
                        amount: '200.00',
                        currency: 'GBP',
                        descriptionText: 'This is a test request',
                        internationalTransferInformation: {
                            originCountry: 'GB',
                            deliveryMethod: 'agent',
                            receivingCountry: 'DE',
                        },
                        recipientKyc: {
                            nationality: 'AD',
                            occupation: 'recipient occupation',
                            employerName: 'recipient employer name',
                            contactPhone: '+4412345678',
                            gender: 'f',
                            idDocument: [
                                {
                                    idType: 'passport',
                                    idNumber: '2',
                                    issuer: 'recipient issuer',
                                    issuerPlace: 'recipient issuer place',
                                    issuerCountry: 'GB',
                                },
                            ],
                            postalAddress: {
                                addressLine1: 'recipient line 1',
                                addressLine2: 'recipient line 2',
                                addressLine3: 'recipient line 3',
                                city: 'recipient city',
                                stateProvince: 'recipient state',
                                postalCode: 'recipient postal code',
                                country: 'GB',
                            },
                            subjectName: {
                                title: 'Ms',
                                firstName: 'Elizabeth',
                                middleName: 'Jane',
                                lastName: 'Smith',
                                fullName: 'Elizabeth Jane Smith',
                            },
                            birthCountry: 'GB',
                        },
                        senderKyc: {
                            nationality: 'GB',
                            occupation: 'sender occupation',
                            employerName: 'sender employer name',
                            contactPhone: '+4487654321',
                            gender: 'm',
                            idDocument: [
                                {
                                    idType: 'passport',
                                    idNumber: '1',
                                    issuer: 'sender issuer',
                                    issuerPlace: 'sender issuer place',
                                    issuerCountry: 'GB',
                                },
                            ],
                            postalAddress: {
                                addressLine1: 'sender line 1',
                                addressLine2: 'sender line 2',
                                addressLine3: 'sender line 3',
                                city: 'sender city',
                                stateProvince: 'sender province',
                                postalCode: 'sender postal code',
                                country: 'GB',
                            },
                            subjectName: {
                                title: 'Mr',
                                firstName: 'John',
                                middleName: 'Andrew',
                                lastName: 'Smith',
                                fullName: 'John Andrew Smith',
                            },
                            emailAddress: 'mail@mail.com',
                            birthCountry: 'GB',
                        },
                        creationDate: '2021-02-17T00:00:00',
                        modificationDate: '2021-02-26T11:11:36',
                        requestDate: '2016-06-17T10:16:54',
                    },
                    {
                        transactionReference: 'REF-1466172807776',
                        creditParty: [
                            {
                                key: 'msisdn',
                                value: '+449999999',
                            },
                            {
                                key: 'walletid',
                                value: '1',
                            },
                            {
                                key: 'accountid',
                                value: '1',
                            },
                            {
                                key: 'mandatereference',
                                value: 'REF-1583141449478',
                            },
                            {
                                key: 'linkref',
                                value: 'REF-1473082363913',
                            },
                            {
                                key: 'linkref',
                                value: 'REF-1579002505974',
                            },
                        ],
                        type: 'transfer',
                        transactionStatus: 'completed',
                        amount: '200.00',
                        currency: 'GBP',
                        descriptionText: 'This is a test request',
                        internationalTransferInformation: {
                            originCountry: 'GB',
                            deliveryMethod: 'agent',
                            receivingCountry: 'DE',
                        },
                        recipientKyc: {
                            nationality: 'AD',
                            occupation: 'recipient occupation',
                            employerName: 'recipient employer name',
                            contactPhone: '+4412345678',
                            gender: 'f',
                            idDocument: [
                                {
                                    idType: 'passport',
                                    idNumber: '2',
                                    issuer: 'recipient issuer',
                                    issuerPlace: 'recipient issuer place',
                                    issuerCountry: 'GB',
                                },
                            ],
                            postalAddress: {
                                addressLine1: 'recipient line 1',
                                addressLine2: 'recipient line 2',
                                addressLine3: 'recipient line 3',
                                city: 'recipient city',
                                stateProvince: 'recipient state',
                                postalCode: 'recipient postal code',
                                country: 'GB',
                            },
                            subjectName: {
                                title: 'Miss',
                                firstName: 'recipient first name',
                                middleName: 'recipient middle name',
                                lastName: 'recipient last name',
                                fullName: 'recipient full name',
                            },
                            birthCountry: 'GB',
                        },
                        senderKyc: {
                            nationality: 'GB',
                            occupation: 'sender occupation',
                            employerName: 'sender employer name',
                            contactPhone: '+4487654321',
                            gender: 'm',
                            idDocument: [
                                {
                                    idType: 'passport',
                                    idNumber: '1',
                                    issuer: 'sender issuer',
                                    issuerPlace: 'sender issuer place',
                                    issuerCountry: 'GB',
                                },
                            ],
                            postalAddress: {
                                addressLine1: 'sender line 1',
                                addressLine2: 'sender line 2',
                                addressLine3: 'sender line 3',
                                city: 'sender city',
                                stateProvince: 'sender province',
                                postalCode: 'sender postal code',
                                country: 'GB',
                            },
                            subjectName: {
                                title: 'Mr',
                                firstName: 'sender first name',
                                middleName: 'sender middle name',
                                lastName: 'sender last name',
                                fullName: 'sender full name',
                            },
                            emailAddress: 'mail@mail.com',
                            birthCountry: 'GB',
                        },
                        creationDate: '2021-02-17T00:00:00',
                        requestDate: '2016-06-17T10:16:54',
                    },
                ],
                headers: {},
                status,
            });
        }

        case '/heartbeat': {
            return Promise.resolve({
                data: {
                    serviceStatus: 'available',
                },
                headers: {},
                status,
            });
        }

        case '/responses/cc56daf1-b2dd-4553-aeba-43d61d81f5c8': {
            return Promise.resolve({
                data: {
                    transactionReference: 'REF-1635943592995',
                    creditParty: [
                        {
                            key: 'accountid',
                            value: '30',
                        },
                    ],
                    debitParty: [
                        {
                            key: 'msisdn',
                            value: '+449999999',
                        },
                        {
                            key: 'walletid',
                            value: '1',
                        },
                        {
                            key: 'accountid',
                            value: '1',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1583141449478',
                        },
                    ],
                    type: 'merchantpay',
                    transactionStatus: 'completed',
                    amount: '200.00',
                    currency: 'RWF',
                    creationDate: '2021-11-03T12:46:33',
                    modificationDate: '2021-11-03T12:46:33',
                    requestDate: '2021-11-03T12:46:33',
                },
                headers: {},
                status,
            });
        }
        case '/requeststates/db474b5c-cc9d-4173-b1b0-8ac06cb20e7c': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
                    status: 'completed',
                    notificationMethod,
                    objectReference: 'REF-1635146490282',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/transactions/REF-1633678194929': {
            return Promise.resolve({
                data: {
                    transactionReference: 'REF-1633678194929',
                    creditParty: [
                        {
                            key: 'accountid',
                            value: '2999',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907197912',
                        },
                    ],
                    debitParty: [
                        {
                            key: 'accountid',
                            value: '2999',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907197912',
                        },
                    ],
                    type: 'merchantpay',
                    transactionStatus: 'pending',
                    amount: '200.00',
                    currency: 'RWF',
                    creationDate: '2021-10-08T08:29:55',
                    modificationDate: '2021-10-08T08:29:55',
                    requestDate: '2021-10-08T08:29:55',
                },
                headers: {},
                status,
            });
        }

        case '/transactions/type/adjustment': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: 'cf60aafd-9ec0-47cb-b851-f61a37e4b9b2',
                    status: statusValue,
                    notificationMethod,
                    objectReference: '15960',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/transactions/REF-1466171557592/reversals': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '3a278629-7a0b-45df-94b8-f76cb61ed6b7',
                    status: statusValue,
                    notificationMethod,
                    objectReference: '1',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/quotations': {
            return Promise.resolve({
                data: {
                    serverCorrelationId: '015e32ac-807a-4264-b208-9e01b05eee41',
                    status: statusValue,
                    notificationMethod,
                    objectReference: '1',
                    pollLimit: 100,
                },
                headers: {},
                status,
            });
        }

        case '/quotations/REF-1637125420801': {
            return Promise.resolve({
                data: {
                    quotationReference: 'REF-1637125420801',
                    creditParty: [
                        {
                            key: 'accountid',
                            value: '2000',
                        },
                        {
                            key: 'linkref',
                            value: 'REF-1621839627337',
                        },
                    ],
                    debitParty: [
                        {
                            key: 'accountid',
                            value: '2999',
                        },
                        {
                            key: 'mandatereference',
                            value: 'REF-1637907197912',
                        },
                    ],
                    type: 'inttransfer',
                    subType: 'abc',
                    quotationStatus: 'completed',
                    requestAmount: '75.30',
                    requestCurrency: 'RWF',
                    chosenDeliveryMethod: 'agent',
                    originCountry: 'AD',
                    receivingCountry: 'AD',
                    senderKyc: {
                        nationality: 'GB',
                        dateOfBirth: '1970-07-03',
                        occupation: 'Manager',
                        employerName: 'MFX',
                        contactPhone: '+447125588999',
                        gender: 'm',
                        idDocument: [
                            {
                                idType: 'nationalidcard',
                                idNumber: '1234567',
                                issueDate: '2018-07-03',
                                expiryDate: '2021-07-03',
                                issuer: 'UKPA',
                                issuerPlace: 'GB',
                                issuerCountry: 'GB',
                            },
                        ],
                        postalAddress: {
                            addressLine1: '111 ABC Street',
                            city: 'New York',
                            stateProvince: 'New York',
                            postalCode: 'ABCD',
                            country: 'GB',
                        },
                        subjectName: {
                            title: 'Mr',
                            firstName: 'Luke',
                            middleName: 'R',
                            lastName: 'Skywalker',
                            fullName: 'Luke R Skywalker',
                            nativeName: 'ABC',
                        },
                        emailAddress: 'luke.skywalkeraaabbb@gmail.com',
                        birthCountry: 'GB',
                    },
                    sendingServiceProviderCountry: 'AD',
                    creationDate: '2021-11-17T05:03:41',
                    modificationDate: '2021-11-17T05:03:41',
                    requestDate: '2018-07-03T11:43:27',
                    customData: [
                        {
                            key: 'keytest',
                            value: 'keyvalue',
                        },
                    ],
                },
                headers: {},
                status,
            });
        }
        default: {
            return Promise.reject({
                response: {
                    data: {
                        errorCategory: 'Service Unavailable',
                        errorCode: 'GenericError',
                        errorDescription:
                            'The service is not currently available or mock api not responding',
                    },
                    status: 500,
                },
            });
        }
    }
};
