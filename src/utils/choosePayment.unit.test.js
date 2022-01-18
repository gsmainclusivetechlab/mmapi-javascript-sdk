import choosePayment from './choosePayment';
import MerchantPayments from '../modules/MerchantPayments';

console.error = jest.fn();
beforeEach(() => {
    // Clear mock (all calls etc) before each test.
    console.error.mockClear();
});
afterAll(() => {
    // Restore mock after all tests are done, so it won't affect other test suites
    console.error.mockRestore();
});
test('Testing choose payment without onSuccess and OnFailure callback functions', () => {
    choosePayment(MerchantPayments)();
    expect(console.error).toHaveBeenCalledTimes(1);
});

test('Testing choose payment with type not specified', () => {
    let onSuccess = jest.fn(() => {});
    let onFailure = jest.fn(() => {});
    choosePayment(MerchantPayments)({ onSuccess, onFailure });
    expect(console.error).toHaveBeenCalledTimes(0);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFailure.mock.calls[0][0]).toEqual({
        errorCategory: 'validation',
        errorCode: 'typeError',
        errorDescription: 'Invalid Payment Type ',
        errorParameters: [
            {
                key: 'type',
                value: undefined,
            },
        ],
    });
});

jest.mock('axios', () => {
    const ax = jest.requireActual('axios');
    return {
        __esModule: true,
        ...ax,
        default: {
            create: () => () => {
                return Promise.resolve({
                    data: { serviceStatus: 'available' },
                    headers: {},
                    status: 200,
                });
            },
            // create: () => () => {
            //     return Promise.reject({
            //         response: {
            //             data: {},
            //             status: 400,
            //         },
            //     });
            // },
        },
    };
});

test('Testing choose payment with type', (done) => {
    function onSuccess(res, headers, status) {
        try {
            expect(res).toEqual({ serviceStatus: 'available' });
            expect(headers).toEqual({});
            expect(status).toEqual(200);
            done();
        } catch (error) {
            done(error);
        }
    }

    function onFailure(res, status) {
        try {
            expect(status).toEqual(400);
            done();
        } catch (error) {
            done(error);
        }
    }
    choosePayment(MerchantPayments)({
        onSuccess,
        onFailure,
        type: 'viewServiceAvailability',
    });
});
