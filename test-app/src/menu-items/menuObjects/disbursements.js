const disbursements = [
  {
    id: "createDisbursementTransaction",
    title: "Individual Disbursement",
    type: "item",
    requestType: "createDisbursementTransaction",
    requestCategory: "Disbursement",
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
    id: "individualDisbursementFailure",
    title: "Individual Disbursement Failure",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "Disbursement",
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
    id: "createBatchTransaction",
    title: "Bulk Disbursement",
    type: "item",
    requestType: "createBatchTransaction",
    requestCategory: "Disbursement",
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
            transactions: [
              {
                type: "billpay",
                amount: "200.00",
                currency: "RWF",
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
              },
              {
                type: "billpay",
                amount: "400.00",
                currency: "RWF",
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
    id: "bulkDisbursementFailure",
    title: "Bulk Disbursement Failure",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "Disbursement",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "50b3329c-2da3-4bd1-b32f-73e77720c79f",
      },
    ],
    params: [],
  },
  {
    id: "viewBatchTransaction",
    title: "Bulk Disbursement Status",
    type: "item",
    requestType: "viewBatchTransaction",
    requestCategory: "Disbursement",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "batchId",
        required: true,
        caption: "Batch ID",
        type: "string",
        defaultValue: "REF-1635833835849",
      },
    ],
    params: [],
  },
  {
    id: "viewBatchCompletions",
    title: "Bulk Disbursement Completed",
    type: "item",
    requestType: "viewBatchCompletions",
    requestCategory: "Disbursement",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "batchId",
        required: true,
        caption: "Batch ID",
        type: "string",
        defaultValue: "REF-1635833835849",
      },
    ],
    params: [],
  },
  {
    id: "viewBatchRejections",
    title: "Bulk Disbursement Rejected",
    type: "item",
    requestType: "viewBatchRejections",
    requestCategory: "Disbursement",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "batchId",
        required: true,
        caption: "Batch ID",
        type: "string",
        defaultValue: "REF-1635833835849",
      },
    ],
    params: [],
  },
  {
    id: "updateBatchTransaction",
    title: "Bulk Disbursement Approval",
    type: "item",
    requestType: "updateBatchTransaction",
    requestCategory: "Disbursement",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "batchId",
        required: true,
        caption: "Batch ID",
        type: "string",
        defaultValue: "REF-1635833835849",
      },
    ],
    params: [],
  },
  {
    id: "individualDisbursementUsingPollingMethod",
    title: "Individual Disbursement Using the Polling Method",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "Disbursement",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "8b7c5b72-3844-41ea-9d63-61cf9b5f83a1",
      },
    ],
    params: [],
  },
  {
    id: "disbursementReversal",
    title: "Disbursement Reversal",
    type: "item",
    requestType: "createReversal",
    requestCategory: "Disbursement",
    target: true,
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
    params: [],
  },
  {
    id: "disbursementBalance",
    title: "Obtain a Disbursement Organisation Balance",
    type: "item",
    requestType: "viewAccountBalance",
    requestCategory: "Disbursement",
    target: true,
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
    id: "disbursementRetrieve",
    title: "Retrieve Payments for a Disbursement Organisation",
    type: "item",
    requestType: "viewAccountTransactions",
    requestCategory: "Disbursement",
    target: true,
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

export default disbursements;
