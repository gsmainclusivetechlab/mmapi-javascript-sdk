import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Perform an International Transfer', (done) => {
    gsma.InternationalTransfer({
        type: 'createInternationalTransaction',
        data: {
            amount: '100.00',
            creditParty: [
                {
                    key: 'accountid',
                    value: '2000',
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
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'callback',
                    })
                );
                expect(status).toBe(202);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});
test('view Account Balance', (done) => {
    gsma.InternationalTransfer({
        type: 'viewAccountBalance',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        onSuccess: (data, headers, status) => {
            try {
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Retrieve a Set of Transactions for an Account', (done) => {
    gsma.InternationalTransfer({
        type: 'viewAccountTransaction',
        accountId: [
            {
                key: 'accountid',
                value: '1',
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
            try {
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Check for Service Availability', (done) => {
    gsma.InternationalTransfer({
        type: 'viewServiceAvailability',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serviceStatus: expect.any(String),
                    })
                );
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Retrieve a Missing Response', (done) => {
    gsma.InternationalTransfer({
        type: 'viewResponse',
        clientCorrelationId: 'cc56daf1-b2dd-4553-aeba-43d61d81f5c8',
        onSuccess: (data, headers, status) => {
            try {
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('View Request State	', (done) => {
    gsma.InternationalTransfer({
        type: 'viewRequestState',
        serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: expect.any(String),
                        notificationMethod: expect.any(String),
                    })
                );
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Retrieve a Transaction', (done) => {
    gsma.InternationalTransfer({
        type: 'viewTransaction',
        transactionReference: 'REF-1633678194929',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        transactionReference: expect.any(String),
                        type: expect.any(String),
                        transactionStatus: expect.any(String),
                        amount: expect.any(String),
                        currency: expect.any(String),
                    })
                );
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Perform a Payment Reversal', (done) => {
    gsma.InternationalTransfer({
        type: 'createReversal',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        transactionReference: 'REF-1466171557592',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: expect.any(String),
                    })
                );
                expect(status).toBe(202);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('Request for Quotation', (done) => {
    gsma.InternationalTransfer({
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        type: 'createQuotation',
        data: {
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
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: expect.any(String),
                    })
                );
                expect(status).toBe(202);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});

test('View a Quotation', (done) => {
    gsma.InternationalTransfer({
        type: 'viewQuotation',
        quotationReference: 'REF-1637125420801',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        quotationReference: expect.any(String),
                        creditParty: expect.any(Array),
                        debitParty: expect.any(Array),
                        requestAmount: expect.any(String),
                        requestCurrency: expect.any(String),
                    })
                );
                expect(status).toBe(200);
                done();
            } catch (error) {
                done(error);
            }
        },
        onFailure: (error, status) => {
            try {
                expect(error).toEqual(
                    expect.objectContaining({
                        errorCategory: expect.any(String),
                        errorCode: expect.any(String),
                        errorDescription: expect.any(String),
                        errorParameters: expect.any(Array),
                    })
                );
                expect(status).toBe(400);
                done();
            } catch (error) {
                done(error);
            }
        },
    });
});
