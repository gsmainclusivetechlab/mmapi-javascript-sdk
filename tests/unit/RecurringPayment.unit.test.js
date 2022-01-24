import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Setup a Recurring Payment', (done) => {
    gsma.RecurringPayment({
        type: 'createAccountDebitMandate',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        data: {
            payee: [
                {
                    key: 'accountId',
                    value: '1',
                },
            ],
            startDate: '2018-11-20',
            requestDate: '2021-11-24T12:44:34.223Z',
        },
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'completed',
                        notificationMethod: 'polling',
                        objectReference: expect.any(String),
                        pollLimit: expect.any(Number),
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
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});

test('Retrieve a Debit Mandate', (done) => {
    gsma.RecurringPayment({
        type: 'viewAccountDebitMandate',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        mandateReference: 'REF-1637758263349',

        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        startDate: expect.any(String),
                        numberOfPayments: expect.any(Number),
                        mandateStatus: expect.any(String),
                        requestDate: expect.any(String),
                        mandateReference: expect.any(String),
                        creationDate: expect.any(String),
                        modificationDate: expect.any(String),
                        payee: expect.any(Array),
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
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});

test('Take a Recurring Payment', (done) => {
    gsma.RecurringPayment({
        type: 'createMerchantTransaction',
        data: {
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
        callbackUrl:
            'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'callback',
                        objectReference: expect.any(String),
                        pollLimit: expect.any(Number),
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
    gsma.RecurringPayment({
        type: 'viewAccountBalance',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        currentBalance: expect.any(String),
                        availableBalance: expect.any(String),
                        reservedBalance: expect.any(String),
                        unclearedBalance: expect.any(String),
                        currency: expect.any(String),
                        accountStatus: expect.any(String),
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
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});

test('Retrieve a Set of Transactions for an Account', (done) => {
    gsma.RecurringPayment({
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
                expect(data).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            transactionReference: expect.any(String),
                            type: expect.any(String),
                            transactionStatus: expect.any(String),
                            amount: expect.any(String),
                            currency: expect.any(String),
                        }),
                    ])
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

test('Check for Service Availability', (done) => {
    gsma.RecurringPayment({
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
    gsma.RecurringPayment({
        type: 'viewResponse',
        clientCorrelationId: 'cc56daf1-b2dd-4553-aeba-43d61d81f5c8',
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

test('View Request State	', (done) => {
    gsma.RecurringPayment({
        type: 'viewRequestState',
        serverCorrelationId: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: expect.any(String),
                        notificationMethod: expect.any(String),
                        objectReference: expect.any(String),
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
    gsma.RecurringPayment({
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
    gsma.RecurringPayment({
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
                        objectReference: expect.any(String),
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

test('Perform a Payment Refund', (done) => {
    gsma.RecurringPayment({
        type: 'createRefundTransaction',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        data: {
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
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: expect.any(String),
                        objectReference: expect.any(String),
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
