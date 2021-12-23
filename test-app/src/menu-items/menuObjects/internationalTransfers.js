const internationalTransfers = [
  {
    id: "intTransferRequestQuotation",
    title: "International Transfer request Quotations",
    type: "item",
    requestType: "createQuotation",
    requestCategory: "InternationalTransfer",
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
            creditParty: [
              {
                key: "accountid",
                value: "2000",
              },
            ],
            debitParty: [
              {
                key: "accountid",
                value: "2999",
              },
            ],
            requestAmount: "75.30",
            requestCurrency: "RWF",
            requestDate: "2018-07-03T11:43:27.405Z",
            type: "inttransfer",
            subType: "abc",
            chosenDeliveryMethod: "agent",
            senderKyc: {
              nationality: "GB",
              dateOfBirth: "1970-07-03T11:43:27.405Z",
              occupation: "Manager",
              employerName: "MFX",
              contactPhone: "+447125588999",
              gender: "m",
              emailAddress: "luke.skywalkeraaabbb@gmail.com",
              birthCountry: "GB",
              idDocument: [
                {
                  idType: "nationalidcard",
                  idNumber: "1234567",
                  issueDate: "2018-07-03T11:43:27.405Z",
                  expiryDate: "2021-07-03T11:43:27.405Z",
                  issuer: "UKPA",
                  issuerPlace: "GB",
                  issuerCountry: "GB",
                  otherIdDescription: "test",
                },
              ],
              postalAddress: {
                country: "GB",
                addressLine1: "111 ABC Street",
                city: "New York",
                stateProvince: "New York",
                postalCode: "ABCD",
              },
              subjectName: {
                title: "Mr",
                firstName: "Luke",
                middleName: "R",
                lastName: "Skywalker",
                fullName: "Luke R Skywalker",
                nativeName: "ABC",
              },
            },
            customData: [
              {
                key: "keytest",
                value: "keyvalue",
              },
            ],
            sendingServiceProviderCountry: "AD",
            originCountry: "AD",
            receivingCountry: "AD",
          },
          null,
          2
        ),
      },
    ],
  },

  {
    id: "intTransferViewQuotation",
    title: "International Transfer View Quotations",
    type: "item",
    requestType: "viewQuotation",
    requestCategory: "InternationalTransfer",
    target: true,
    polling: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "quotationReference",
        required: true,
        caption: "Quotation Reference",
        type: "string",
        defaultValue: "REF-1637125420801",
      },
    ],
    params: [],
  },

  {
    id: "intTransfer",
    title: "International Transfer - Initiate Transfer",
    type: "item",
    requestType: "createInternationalTransaction",
    requestCategory: "InternationalTransfer",
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
            amount: "100.00",
            creditParty: [
              {
                key: "accountid",
                value: "2000",
              },
            ],
            currency: "GBP",
            debitParty: [
              {
                key: "accountid",
                value: "2999",
              },
            ],
            internationalTransferInformation: {
              originCountry: "GB",
              quotationReference: "{{quotationReference}}",
              quoteId: "{{quoteId}}",
              receivingCountry: "RW",
              remittancePurpose: "personal",
              relationshipSender: "none",
              deliveryMethod: "agent",
              sendingServiceProviderCountry: "AD",
            },
            senderKyc: {
              nationality: "GB",
              dateOfBirth: "1970-07-03T11:43:27.405Z",
              occupation: "Manager",
              employerName: "MFX",
              contactPhone: "+447125588999",
              gender: "m",
              emailAddress: "luke.skywalkeraaabbb@gmail.com",
              birthCountry: "GB",
              idDocument: [
                {
                  idType: "nationalidcard",
                  idNumber: "1234567",
                  issueDate: "2018-07-03T11:43:27.405Z",
                  expiryDate: "2021-07-03T11:43:27.405Z",
                  issuer: "UKPA",
                  issuerPlace: "GB",
                  issuerCountry: "GB",
                  otherIdDescription: "test",
                },
              ],
              postalAddress: {
                country: "GB",
                addressLine1: "111 ABC Street",
                city: "New York",
                stateProvince: "New York",
                postalCode: "ABCD",
              },
              subjectName: {
                title: "Mr",
                firstName: "Luke",
                middleName: "R",
                lastName: "Skywalker",
                fullName: "Luke R Skywalker",
                nativeName: "ABC",
              },
            },
            requestingOrganisation: {
              requestingOrganisationIdentifierType: "organisationid",
              requestingOrganisationIdentifier: "testorganisation",
            },
          },
          null,
          2
        ),
      },
    ],
  },
  {
    id: "internationalPollingMethod",
    title: "Check Polling Status",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "InternationalTransfer",
    polling: true,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "a01b2683-3121-4011-80bd-0b8dac41cead",
      },
    ],
    params: [],
  },
  {
    id: "intlTransferFailure",
    title: "International Transfer  Failure",
    type: "item",
    requestType: "viewRequestState",
    requestCategory: "InternationalTransfer",
    polling: false,
    target: true,
    returnClientCorrelation: true,
    headers: [
      {
        id: "serverCorrelationId",
        required: true,
        caption: "Server-Correlation-ID",
        type: "string",
        defaultValue: "214eff26-06e9-4def-83aa-54a2d194f25d",
      },
    ],
    params: [],
  },
  {
    id: "intlReversal",
    title: "International Transfer Reversal",
    type: "item",
    requestType: "createReversal",
    requestCategory: "InternationalTransfer",
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
        defaultValue: "REF-1636692741551",
      },
    ],
    params: [],
  },
  {
    id: "intlFSPBalance",
    title: "Obtain FSP Balance",
    type: "item",
    requestType: "viewAccountBalance",
    requestCategory: "InternationalTransfer",
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
    id: "intlFSPRetrieve",
    title: "Retrieve Transactions for an FSP",
    type: "item",
    requestType: "viewAccountTransactions",
    requestCategory: "InternationalTransfer",
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
    id: "responses",
    title: "Retrieve a Missing API Response",
    type: "item",
    requestType: "viewResponse",
    requestCategory: "InternationalTransfer",
    target: true,
    polling: false,
    returnClientCorrelation: false,
    headers: [
      {
        id: "clientCorrelationId",
        required: false,
        caption: "Client Correlation Id",
        type: "string",
        defaultValue: "e9fc7634-bce6-4aa1-add6-a40cb362a1f4",
      },
    ],
    params: [],
  },
];
export default internationalTransfers;
