const common = [
    {
        id: 'heartbeat',
        title: 'Check for Service Availability',
        type: 'item',
        requestType: 'viewServiceAvailability',
        requestCategory: 'MerchantPayment',
        polling: false,
        target: true,
        returnClientCorrelation: false,
        headers: [],
        params: [],
        testSuccessParams: ['serviceStatus'],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'requests',
        title: 'Retrieve a Missing API Request',
        type: 'item',
        requestType: 'viewResponse',
        requestCategory: 'MerchantPayment',
        target: true,
        polling: false,
        returnClientCorrelation: false,
        headers: [
            {
                id: 'clientCorrelationId',
                required: false,
                caption: 'X-Correlation-ID / UUID',
                type: 'string',
                defaultValue: 'cc56daf1-b2dd-4553-aeba-43d61d81f5c8',
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'payerInitiatedMerchantPaymentFailure',
        title: 'View Request State',
        type: 'item',
        requestType: 'viewRequestState',
        requestCategory: 'MerchantPayment',
        polling: false,
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'serverCorrelationId',
                required: true,
                caption: 'Server-Correlation-ID',
                type: 'string',
                defaultValue: 'db474b5c-cc9d-4173-b1b0-8ac06cb20e7c',
            },
        ],
        params: [],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'responses',
        title: 'Retrieve a Transactions',
        type: 'item',
        requestType: 'viewTransaction',
        requestCategory: 'MerchantPayment',
        target: true,
        polling: false,
        returnClientCorrelation: false,
        headers: [
            {
                id: 'transactionReference',
                required: false,
                caption: 'Transaction Reference',
                type: 'string',
                defaultValue: 'REF-1633678194929',
            },
        ],
        params: [],
        testSuccessParams: [
            'transactionReference',
            'type',
            'transactionStatus',
            'amount',
            'currency',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
];

export default common;