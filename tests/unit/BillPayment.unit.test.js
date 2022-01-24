import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Successful Retrieval of Bills', (done) => {
    gsma.BillPayment({
        type: 'viewAccountBills',
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
                value: '10',
            },
        ],
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.arrayContaining([expect.any(Object)])
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

test('Create a Bill Transaction', (done) => {
    gsma.BillPayment({
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

test('Make a Bill Payment', (done) => {
    gsma.BillPayment({
        type: 'createBillPayment',
        billReference: 'REF-000001',
        callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        data: {
            currency: 'GBP',
            amountPaid: '5.30',
        },
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

test('Make a Bill Payment with Polling', (done) => {
    gsma.BillPayment({
        type: 'createBillPayment',
        billReference: 'REF-000001',
        accountId: [
            {
                key: 'accountid',
                value: '1',
            },
        ],
        data: {
            currency: 'GBP',
            amountPaid: '5.30',
        },
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
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

test('Retrieval of Bill Payments', (done) => {
    gsma.BillPayment({
        type: 'viewBillPayment',
        billReference: 'REF-000001',
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
                value: '10',
            },
        ],
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.arrayContaining([expect.any(Object)])
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

test('view Account Balance', (done) => {
    gsma.BillPayment({
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
    gsma.BillPayment({
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
    gsma.BillPayment({
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
    gsma.BillPayment({
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
    gsma.BillPayment({
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
