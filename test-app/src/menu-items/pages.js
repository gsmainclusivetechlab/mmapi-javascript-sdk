// assets
import {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
} from "@tabler/icons";

// constant
const icons = {
  IconKey,
  IconReceipt2,
  IconBug,
  IconBellRinging,
  IconPhoneCall,
};

// ===========================|| EXTRA PAGES MENU ITEMS ||=========================== //

const pages = {
  id: "pages",
  title: "Pages",
  caption: "",
  type: "group",
  children: [
    {
      id: "common",
      title: "Common",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "heartbeat",
          title: "Check for Service Availability",
          type: "item",
          requestType: "viewServiceAvailability",
          requestCategory: "MerchantPayment",
          polling: false,
          target: true,
          returnClientCorrelation: false,
          headers: [],
          params: [],
        },
        {
          id: "requests",
          title: "Retrieve a Missing API Request",
          type: "item",
          requestType: "viewResponse",
          requestCategory: "MerchantPayment",
          target: true,
          polling: false,
          returnClientCorrelation: false,
          headers: [
            {
              id: "clientCorrelationId",
              required: false,
              caption: "X-Correlation-ID / UUID",
              type: "string",
              defaultValue: "cc56daf1-b2dd-4553-aeba-43d61d81f5c8",
            },
          ],
          params: [],
        },
        {
          id: "responses",
          title: "Retrieve a Missing API Response",
          type: "item",
          requestType: "viewTransaction",
          requestCategory: "MerchantPayment",
          target: true,
          polling: false,
          returnClientCorrelation: false,
          headers: [
            {
              id: "transactionReference",
              required: false,
              caption: "Transaction Reference",
              type: "string",
              defaultValue: "REF-1633678194929",
            },
          ],
          params: [],
        },
      ],
    },
    {
      id: "merchantpay",
      title: "Merchant Payments",
      type: "collapse",
      icon: icons.IconKey,
      children: [
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
      ],
    },
    {
      id: "disbursement",
      title: "Disbursements",
      type: "collapse",
      icon: icons.IconKey,
      children: [
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
      ],
    },
    {
      id: "international",
      title: "International Transfers",
      type: "collapse",
      icon: icons.IconKey,
      children: [
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
      ],
    },
    {
      id: "p2p",
      title: "P2P Transfers",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "p2pAccountName",
          title: "Get P2P Account Name",
          type: "item",
          requestType: "viewAccountName",
          requestCategory: "P2PTransfer",
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
          id: "p2pRequestQuotation",
          title: "Request a P2P Quotation",
          type: "item",
          requestType: "createQuotation",
          requestCategory: "P2PTransfer",
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
          id: "p2ptransfer",
          title: "P2P Transfer",
          type: "item",
          requestType: "createTransferTransaction",
          requestCategory: "P2PTransfer",
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
          id: "p2pTransferFailure",
          title: "P2P Transfer Failure",
          type: "item",
          requestType: "viewRequestState",
          requestCategory: "P2PTransfer",
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
          id: "p2pReversal",
          title: "P2P Transfer Reversal",
          type: "item",
          requestType: "createReversal",
          requestCategory: "P2PTransfer",
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
              defaultValue: "REF-1636699885176",
            },
          ],
          params: [],
        },
        {
          id: "p2pFSPBalance",
          title: "Obtain FSP Balance",
          type: "item",
          requestType: "viewAccountBalance",
          requestCategory: "P2PTransfer",
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
          id: "p2pFSPRetrieve",
          title: "Retrieve Transactions for an FSP",
          type: "item",
          requestType: "viewAccountTransactions",
          requestCategory: "P2PTransfer",
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
          requestCategory: "P2PTransfer",
          target: true,
          polling: false,
          returnClientCorrelation: false,
          headers: [
            {
              id: "clientCorrelationId",
              required: false,
              caption: "Client Correlation Id",
              type: "string",
              defaultValue: "a409a9d7-76ad-4ea3-b87f-3d282d6bea8f",
            },
          ],
          params: [],
        },
      ],
    },
    {
      id: "recurring",
      title: "Recurring Payments",
      type: "collapse",
      icon: icons.IconKey,
      children: [
        {
          id: "createAccountDebitMandate",
          title: "Create Account Debit Mandate",
          type: "item",
          requestType: "createAccountDebitMandate",
          requestCategory: "RecurringPayment",
          target: true,
          polling: false,
          returnClientCorrelation: false,
          headers: [
            {
              id: "clientCorrelationId",
              required: false,
              caption: "Client Correlation Id",
              type: "string",
              defaultValue: "a409a9d7-76ad-4ea3-b87f-3d282d6bea8f",
            },
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
                  payee: [
                    {
                      key: "accountId",
                      value: "1",
                    },
                  ],
                  startDate: "2018-11-20",
                  requestDate: "2021-11-24T12:44:34.223Z",
                },
                null,
                2
              ),
            },
          ],
        },
        {
          id: "viewAccountDebitMandate",
          title: "Get Account Debit Mandate",
          type: "item",
          requestType: "viewAccountDebitMandate",
          requestCategory: "RecurringPayment",
          target: true,
          polling: false,
          returnClientCorrelation: false,
          headers: [
            {
              id: "clientCorrelationId",
              required: false,
              caption: "Client Correlation Id",
              type: "string",
              defaultValue: "a409a9d7-76ad-4ea3-b87f-3d282d6bea8f",
            },
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
              id: "mandateReference",
              required: true,
              caption: "Mandate Reference",
              type: "string",
              defaultValue: "REF-1637758263349",
            },
          ],
          params: [],
        },
        {
          id: "payeeInitiatedMerchantPayment",
          title: "Create Merchant Transaction",
          type: "item",
          requestType: "createMerchantTransaction",
          requestCategory: "RecurringPayment",
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
          id: "recurringPaymentRefund",
          title: "Recurring Payment Refund",
          type: "item",
          requestType: "createRefundTransaction",
          requestCategory: "RecurringPayment",
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
          id: "recurringPaymentReversal",
          title: "Recurring Payment Reversal",
          type: "item",
          requestType: "createReversal",
          requestCategory: "RecurringPayment",
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
              defaultValue: "REF-1638335834640",
            },
          ],
          params: [],
        },
        {
          id: "recurringPaymentBalance",
          title: "Obtain a Service Provider Balance",
          type: "item",
          requestType: "viewAccountBalance",
          requestCategory: "RecurringPayment",
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
          id: "recurringPaymentRetrieve",
          title: "Retrieve Payments for a Service Provider",
          type: "item",
          requestType: "viewAccountTransactions",
          requestCategory: "RecurringPayment",
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
      ],
    },
    {
      id: "accountLinking",
      title: "Account Linking",
      type: "collapse",
      icon: icons.IconKey,
      children: [
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
      ],
    },
  ],
};
export default pages;