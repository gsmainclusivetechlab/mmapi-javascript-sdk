const billPayments = [
  {
    id: "billPaymentsRetrieveBills",
    title: "Retrieve Bills",
    type: "item",
    requestType: "viewAccountBills",
    requestCategory: "BillPayment",
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
  {
    id: "billPaymentsCreateTransaction",
    title: "Initiate Bill Payment Transaction",
    type: "item",
    requestType: "createBillTransaction",
    requestCategory: "BillPayment",
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
                value: "2999",
              },
            ],
            creditParty: [
              {
                key: "accountid",
                value: "2999",
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
    id: "billPaymentsCreatePaymentCallback",
    title: "Bill Payment with Callback",
    type: "item",
    requestType: "createBillPayment",
    requestCategory: "BillPayment",
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
      {
        id: "billReference",
        required: false,
        caption: "Bill Payment Reference",
        type: "string",
        defaultValue: "REF-000001",
      },
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
    params: [
      {
        id: "data",
        required: true,
        caption: "Data",
        type: "json",
        defaultValue: JSON.stringify(
          { currency: "GBP", amountPaid: "5.30" },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "billPaymentsCreatePaymentPolling",
    title: "Bill Payment with Polling",
    type: "item",
    requestType: "createBillPayment",
    requestCategory: "BillPayment",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "billReference",
        required: false,
        caption: "Bill Payment Reference",
        type: "string",
        defaultValue: "REF-000001",
      },
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
    params: [
      {
        id: "data",
        required: true,
        caption: "Data",
        type: "json",
        defaultValue: JSON.stringify(
          { currency: "GBP", amountPaid: "5.30" },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "billPaymentsViewPayments",
    title: "View Bill Payments",
    type: "item",
    requestType: "viewBillPayment",
    requestCategory: "BillPayment",
    target: true,
    polling: false,
    returnClientCorrelation: true,
    headers: [
      {
        id: "billReference",
        required: false,
        caption: "Bill Payment Reference",
        type: "string",
        defaultValue: "REF-000001",
      },
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
export default billPayments;
