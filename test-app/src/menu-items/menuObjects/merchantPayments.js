const merchantPay = [
  {
    id: "payeeInitiatedMerchantPayment",
    title: "Payee-Initiated Merchant Payment",
    type: "item",
    requestType: "createMerchantTransaction",
    requestCategory: "MerchantPayment",
    target: true,
    polling: false,

    returnClientCorrelation: true,
    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
    ],
    params: [
      {
        id: "body",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            debitParty: [
              {
                key: "accountid",
                value: "1",
              },
            ],
            creditParty: [
              {
                key: "accountid",
                value: "30",
              },
            ],
            currency: "RWF",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "payeeInitiatedMerchantPaymentFailure",
    title: "Payee-Initiated Merchant Payment Failure",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "MerchantPayment",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
      },
    ],
    params: [],
  },
  {
    id: "payeeInitiatedMerchantPaymentPollingMethod",
    title: "Payee-Initiated Merchant Payment using Polling Method",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "MerchantPayment",
    polling: true,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "67ef4cf3-e963-4a81-b488-1eb1a3bb85c9",
      },
    ],
    params: [],
  },
  {
    id: "payeeInitiatedMerchantPaymentGeneratePreAuthCode",
    title:
      "Payee-Initiated Merchant Payment Generate Pre-authorised Payment Code",
    type: "item",
    requestType: "createAuthorisationCode",
    requestCategory: "MerchantPayment",
    target: true,
    polling: false,

    returnClientCorrelation: true,
    headers: [
      {
        id: "accountId",
        required: true,
        caption: "Account ID",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "accountid",
              value: "1",
            },
          ],
          null,
          2
        ),
      },
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
    ],
    params: [
      {
        id: "data",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            currency: "RWF",
            amountType: "exact",
            codeLifetime: "600",
            holdFundsIndicator: true,
            redemptionAccountIdentifiers: [
              {
                key: "accountid",
                value: "1",
              },
            ],
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "payeeInitiatedMerchantPaymentGetPreAuthCode",
    title: "View Authorisation Code",
    type: "item",
    requestType: "viewAuthorisationCode",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "accountId",
        required: true,
        caption: "Account ID",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "accountid",
              value: "1",
            },
          ],
          null,
          2
        ),
      },
      {
        id: "authorisationCode",
        required: true,
        caption: "Authorisation Code",
        type: "string",
        defaultValue: "7006e6d7-d0e4-4cda-9300-8cb42bbf8915",
      },
    ],
    params: [],
  },
  {
    id: "payeeInitiatedMerchantPaymentPreAuthCode",
    title:
      "Payee-Initiated Merchant Payment using a Pre-authorised Payment Code",
    type: "item",
    requestType: "createMerchantTransaction",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "accountId",
        required: true,
        caption: "Account ID",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "accountid",
              value: "1",
            },
          ],
          null,
          2
        ),
      },
      {
        id: "data",
        required: true,
        caption: "CodeState",
        type: "string",
        defaultValue: "active",
      },
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
    ],
    params: [
      {
        id: "data",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            debitParty: [
              {
                key: "accountid",
                value: "1",
              },
            ],
            creditParty: [
              {
                key: "accountid",
                value: "30",
              },
            ],
            currency: "RWF",
            oneTimeCode: "e8f51f4e-c8d6-4b4e-873b-fcdbda22523d",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "payerInitiatedMerchantPayment",
    title: "Payer-Initiated Merchant Payment",
    type: "item",
    requestType: "createMerchantTransaction",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    polling: false,

    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
    ],
    params: [
      {
        id: "body",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            debitParty: [
              {
                key: "accountid",
                value: "1",
              },
            ],
            creditParty: [
              {
                key: "accountid",
                value: "30",
              },
            ],
            currency: "RWF",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "payerInitiatedMerchantPaymentFailure",
    title: "Payer-Initiated Merchant Payment Failure",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "MerchantPayment",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
      },
    ],
    params: [],
  },
  {
    id: "merchantPaymentRefund",
    title: "Merchant Payment Refund",
    type: "item",
    requestType: "createRefundTransaction",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
    ],
    params: [
      {
        id: "data",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            debitParty: [
              {
                key: "accountid",
                value: "1",
              },
            ],
            creditParty: [
              {
                key: "accountid",
                value: "30",
              },
            ],
            currency: "RWF",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "merchantPaymentReversal",
    title: "Merchant Payment Reversal",
    type: "item",
    requestType: "createReversal",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
      },
      {
        id: "transactionReference",
        required: false,
        caption: "Transaction Reference",
        type: "string",
        defaultValue: "REF-1466171557592",
      },
    ],
    params: [
      {
        id: "data",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            transactionReference: "REF-1466171557592",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "merchantPaymentBalance",
    title: "Obtain a Merchant Balance",
    type: "item",
    requestType: "viewAccountBalance",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "accountId",
        required: true,
        caption: "Account ID",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "accountid",
              value: "1",
            },
          ],
          null,
          2
        ),
      },
    ],
    params: [],
  },
  {
    id: "merchantPaymentRetrieve",
    title: "Retrieve Payments for a Merchant",
    type: "item",
    requestType: "viewAccountTransactions",
    requestCategory: "MerchantPayment",
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "accountId",
        required: true,
        caption: "Account ID",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "accountid",
              value: "1",
            },
          ],
          null,
          2
        ),
      },
      {
        id: "filter",
        required: true,
        caption: "Filter",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              key: "offset",
              value: "0",
            },
            {
              key: "limit",
              value: "10",
            },
          ],
          null,
          2
        ),
      },
    ],
    params: [],
  },
];

export default merchantPay;
