import checkForExistingType from './checkPaymentType';
import MerchantPayments from '../modules/MerchantPayments';

describe('Testing checkPaymentType', () => {
    test('Test for creating a request when :type is specified', () => {
        let paymentObjectExpectToBeNull =
            checkForExistingType(MerchantPayments);
        expect(paymentObjectExpectToBeNull).toBe(null);
    });

    test('Testing failure when missing expected parameters', () => {
        const mockCallbackonFailure = jest.fn(() => {});
        checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            null,
            mockCallbackonFailure
        );
        expect(mockCallbackonFailure).toHaveBeenCalledTimes(1);
        expect(mockCallbackonFailure.mock.calls[0][0]).toEqual({
            errorCategory: 'validation',
            errorCode: 'MandatoryValueNotSupplied',
            errorDescription:
                'A mandatory value has not been provided in the header and/or JSON body.',
            errorParameters: [{ key: 'data', value: '' }],
        });
        expect(mockCallbackonFailure.mock.calls[0][1]).toBe(400);
    });

    test('Testing success on passing all required params', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            { data: {} }
        );
        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                url: expect.any(String),
                headers: expect.any(Object),
                data: expect.any(Object),
                method: expect.stringMatching('post'),
            })
        );
    });

    test('Testing notification method with callback', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            {
                data: {},
                callbackUrl: 'sample/url',
            }
        );
        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Callback-URL': expect.stringMatching('sample/url'),
                }),
            })
        );
    });

    test('Testing notification method with global callback and indvidual callback', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            {
                data: {},
                callbackUrl: 'sample/url',
            },
            () => {},
            () => {},
            'sample/globalcallback'
        );
        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Callback-URL': expect.stringMatching('sample/url'),
                }),
            })
        );
    });

    test('Testing notification method with global callback only', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            {
                data: {},
            },
            () => {},
            () => {},
            'sample/globalcallback'
        );
        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                headers: expect.objectContaining({
                    'X-Callback-URL': expect.stringMatching(
                        'sample/globalcallback'
                    ),
                }),
            })
        );
    });

    test('Testing notification method with polling', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            {
                data: {},
                callbackUrl: 'sample/url',
                notificationMethod: 'polling',
            }
        );

        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                headers: expect.not.objectContaining({
                    'X-Callback-URL': expect.any(String),
                }),
            })
        );
    });

    test('Testing notification method with polling when global callback is set', () => {
        let createdRequestConfig = checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            {
                data: {},
                notificationMethod: 'polling',
            },
            () => {},
            () => {},
            'sample/globalcallback'
        );

        expect(createdRequestConfig).toEqual(
            expect.objectContaining({
                headers: expect.not.objectContaining({
                    'X-Callback-URL': expect.any(String),
                }),
            })
        );
    });

    test('Tesing to get new corelation id', () => {
        const mokeFunctionToGetCorilationId = jest.fn(() => {});
        checkForExistingType(
            MerchantPayments,
            'createMerchantTransaction',
            null,
            () => {},
            mokeFunctionToGetCorilationId
        );
        expect(mokeFunctionToGetCorilationId).toHaveBeenCalledTimes(1);
        expect(mokeFunctionToGetCorilationId.mock.calls[0][0]).toEqual(
            expect.any(String)
        );
    });
});
