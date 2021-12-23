const accountLinking = [
  {
    id: "createAccountLink",
    title: "Setup an Account Link",
    type: "item",
    requestType: "createAccountLink",
    requestCategory: "AccountLinking",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
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
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            sourceAccountIdentifiers: [
              {
                key: "accountid",
                value: "2999",
              },
            ],
            status: "active",
            mode: "both",
            customData: [
              {
                key: "keytest",
                value: "keyvalue",
              },
            ],
            requestingOrganisation: {
              requestingOrganisationIdentifierType: "organisationid",
              requestingOrganisationIdentifier: "12345",
            },
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "viewAccountLink",
    title: "Get Account Linking Status",
    type: "item",
    requestType: "viewAccountLink",
    requestCategory: "AccountLinking",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "callbackUrl",
        required: false,
        caption: "X-Callback-URL",
        type: "string",
        defaultValue: "https://end13wxm5t7fgd6.m.pipedream.net/",
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
        id: "linkReference",
        required: true,
        caption: "Link Reference",
        type: "string",
        defaultValue: "REF-1638168563421",
      },
    ],
    params: [],
  },
  {
    id: "linkedAccountTransfer",
    title: "Transfer to Linked Account",
    type: "item",
    requestType: "createTransferTransaction",
    requestCategory: "AccountLinking",
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
            creditParty: [
              {
                key: "linkref",
                value: "REF-1638168563421",
              },
            ],
            currency: "RWF",
            debitParty: [
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
    id: "linkedAccountTransferByPolling",
    title: "Transfer to Linked Account by Polling Method",
    type: "item",
    requestType: "createTransferTransaction",
    requestCategory: "AccountLinking",
    polling: true,
    target: true,
    returnClientCorrelation: true,
    headers: [],
    params: [
      {
        id: "data",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            amount: "200.00",
            creditParty: [
              {
                key: "linkref",
                value: "REF-1638168563421",
              },
            ],
            currency: "RWF",
            debitParty: [
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
    id: "linkedAccountTransferReversal",
    title: "Transfer to Linked Account Reversal",
    type: "item",
    requestType: "createReversal",
    requestCategory: "AccountLinking",
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
        defaultValue: "REF-1638178338614",
      },
    ],
    params: [],
  },
  {
    id: "linkedAccountFSPBalance",
    title: "Obtain FSP Balance",
    type: "item",
    requestType: "viewAccountBalance",
    requestCategory: "AccountLinking",
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
    id: "linkedAccountFSPRetrieve",
    title: "Retrieve Transactions for an FSP",
    type: "item",
    requestType: "viewAccountTransactions",
    requestCategory: "AccountLinking",
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
  {
    id: "linkedAccountresponses",
    title: "Retrieve a Missing API Response",
    type: "item",
    requestType: "viewResponse",
    requestCategory: "AccountLinking",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "clientCorrelationId",
        required: false,
        caption: "Client Correlation Id",
        type: "string",
        defaultValue: "58099533-ab33-4733-8ecb-bda85d86b223",
      },
    ],
    params: [],
  },
];
export default accountLinking;
