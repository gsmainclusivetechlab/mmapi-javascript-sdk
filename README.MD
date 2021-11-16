# MMAPI JavaScript SDK

## Table of Contents

1. [Integrating SDK to your Application](#integration)
2. [Initialization Methods](#initMethods)
3. [Executing Functions](#execution)
4. [Authentication Functions](#authMethods)
   - [Basic Authentication](#basicAuth)
   - [OAuth2 based Authentication](#oauth2)
   - [Executing without Authentication](#noAuth)
   - [Executing after Authentication](#auth)
5. [Payment Modules](#modules)
   - [Merchant Payment Module](#merchantPayment)
   - [Disbursements](#disbursements)
   - [International Transfers](#international)
   - [P2P](#p2p)

<a name="integration"></a>

## Integrating SDK to your Application

Import the SDK script in the head of the client application.

```html
<script src="http://{cdn-url}/mmsdk.min.js"></script>
```

Once Imported, The SDK Modules will be available in the Browser Object Model - window as window.gsma
You can use:

```javascript
console.log(window.gsma);
```

To list all the available modules within the SDK.

<a name="initMethods"></a>

## Initialization Methods

Functions and modules that are available in `window.gsma`

| Function         | Parameters                                   | Utility                                                                                                                                                                                 |
| ---------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initBasicAuth    | username, pass                               | This function is used for basic authentication of MobileMoney SDK                                                                                                                       |
| initStandardAuth | username, pass, apiKey, onSuccess, onFailure | This function is used for OAuth2 based authentication of MobileMoney SDK where access token is handled by SDK.                                                                          |
| noAuth           | -                                            | If the client is not logged in using any of the authentication all the use cases and their respective functions will be available in this module, if they don't require Authentication. |
| auth             | -                                            | If the client is logged in using any of the authentication all the use cases and their respective functions will be available in this module.                                           |

<a name="execution"></a>

## Executing Functions

<a name="authMethods"></a>

### Authentication Functions

Once Authenticated, the client gets access to all functions that require authentication in `window.gsma.auth`
<a name="basicAuth"></a>

#### Basic Authentication

Tou Authenticate using Basic Authentication method, you can use `initBasicAuth()` with Consumer key and Consumer Secret as function Parameters.

```javascript
window.gsma.initBasicAuth(consumerKey, consumerSecret, callbackUrl);
```

<a name="oauth2"></a>

#### OAuth2 based Authentication

Tou Authenticate using OAuth2 based Authentication method, you can use `initStandardaAuth()` with an object with username, pass, apiKey, onSuccess and onFailure as parameter. here, onSuccess and onFailure are callback functions, which gives the client a response of Authentication Status.

```javascript
window.gsma.initStandardaAuth({
  username: username,
  pass: password,
  apiKey: apiKey,
  callbackUrl: globalCallbackUrl,
  onSuccess: (res) => {
    console.log("Authentication Success", res);
  },
  onFailure: (res) => {
    console.log("Authentication Failed", res);
  },
});
```

<a name="noAuth"></a>

### Executing without Authentication

Without authentication, client can access functions that doesn't require authentication from `window.gsma.noAuth`

Syntax to call function without Authentication:

```javascript
window.gsma.noAuth.[use-case]({
	type: [use-case scenario type],
	[parameter1]: [value of parameter1],
	[parameter2]: [value of parameter2],
	[parameter-n]: [value of parameter-n],
})
```

For Example:

```javascript
window.gsma.noAuth.merchantPay({
  type: "payeeInitiated",
  callbackUrl: "https://www.test.com/callbackurl",
  data: {
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
});
```

<a name="auth"></a>

### Executing after Authentication

With authentication, client can access all functions from `window.gsma.auth`

Syntax to call function without Authentication:

```javascript
window.gsma.auth.[use-case]({
	type: [use-case scenario type],
	[parameter1]: [value of parameter1],
	[parameter2]: [value of parameter2],
	[parameter-n]: [value of parameter-n],
})
```

For Example:

```javascript
window.gsma.auth.merchantPay({
  type: "payeeInitiated",
  callbackUrl: "https://www.test.com/callbackurl",
  data: {
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
});
```

<a name="modules"></a>

## Payment Modules

<a name="merchantPayment"></a>

### Merchant Payment

Contains functions for all the use case scenarios within Merchant Payments.

| Function                  | Scenarios                                                               | Parameters                                                                  |
| ------------------------- | ----------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| createMerchantTransaction | Payee/Payer Initiated Merchant Payment using Callback or Polling Method | callbackUrl, data                                                           |
| viewRequestState          | Request state object to determine the outcome of the payment request    | serverCorrelationId                                                         |
| viewTransaction           | Get representation of complete payment transaction                      | transactionReference                                                        |
| createAuthorisationCode   | Auth Code generation for paymentWithAuthCode                            | identifierType, identifier, data, callbackUrl                               |
| createMerchantTransaction | Payee-Initiated Merchant Payment using a Pre-authorised Payment Code    | callbackUrl, data, and amount, currency, oneTimeCode within the data object |
| createRefundTransaction   | Merchant Payment Refund                                                 | data, callbackUrl and amount, currency within data object                   |
| createReversal            | Merchant Payment Reversal                                               | transactionReference                                                        |
| viewAccountTransaction    | Retrieve Payments for a Merchant                                        | identifierType, identifier, offset, limit                                   |
| viewAccountBalance        | Obtain a Merchant Balance                                               | identifierType, identifier                                                  |
| viewServiceAvailability   | Check for Service Availability                                          | -                                                                           |
| viewResponse              | Retrieve a Missing API Response                                         | clientCorrelationId                                                         |

<a name="disbursements"></a>

### Disbursements

Contains functions for all the use case scenarios within Disbursements.

| Function                      | Scenarios                                                                            | Parameters                                           |
| ----------------------------- | ------------------------------------------------------------------------------------ | ---------------------------------------------------- |
| createDisbursementTransaction | Individual disbursement using Callback or Polling Method                             | callbackUrl, data                                    |
| createBatchTransaction        | Bulk Disbursement using ‘one-shot’ or with 'Maker / Checker'                         | callbackUrl, data and data must contain transactions |
| viewRequestState              | Request state object to determine the outcome of the individual disbursement request | serverCorrelationId                                  |
| viewTransaction               | Get a representation of completed disbursement                                       | transactionReference                                 |
| viewBatchTransaction          | Get a representation of the batch transactions object                                | batchId                                              |
| viewBatchCompletions          | Get all transactions that have been completed                                        | batchId                                              |
| viewBatchRejections           | Get all transactions that have been rejected                                         | batchId                                              |
| updateBatchTransaction        | Checker submit a request to approve the transaction batch                            | callbackUrl,batchId                                  |
| createReversal                | Reverse an individual disbursement transaction                                       | transactionReference                                 |
| viewAccountTransaction        | Retrieve all transactions for a disbursement organisation                            | identifierType, identifier, offset, limit            |
| viewAccountBalance            | Obtain a Disbursement Organisation Balance                                           | identifierType, identifier                           |
| viewServiceAvailability       | Check for Service Availability                                                       | -                                                    |
| viewResponse                  | Retrieve a Missing API Response                                                      | clientCorrelationId                                  |

<a name="international"></a>

### International Transfers

Contains functions for all the use case scenarios within International Transfers.

| Function                       | Scenarios                                                          | Parameters                                |
| ------------------------------ | ------------------------------------------------------------------ | ----------------------------------------- |
| createQuotation                | Obtain a quotation and perform the transfer with the receiving FSP | callbackUrl, data                         |
| viewQuotation                  | View a specific quotation                                          | quotationReference                        |
| createInternationalTransaction | Sending FSP submits a transaction request to the receiving FSP     | callbackUrl, data                         |
| createReversal                 | Reverse an individual disbursement transaction                     | transactionReference                      |
| viewAccountTransaction         | Retrieve all transactions for a disbursement organisation          | identifierType, identifier, offset, limit |
| viewAccountBalance             | Obtain a Disbursement Organisation Balance                         | identifierType, identifier                |
| viewServiceAvailability        | Check for Service Availability                                     | -                                         |
| viewResponse                   | Retrieve a Missing API Response                                    | clientCorrelationId                       |
