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
     - [createMerchantTransaction](./src/docs/transactions/createMerchantTransaction.md)
     - [viewRequestState](./src/docs/supporting/viewRequestState.md)
     - [viewTransaction](./src/docs/transactions/viewTransaction.md)
     - [createAuthorisationCode](./src/docs/accounts/createAuthorisationCode.md)
     - [viewAuthorisationCode](./src/docs/accounts/viewAuthorisationCode.md)
     - [createRefundTransaction](./src/docs/transactions/createRefundTransaction.md)
     - [createReversal](./src/docs/transactions/createReversal.md)
     - [viewAccountTransaction](./src/docs/accounts/viewAccountTransaction.md)
     - [viewAccountBalance](./src/docs/accounts/viewAccountBalance.md)
     - [viewServiceAvailability](./src/docs/supporting/viewServiceAvailability.md)
     - [viewResponse](./src/docs/supporting/viewResponse.md)
   - [Disbursements](#disbursements)
   - [International Transfers](#international)
   - [P2P](#p2p)
   - [Recurring Payments](#recurringPayments)

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
window.gsma.noAuth.MerchantPayment({
  type: "createMerchantTransaction",
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
window.gsma.auth.MerchantPayment({
  type: "createMerchantTransaction",
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

### Merchant Payment (MerchantPayment)

Contains functions for all the use case scenarios within Merchant Payments.
<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Payee-Initiated Merchant Payment</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Payee Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Payee-Initiated Merchant Payment using the Polling Method</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Payee Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data</td>
  </tr>
  <tr>
    <td><a href="src/docs/supporting/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Payer-Initiated Merchant Payment</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Payer Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Payee-Initiated Merchant Payment using a Pre-authorised Payment Code</td>
    <td><a href="src/docs/accounts/createAuthorisationCode.md">Obtain an Authorisation Code</a></td>
    <td>createAuthorisationCode</td>
    <td>accountId, data, callbackUrl</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Perform a Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="src/docs/accounts/viewAuthorisationCode.md">View An Authorisation Code</a></td>
    <td>viewAuthorisationCode</td>
    <td>accountId,authorisationCode</td>
  </tr>
  <tr>
    <td>Merchant Payment Refund</td>
    <td><a href="src/docs/transactions/createRefundTransaction.md">Perform a Merchant Payment Refund</a></td>
    <td>createRefundTransaction</td>
    <td>data, callbackUrl </td>
  </tr>
  <tr>
    <td>Merchant Payment Reversal</td>
    <td><a href="src/docs/transactions/createReversal.md">Perform a Merchant Payment Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain a Merchant Balance</td>
    <td><a href="src/docs/accounts/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Payments for a Merchant</td>
    <td><a href="src/docs/accounts/viewAccountTransaction.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="src/docs/supporting/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="src/docs/supporting/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="disbursements"></a>

### Disbursements (Disbursement)

Contains functions for all the use case scenarios within Disbursements.

<table>
<thead>
  <tr>
    <th>Scenarios</th>
    <th>API</th>
    <th>Function</th>
    <th>Parameters</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Individual Disbursement</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Create a Individual Disbursement request </a></td>
    <td>createDisbursementTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="4">Bulk Disbursement</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Create A Transaction Batch</a></td>
    <td>createBatchTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="src/docs/supporting/viewRequestState.md">View A Transaction Batch</a></td>
    <td>viewBatchTransaction</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/viewTransaction.md">View Batch Completions</a></td>
    <td>viewBatchCompletions</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">View Batch Rejections</a></td>
    <td>viewBatchRejections</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td rowspan="5">Bulk Disbursement with Maker / Checker</td>
    <td><a href="src/docs/accounts/createAuthorisationCode.md">Create A Transaction Batch</a></td>
    <td>createBatchTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Update A Transaction Batch</a></td>
    <td>updateBatchTransaction</td>
    <td>callbackUrl,batchId</td>
  </tr>
  <tr>
    <td><a href="src/docs/supporting/viewRequestState.md">View A Transaction Batch</a></td>
    <td>viewBatchTransaction</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/viewTransaction.md">View Batch Completions</a></td>
    <td>viewBatchCompletions</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">View Batch Rejections</a></td>
    <td>viewBatchRejections</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td rowspan="3">Individual Disbursement Using the Polling Method</td>
    <td><a href="src/docs/transactions/createMerchantTransaction.md">Create a Individual Disbursement request </a></td>
    <td>createDisbursementTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="src/docs/supporting/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="src/docs/transactions/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Disbursement Reversal</td>
    <td><a href="src/docs/accounts/viewAccountBalance.md">Perform a Disbursement Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain a Disbursement Organisation Balance</td>
    <td><a href="src/docs/accounts/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Transactions for a Disbursement Organisation</td>
    <td><a href="src/docs/accounts/viewAccountTransaction.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="src/docs/supporting/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="src/docs/supporting/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="international"></a>

### International Transfers (InternationalTransfer)

Contains functions for all the use case scenarios within International Transfers.

| Function                       | Scenarios                                                          | Parameters               |
| ------------------------------ | ------------------------------------------------------------------ | ------------------------ |
| createQuotation                | Obtain a quotation and perform the transfer with the receiving FSP | callbackUrl, data        |
| viewQuotation                  | View a specific quotation                                          | quotationReference       |
| createInternationalTransaction | Sending FSP submits a transaction request to the receiving FSP     | callbackUrl, data        |
| createReversal                 | Reverse an individual disbursement transaction                     | transactionReference     |
| viewAccountTransaction         | Retrieve all transactions for a disbursement organisation          | accountId, offset, limit |
| viewAccountBalance             | Obtain a Disbursement Organisation Balance                         | accountId                |
| viewServiceAvailability        | Check for Service Availability                                     | -                        |
| viewResponse                   | Retrieve a Missing API Response                                    | clientCorrelationId      |

<a name="p2p"></a>

### P2P Transfers (P2PTransfer)

Contains functions for all the use case scenarios within P2P Transfers.

| Function                  | Scenarios                                                          | Parameters               |
| ------------------------- | ------------------------------------------------------------------ | ------------------------ |
| viewAccountName           | confirm the recipient name                                         | accountId                |
| createQuotation           | Obtain a quotation and perform the transfer with the receiving FSP | callbackUrl, data        |
| createTransferTransaction | Perform the transfer with the receiving FSP                        | callbackUrl, data        |
| createReversal            | Reverse an p2p transaction                                         | transactionReference     |
| viewAccountTransaction    | Retrieve all transactions                                          | accountId, offset, limit |
| viewAccountBalance        | Obtain Balance                                                     | accountId                |
| viewServiceAvailability   | Check for Service Availability                                     | -                        |
| viewResponse              | Retrieve a Missing API Response                                    | clientCorrelationId      |

<a name="recurringPayments"></a>

### Recurring Payments (RecurringPayment)

Contains functions for all the use case scenarios within Recurring Payments.

| Function                  | Scenarios                                                               | Parameters                   |
| ------------------------- | ----------------------------------------------------------------------- | ---------------------------- |
| createAccountDebitMandate | recurring payment via a debit mandate                                   | callbackUrl, data, accountId |
| createMerchantTransaction | Payee/Payer Initiated Merchant Payment using Callback or Polling Method | callbackUrl, data            |
| viewRequestState          | Request state object to determine the outcome of the payment request    | serverCorrelationId          |
| viewTransaction           | Get representation of complete payment transaction                      | transactionReference         |
| createRefundTransaction   | Service Providers can issue a refund to payers                          | data, callbackUrl            |
| createReversal            | service provider may need to reverse a transaction                      | transactionReference         |
| viewAccountDebitMandate   | Obtain Debit Mandate by mandateReference                                | accountId, mandateReference  |
| viewAccountTransaction    | Retrieve all transactions                                               | accountId, offset, limit     |
| viewAccountBalance        | Obtain Balance                                                          | accountId                    |
| viewServiceAvailability   | Check for Service Availability                                          | -                            |
| viewResponse              | Retrieve a Missing API Response                                         | clientCorrelationId          |
