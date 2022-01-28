import { moduleWrapperWithoutAuth as gsma } from '../../src/modules';

test('Agent-initiated Cash-out', (done) => {
    gsma.AgentService({
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

describe('Customer Cash-out at an ATM using an Authorisation Code', () => {
    test('Obtain an Authorisation Code', (done) => {
        gsma.AgentService({
            type: 'createAuthorisationCode',
            accountId: [
                {
                    key: 'accountid',
                    value: '1',
                },
            ],
            callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            data: {
                requestDate: '2018-07-03T10:43:27.405Z',
                currency: 'GBP',
                amount: '1000.00',
            },
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

    test('Retrieve Authorisation Code', (done) => {
        gsma.AgentService({
            type: 'viewAuthorisationCode',
            authorisationCode: '059f88cc-c4c8-4e48-9388-0c3abb7b329b',
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
});

describe('Agent-initiated Customer Cash-in', () => {
    test('Retrieve the Name of the Depositing Customer', (done) => {
        gsma.AgentService({
            type: 'viewAccountName',
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

    test('Agent Initiated Cash-in', (done) => {
        gsma.AgentService({
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
});

test('Register a Customer Mobile Money Account', (done) => {
    gsma.AgentService({
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

describe('Verify the KYC of a Customer', () => {
    test('Agent Initiated Cash-in', (done) => {
        gsma.AgentService({
            type: 'viewAccount',
            accountId: [
                {
                    key: 'msisdn',
                    value: '+447777777774',
                },
            ],
            onSuccess: (data, headers, status) => {
                try {
                    expect(data).toEqual(
                        expect.objectContaining({
                            accountIdentifiers: expect.any(Array),
                            identity: expect.any(Array),
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
        });
    });

    test('Update KYC Verification Status', (done) => {
        gsma.AgentService({
            type: 'updateAccountIdentity',
            accountId: [
                {
                    key: 'msisdn',
                    value: '+447777777774',
                },
            ],
            identityId: '1',
            callbackUrl: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            data: [
                {
                    op: 'replace',
                    path: '/kycVerificationStatus',
                    value: 'verified',
                },
            ],
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
});

test('view Account Balance', (done) => {
    gsma.AgentService({
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
    gsma.AgentService({
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
    gsma.AgentService({
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
    gsma.AgentService({
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
    gsma.AgentService({
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
    gsma.AgentService({
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
    gsma.AgentService({
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
