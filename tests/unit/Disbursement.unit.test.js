import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Individual Disbursement', (done) => {
    gsma.Disbursement({
        type: 'createDisbursementTransaction',
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

test('Individual Disbursement using polling', (done) => {
    gsma.Disbursement({
        type: 'createDisbursementTransaction',
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

describe('Bulk Disbursement', () => {
    test('Create a Transaction Batch', (done) => {
        gsma.Disbursement({
            type: 'createBatchTransaction',
            callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            data: {
                transactions: [
                    {
                        type: 'billpay',
                        amount: '200.00',
                        currency: 'RWF',
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
                    },
                    {
                        type: 'billpay',
                        amount: '400.00',
                        currency: 'RWF',
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
                    },
                ],
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
    test('View a Transaction Batch', (done) => {
        gsma.Disbursement({
            type: 'viewBatchTransaction',
            batchId: 'REF-1635833835849',
            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(
                        expect.objectContaining({
                            batchId: expect.any(String),
                            batchStatus: expect.any(String),
                            approvalDate: expect.any(String),
                            completionDate: expect.any(String),
                            creationDate: expect.any(String),
                            modificationDate: expect.any(String),
                            requestDate: expect.any(String),
                            completedCount: expect.any(Number),
                            rejectionCount: expect.any(Number),
                            parsingSuccessCount: expect.any(Number),
                            processingFlag: expect.any(Boolean),
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

    test('View Batch Completions', (done) => {
        gsma.Disbursement({
            type: 'viewBatchCompletions',
            batchId: 'REF-1635833835849',
            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(expect.any(Array));
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

    test('View Batch Completions', (done) => {
        gsma.Disbursement({
            type: 'viewBatchRejections',
            batchId: 'REF-1635833835849',
            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(expect.any(Array));
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

describe('Bulk Disbursement with Maker / Checker', () => {
    test('Update a Transaction Batch', (done) => {
        gsma.Disbursement({
            type: 'updateBatchTransaction',
            batchId: 'REF-1635833835849',
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
});

test('view Account Balance', (done) => {
    gsma.Disbursement({
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
    gsma.Disbursement({
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
    gsma.Disbursement({
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
    gsma.Disbursement({
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
    gsma.Disbursement({
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
    gsma.Disbursement({
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
    gsma.Disbursement({
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
