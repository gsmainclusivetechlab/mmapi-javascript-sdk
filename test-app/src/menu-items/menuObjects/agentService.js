const agentService = [
  {
    id: "agentServiceinitCashOut",
    title: "Agent-Initiated Cash-Out",
    type: "item",
    requestType: "createWithdrawalTransaction",
    requestCategory: "AgentService",
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
    id: "agentServiceinitCashOutPolling",
    title: "Agent-Initiated Cash-Out using Polling Method",
    type: "item",
    requestType: "createWithdrawalTransaction",
    requestCategory: "AgentService",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [],
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
    id: "agentServiceCustomerinitCashOut",
    title: "Customer-Initiated Cash-Out",
    type: "item",
    requestType: "createWithdrawalTransaction",
    requestCategory: "AgentService",
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
    id: "agentServiceCustomerinitCashOutPolling",
    title: "Customer-Initiated Cash-Out using Polling Method",
    type: "item",
    requestType: "createWithdrawalTransaction",
    requestCategory: "AgentService",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [],
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
    id: "agentServiceCreateAuthCode",
    title: "Customer Cash-out at an ATM - Generate Authorisation Code",
    type: "item",
    requestType: "createAuthorisationCode",
    requestCategory: "AgentService",
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
        id: "body",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            requestDate: "2018-07-03T10:43:27.405Z",
            currency: "GBP",
            amount: "1000.00",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "agentServiceGetAuthCode",
    title: "Customer Cash-out at an ATM - View Authorisation Code",
    type: "item",
    requestType: "viewAuthorisationCode",
    requestCategory: "AgentService",
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
        id: "authorisationCode",
        required: true,
        caption: "Authorisation Code",
        type: "string",
        defaultValue: "059f88cc-c4c8-4e48-9388-0c3abb7b329b",
      },
    ],
    params: [],
  },
  {
    id: "agentServiceGetAccountName",
    title: "Agent-initiated Customer Cash-in - Get Account Name",
    type: "item",
    requestType: "viewAccountName",
    requestCategory: "AgentService",
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
    id: "agentServiceCustomerinitCashInDeposit",
    title: "Agent-initiated Customer Cash-in - Create Deposit Transaction",
    type: "item",
    requestType: "createDepositTransaction",
    requestCategory: "AgentService",
    target: true,
    polling: true,
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
    id: "agentServiceCashoutReversal",
    title: "Cash-out Reversal",
    type: "item",
    requestType: "createReversal",
    requestCategory: "AgentService",
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
        defaultValue: "REF-1640674886743",
      },
    ],
    params: [],
  },
  {
    id: "agentServiceCreateMMAccount",
    title: "Create a Mobile Money Account",
    type: "item",
    requestType: "createAccount",
    requestCategory: "AgentService",
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
        id: "body",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          {
            accountIdentifiers: [
              {
                key: "msisdn",
                value: "+447777777777",
              },
            ],
            identity: [
              {
                identityKyc: {
                  birthCountry: "AD",
                  contactPhone: "+447777777777",
                  dateOfBirth: "2000-11-20",
                  emailAddress: "xyz@xyz.com",
                  employerName: "string",
                  gender: "m",
                  idDocument: [
                    {
                      idType: "passport",
                      idNumber: "111111",
                      issueDate: "2018-11-20",
                      expiryDate: "2018-11-20",
                      issuer: "ABC",
                      issuerPlace: "DEF",
                      issuerCountry: "AD",
                    },
                  ],
                  nationality: "AD",
                  occupation: "Miner",
                  postalAddress: {
                    addressLine1: "37",
                    addressLine2: "ABC Drive",
                    addressLine3: "string",
                    city: "Berlin",
                    stateProvince: "string",
                    postalCode: "AF1234",
                    country: "AD",
                  },
                  subjectName: {
                    title: "Mr",
                    firstName: "H",
                    middleName: "I",
                    lastName: "J",
                    fullName: "H I J",
                    nativeName: "string",
                  },
                },
                accountRelationship: "accountholder",
                kycVerificationStatus: "verified",
                kycVerificationEntity: "ABC Agent",
                kycLevel: 1,
                customData: [
                  {
                    key: "test",
                    value: "custom",
                  },
                ],
              },
            ],
            accountType: "string",
            customData: [
              {
                key: "test",
                value: "custom1",
              },
            ],
            fees: [
              {
                feeType: "string",
                feeAmount: "5.46",
                feeCurrency: "AED",
              },
            ],
            registeringEntity: "ABC Agent",
            requestDate: "2021-02-17T15:41:45.194Z",
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "agentServiceGetAccount",
    title: "View Account",
    type: "item",
    requestType: "viewAccount",
    requestCategory: "AgentService",
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
    params: [],
  },
  {
    id: "agentServiceUpdateAccountIdentity",
    title: "Verify a Customer’s KYC",
    type: "item",
    requestType: "updateAccountIdentity",
    requestCategory: "AgentService",
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
        id: "identityId",
        required: false,
        caption: "Identity ID",
        type: "string",
        defaultValue: "1",
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
        id: "body",
        required: true,
        caption: "JSON Body",
        type: "json",
        defaultValue: JSON.stringify(
          [
            {
              op: "replace",
              path: "/kycVerificationStatus",
              value: "verified",
            },
          ],
          null,
          2
        ),
      },
    ],
  },
  {
    id: "agentServiceAgentBalance",
    title: "Obtain an Agent's Balance",
    type: "item",
    requestType: "viewAccountBalance",
    requestCategory: "AgentService",
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
    id: "agentServiceRetrieve",
    title: "Retrieve Payments for an Agent",
    type: "item",
    requestType: "viewAccountTransactions",
    requestCategory: "AgentService",
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
    id: "agentServiceResponses",
    title: "Retrieve a Missing API Response",
    type: "item",
    requestType: "viewResponse",
    requestCategory: "AgentService",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "clientCorrelationId",
        required: false,
        caption: "Client Correlation Id",
        type: "string",
        defaultValue: "ba5dfdb1-94cb-4dc7-b0b7-f04cb0587a87",
      },
    ],
    params: [],
  },
];
export default agentService;
