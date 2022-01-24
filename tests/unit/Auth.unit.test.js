import {} from '../../src';

// Test for basic auth
jest.mock('axios', () => {
    const ax = jest.requireActual('axios');
    return {
        __esModule: true,
        ...ax,
        default: {
            create: () => (reqConfig) => {
                expect(reqConfig).toEquals(
                    expect.objectContaning({
                        Authorization: expect.stringMatching(
                            'Bearer NTl2dGhtcTNmNmkxNXY2am1janNrZmttaDplZjh0bDRnaWhscGZkN3I4anBjMXQxbmRhMzNxNWtjbm4zMmNqMzc1bHE2bWcybnY3cmI='
                        ),
                    })
                );
            },
        },
    };
});
test('Testing Authentication for GSMA sdk with init function calls', (done) => {
    window.gsma.initBasicAuth(
        '59vthmq3f6i15v6jmcjskfkmh', //consumer key
        'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb', //consumer secret key
        'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback' // global callbackUrl
    );
    done();
    expect(window.gsma.auth).toEqual(
        expect.objectContaining({
            MerchantPayment: expect.anything(),
            Disbursement: expect.anything(),
            InternationalTransfer: expect.anything(),
            P2PTransfer: expect.anything(),
            RecurringPayment: expect.anything(),
            AccountLinking: expect.anything(),
            BillPayment: expect.anything(),
            AgentService: expect.anything(),
        })
    );
});

// Test for standard auth
jest.mock('axios', () => {
    const ax = jest.requireActual('axios');
    return {
        __esModule: true,
        ...ax,
        default: {
            create: () => (reqConfig) => {
                return Promise.resolve({ data: reqConfig, status: 200 });
            },
            post: () => {
                return Promise.resolve({
                    data: {
                        access_token:
                            'eyJraWQiOiJcL0V4YXNlMmpqdkVtcUtLNTdmNEwyMkUyUUx2MDhndkFqTGlZVHl3bFhzUT0iLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiI1OXZ0aG1xM2Y2aTE1djZqbWNqc2tma21oIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvYXV0aFwvcmVhZCIsImF1dGhfdGltZSI6MTY0MjUyMjM0MSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfTWJqdUR6cUJjIiwiZXhwIjoxNjQyNTI1OTQxLCJpYXQiOjE2NDI1MjIzNDEsInZlcnNpb24iOjIsImp0aSI6ImEyYmVmYzM5LTIzZDItNDQzMS1iYjU3LWI1NTE1MWU0ZTdlNyIsImNsaWVudF9pZCI6IjU5dnRobXEzZjZpMTV2NmptY2pza2ZrbWgifQ.AmV14r_T6mnVHJQzQBERLjqCFo4q3yn3jSe3b5cck4UA2P7vsvVUCfmb13cWX6yJCP9C97LET0xP6V2tx8ELD4yIoe5_qsuxUBhe4L_7KDFACCyPgmhCquns3IundCUID8mrLkwzzWCceY3e4tFhmTXBtSZDf_bkUt7qmFsWBowqym5K8LL1rlHPQJkw7uNu2t7RDqyxvg4Zg-LusdNX2mhhlS1acjKd82fPIrqNu8zSA2K-N6wpclfdIk8V7QtJ8sqkon2PjvQ7egYl57PiAPGMAV1oDMRibkCDQ0g9sckeQI14YF_PpQ4DeENCmVeMC_S-hoTfbwyRm5N-WZgtwQ',
                    },
                });
            },
        },
    };
});
test('Testing Authentication for GSMA sdk with init function calls', (done) => {
    window.gsma.initStandardAuth({
        username: '59vthmq3f6i15v6jmcjskfkmh', //consumer key
        pass: 'ef8tl4gihlpfd7r8jpc1t1nda33q5kcnn32cj375lq6mg2nv7rb', //consumer secret key
        callbackUrl:
            'https://b23014ff-efaa-45ee-8518-4c1d34c71940.mock.pstmn.io/callback', // global callbackUrl,
        apiKey: 'oVN89kXyTx1cKT3ZohH7h6foEmQmjqQm3OK2U8Ue',
        onSuccess: () => {
            expect(window.gsma.auth).toEqual(
                expect.objectContaining({
                    MerchantPayment: expect.any(jest.fn()),
                    Disbursement: expect.any(jest.fn()),
                    InternationalTransfer: expect.any(jest.fn()),
                    P2PTransfer: expect.any(jest.fn()),
                    RecurringPayment: expect.any(jest.fn()),
                    AccountLinking: expect.any(jest.fn()),
                    BillPayment: expect.any(jest.fn()),
                    AgentService: expect.any(jest.fn()),
                })
            );
            done();
        },
        onFailure: () => {
            done();
        },
    });
});

// Test for No Auth
test('Testing Authentication for GSMA sdk with no auth', () => {
    expect(window.gsma.noAuth).toEqual(
        expect.objectContaining({
            MerchantPayment: expect.anything(),
            Disbursement: expect.anything(),
            InternationalTransfer: expect.anything(),
            P2PTransfer: expect.anything(),
            RecurringPayment: expect.anything(),
            AccountLinking: expect.anything(),
            BillPayment: expect.anything(),
            AgentService: expect.anything(),
        })
    );
});
