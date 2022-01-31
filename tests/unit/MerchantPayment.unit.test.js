import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Testing Payee-Initiated Merchant Payment', (done) => {
    gsma.MerchantPayment({
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

test('Testing Payee-Initiated Merchant Payment using the Polling Method', (done) => {
    gsma.MerchantPayment({
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
        onSuccess: (data, headers, status) => {
            try {
                expect(data).toEqual(
                    expect.objectContaining({
                        serverCorrelationId: expect.any(String),
                        status: 'pending',
                        notificationMethod: 'polling',
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

describe('Payee-Initiated Merchant Payment using a Pre-authorised Payment Code', () => {
    test('Obtain an Authorisation Code', (done) => {
        gsma.MerchantPayment({
            type: 'createAuthorisationCode',
            accountId: [
                {
                    key: 'accountid',
                    value: '1',
                },
                {
                    key: 'accountid',
                    value: '2000',
                },
            ],
            data: {
                amount: '200.00',
                currency: 'RWF',
                amountType: 'exact',
                codeLifetime: '600',
                holdFundsIndicator: true,
                redemptionAccountIdentifiers: [
                    {
                        key: 'accountid',
                        value: '1',
                    },
                ],
            },
            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(
                        expect.objectContaining({
                            serverCorrelationId: expect.any(String),
                            status: 'pending',
                            notificationMethod: 'polling',
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

    test('View An Authorisation Code', (done) => {
        gsma.MerchantPayment({
            type: 'viewAuthorisationCode',
            accountId: [
                {
                    key: 'accountid',
                    value: '1',
                },
            ],
            authorisationCode: '7006e6d7-d0e4-4cda-9300-8cb42bbf8915',

            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(
                        expect.objectContaining({
                            authorisationCode: expect.any(String),
                            codeState: expect.any(String),
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

    test('Payee-Initiated Merchant Payment using a Pre-authorised Payment Code', (done) => {
        gsma.MerchantPayment({
            type: 'createMerchantTransaction',
            accountId: [
                {
                    key: 'accountid',
                    value: '1',
                },
            ],
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
                oneTimeCode: 'e8f51f4e-c8d6-4b4e-873b-fcdbda22523d',
            },

            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(
                        expect.objectContaining({
                            serverCorrelationId: expect.any(String),
                            status: 'pending',
                            notificationMethod: 'polling',
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
});

test('view Account Balance', (done) => {
    gsma.MerchantPayment({
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
        getClientCorrelationId: (clientCorrelationId) => {
            expect(clientCorrelationId).toEqual(expect.any(String));
        },
    });
});

test('Retrieve a Set of Transactions for an Account', (done) => {
    gsma.MerchantPayment({
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
    gsma.MerchantPayment({
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
    gsma.MerchantPayment({
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

test('View Request State', (done) => {
    gsma.MerchantPayment({
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
    gsma.MerchantPayment({
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

test('Perform a Payment Refund', (done) => {
    gsma.MerchantPayment({
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

test('Perform a Payment Reversal', (done) => {
    gsma.MerchantPayment({
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
