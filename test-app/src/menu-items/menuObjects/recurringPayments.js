const recurringPayments = [
    {
        id: 'createAccountDebitMandate',
        title: 'Create Account Debit Mandate',
        type: 'item',
        requestType: 'createAccountDebitMandate',
        requestCategory: 'RecurringPayment',
        target: true,
        polling: false,
        returnClientCorrelation: false,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [
            {
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
                        payee: [
                            {
                                key: 'accountId',
                                value: '1',
                            },
                        ],
                        startDate: '2018-11-20',
                        requestDate: '2021-11-24T12:44:34.223Z',
                    },
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'viewAccountDebitMandate',
        title: 'Get Account Debit Mandate',
        type: 'item',
        requestType: 'viewAccountDebitMandate',
        requestCategory: 'RecurringPayment',
        target: true,
        polling: false,
        returnClientCorrelation: false,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
            {
                id: 'mandateReference',
                required: true,
                caption: 'Mandate Reference',
                type: 'string',
                defaultValue: 'REF-1637758263349',
            },
        ],
        params: [],
        testSuccessParams: ['startDate', 'mandateReference'],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'payeeInitiatedMerchantPayment',
        title: 'Create Merchant Transaction',
        type: 'item',
        requestType: 'createMerchantTransaction',
        requestCategory: 'RecurringPayment',
        target: true,
        polling: false,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
        ],
        params: [
            {
                id: 'body',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
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
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'recurringPaymentRefund',
        title: 'Recurring Payment Refund',
        type: 'item',
        requestType: 'createRefundTransaction',
        requestCategory: 'RecurringPayment',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
        ],
        params: [
            {
                id: 'data',
                required: true,
                caption: 'JSON Body',
                type: 'json',
                defaultValue: JSON.stringify(
                    {
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
                    null,
                    2
                ),
            },
        ],
        testSuccessParams: [
            'serverCorrelationId',
            'status',
            'notificationMethod',
        ],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'recurringPaymentReversal',
        title: 'Recurring Payment Reversal',
        type: 'item',
        requestType: 'createReversal',
        requestCategory: 'RecurringPayment',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'callbackUrl',
                required: false,
                caption: 'X-Callback-URL',
                type: 'string',
                defaultValue: 'https://end13wxm5t7fgd6.m.pipedream.net/',
            },
            {
                id: 'transactionReference',
                required: false,
                caption: 'Transaction Reference',
                type: 'string',
                defaultValue: 'REF-1638335834640',
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
        id: 'recurringPaymentBalance',
        title: 'Obtain a Service Provider Balance',
        type: 'item',
        requestType: 'viewAccountBalance',
        requestCategory: 'RecurringPayment',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
    {
        id: 'recurringPaymentRetrieve',
        title: 'Retrieve Payments for a Service Provider',
        type: 'item',
        requestType: 'viewAccountTransaction',
        requestCategory: 'RecurringPayment',
        target: true,
        returnClientCorrelation: true,
        headers: [
            {
                id: 'accountId',
                required: true,
                caption: 'Account ID',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'accountid',
                            value: '1',
                        },
                    ],
                    null,
                    2
                ),
            },
            {
                id: 'filter',
                required: true,
                caption: 'Filter',
                type: 'json',
                defaultValue: JSON.stringify(
                    [
                        {
                            key: 'offset',
                            value: '0',
                        },
                        {
                            key: 'limit',
                            value: '10',
                        },
                    ],
                    null,
                    2
                ),
            },
        ],
        params: [],
        testSuccessParams: [],
        testErrorParams: ['errorCategory', 'errorCode'],
    },
];
export default recurringPayments;
