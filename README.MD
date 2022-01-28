# mmapi-JavaScript-sdk

The SDK provides separate use cases to handle necessary MMAPI functionality including Merchant Payments, Disbursements, International Transfers, P2P Transfers, Recurring Payments, Account Linking, Bill Payments and Agent Services (including Cash-In and Cash-Out). Each use case exposes use case scenarios
to customize your application integrations as needed. The SDK also includes a Samples, so you can test interactions before integration.

## Index

This document contains the following sections:

-   [Requirements](#requirements)
-   [Setting Up](#setting-up)
    -   [Integrating SDK to your Application](#setting-up)
-   [Use Cases](#use-cases)
    - [Merchant Payments](#merchantPayment)
    - [Disbursements](#disbursements)
    - [International Transfers](#international)
    - [P2P Transfers](#p2p)
    - [Recurring Payments](#recurringPayments)
    - [Account Linking](#accountLinking)
    - [Bill Payments](#billPayments)
    - [Agent Services](#agentServices)

<a name="requirements"></a>
## Requirements

-   Any Browser

<a name="setting-up"></a>
## Setting Up

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

To Authenticate using Basic Authentication method, you can use `initBasicAuth()` with Consumer key and Consumer Secret as function Parameters.

```javascript
window.gsma.initBasicAuth(consumerKey, consumerSecret, callbackUrl);
```
## Note

> callbackUrl is an optional parameter. If no callbackUrl is provided during Authentication Initialization or with the Input data, the notification method will be polling.
> Once callbackUrl is defined globaly, define `notificationMethod:'polling'` to switch into polling for each requests.



<a name="oauth2"></a>

#### OAuth2 based Authentication

To Authenticate using OAuth2 based Authentication method, you can use `initStandardaAuth()` with an object with username, pass, apiKey, onSuccess and onFailure as parameter. here, onSuccess and onFailure are callback functions, which gives the client a response of Authentication Status.

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
## Note

> callbackUrl is an optional parameter. If no callbackUrl is provided during Authentication Initialization or with the Input data, the notification method will be polling.
> Once callbackUrl is defined globaly, define `notificationMethod:'polling'` to switch into polling for each requests.
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

## Use Cases

- [Merchant Payments](#merchantPayment)
- [Disbursements](#disbursements)
- [International Transfers](#international)
- [P2P Transfers](#p2p)
- [Recurring Payments](#recurringPayments)
- [Account Linking](#accountLinking)
- [Bill Payments](#billPayments)
- [Agent Services](#agentServices)

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
    <td><a href="docs/merchantPayment/createMerchantTransaction.md">Payee Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Payee-Initiated Merchant Payment using the Polling Method</td>
    <td><a href="docs/merchantPayment/createMerchantTransaction.md">Payee Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data</td>
  </tr>
  <tr>
    <td><a href="docs/merchantPayment/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="docs/merchantPayment/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Payer-Initiated Merchant Payment</td>
    <td><a href="docs/merchantPayment/createMerchantTransaction.md">Payer Initiated Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Payee-Initiated Merchant Payment using a Pre-authorised Payment Code</td>
    <td><a href="docs/merchantPayment/createAuthorisationCode.md">Obtain an Authorisation Code</a></td>
    <td>createAuthorisationCode</td>
    <td>accountId, data, callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/merchantPayment/createMerchantPayWithPreAuthCode.md">Perform a Merchant Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/merchantPayment/viewAuthorisationCode.md">View An Authorisation Code</a></td>
    <td>viewAuthorisationCode</td>
    <td>accountId,authorisationCode</td>
  </tr>
  <tr>
    <td>Merchant Payment Refund</td>
    <td><a href="docs/merchantPayment/createRefundTransaction.md">Perform a Merchant Payment Refund</a></td>
    <td>createRefundTransaction</td>
    <td>data, callbackUrl </td>
  </tr>
  <tr>
    <td>Merchant Payment Reversal</td>
    <td><a href="docs/merchantPayment/createReversal.md">Perform a Merchant Payment Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain a Merchant Balance</td>
    <td><a href="docs/merchantPayment/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Payments for a Merchant</td>
    <td><a href="docs/merchantPayment/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="docs/merchantPayment/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="docs/merchantPayment/viewResponse.md">Retrieve a Missing Response</a></td>
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
    <td><a href="docs/disbursement/createDisbursementTransaction.md">Create a Individual Disbursement request </a></td>
    <td>createDisbursementTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="4">Bulk Disbursement</td>
    <td><a href="docs/disbursement/createBatchTransaction.md">Create a Transaction Batch</a></td>
    <td>createBatchTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchTransaction.md">View a Transaction Batch</a></td>
    <td>viewBatchTransaction</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchCompletions.md">View Batch Completions</a></td>
    <td>viewBatchCompletions</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchRejections.md">View Batch Rejections</a></td>
    <td>viewBatchRejections</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td rowspan="5">Bulk Disbursement with Maker / Checker</td>
    <td><a href="docs/disbursement/createBatchTransaction.md">Create a Transaction Batch</a></td>
    <td>createBatchTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/updateBatchTransaction.md">Update a Transaction Batch</a></td>
    <td>updateBatchTransaction</td>
    <td>callbackUrl,batchId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchTransaction.md">View a Transaction Batch</a></td>
    <td>viewBatchTransaction</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchCompletions.md">View Batch Completions</a></td>
    <td>viewBatchCompletions</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewBatchRejections.md">View Batch Rejections</a></td>
    <td>viewBatchRejections</td>
    <td>batchId</td>
  </tr>
  <tr>
    <td rowspan="3">Individual Disbursement Using the Polling Method</td>
    <td><a href="docs/disbursement/createDisbursementTransaction.md">Create a Individual Disbursement request </a></td>
    <td>createDisbursementTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="docs/disbursement/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Disbursement Reversal</td>
    <td><a href="docs/disbursement/createReversal.md">Perform a Disbursement Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain a Disbursement Organisation Balance</td>
    <td><a href="docs/disbursement/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Transactions for a Disbursement Organisation</td>
    <td><a href="docs/disbursement/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="docs/disbursement/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="docs/disbursement/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="international"></a>

### International Transfers (InternationalTransfer)

Contains functions for all the use case scenarios within International Transfers.

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
    <td rowspan="3">International Transfer via Hub</td>
    <td><a href="/docs/internationalTransfer/createQuotation.md">Request a International Transfer Quotation</a></td>
    <td>createQuotation</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="/docs/internationalTransfer/createInternationalTransaction.md">Perform an International Transfer</a></td>
    <td>createInternationalTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td>Optional <a href="/docs/internationalTransfer/viewQuotation.md">View a Quotation</a></td>
    <td>viewQuotation</td>
    <td>quotationReference</td>
  </tr>
  <tr>
    <td rowspan="3">Bilateral International Transfer</td>
    <td><a href="/docs/internationalTransfer/createQuotation.md">Request a International Transfer Quotation</a></td>
    <td>createQuotation</td>
    <td>data,callbackUrl</td>
  </tr>

 <tr>
    <td><a href="/docs/internationalTransfer/createInternationalTransaction.md">Perform an International Transfer</a></td>
    <td>createInternationalTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td>Optional <a href="/docs/internationalTransfer/viewQuotation.md">View a Quotation</a></td>
    <td>viewQuotation</td>
    <td>quotationReference</td>
  </tr>
  <tr>
  <tr>
    <td>International Transfer Reversal</td>
    <td><a href="/docs/internationalTransfer/createReversal.md">Perform a Transaction Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain an FSP Balance</td>
    <td><a href="docs/internationalTransfer/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Transactions for an FSP</td>
    <td><a href="docs/internationalTransfer/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="docs/internationalTransfer/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="docs/internationalTransfer/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>
<a name="p2p"></a>

### P2P Transfers (P2PTransfer)

Contains functions for all the use case scenarios within P2P Transfers.

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
    <td rowspan="3">P2P Transfer via Switch</td>
    <td><a href="/docs/p2pTransfer/viewAccountName.md">Retrieve the Name of the Recipient</a></td>
    <td>viewAccountName</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td><a href="/docs/p2pTransfer/createQuotation.md">Request a P2P Quotation</a></td>
    <td>createQuotation</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="/docs/p2pTransfer/createTransferTransaction.md">Perform a P2P Transfer</a></td>
    <td>createTransferTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="2">Bilateral P2P Transfer</td>
    <td><a href="/docs/p2pTransfer/viewAccountName.md">Retrieve the Name of the Recipient</a></td>
    <td>viewAccountName</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td><a href="/docs/p2pTransfer/createTransferTransaction.md">Perform a P2P Transfer</a></td>
    <td>createTransferTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">‘On-us’ P2P Transfer Initiated by a Third Party Provider</td>
    <td><a href="/docs/p2pTransfer/viewAccountName.md">Retrieve the Name of the Recipient</a></td>
    <td>viewAccountName</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td><a href="/docs/p2pTransfer/createQuotation.md">Request a P2P Quotation</a></td>
    <td>createQuotation</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td><a href="/docs/p2pTransfer/createTransferTransaction.md">Perform a P2P Transfer</a></td>
    <td>createTransferTransaction</td>
    <td>data,callbackUrl</td>
  </tr>
  <tr>
    <td>P2P Transfer Reversal</td>
    <td><a href="/docs/p2pTransfer/createReversal.md">Perform a Transaction Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain an FSP Balance</td>
    <td><a href="/docs/p2pTransfer/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
   <tr>
    <td>Retrieve Transactions for an FSP</td>
    <td><a href="/docs/p2pTransfer/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, offset, limit</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="/docs/p2pTransfer/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td rowspan="2">Retrieve a Missing API Response</td>
    <td><a href="/docs/p2pTransfer/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="recurringPayments"></a>
### Recurring Payments(RecurringPayment)

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
    <td>Setup a Recurring Payment</td>
    <td><a href="/docs/recurringPayment/createAccountDebitMandate.md">Setup a Recurring Payment</a></td>
    <td>createAccountDebitMandate</td>
    <td>callbackUrl, data, accountId</td>
  </tr>

  <tr>
    <td>Take a Recurring Payment</td>
    <td><a href="/docs/recurringPayment/createMerchantTransaction.md">Take a Recurring Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>callbackUrl, data</td>
  </tr>

  <tr>
    <td rowspan="3">Take a Recurring Payment using the Polling Method</td>
    <td><a href="/docs/recurringPayment/createMerchantTransaction.md">Take a Recurring Payment</a></td>
    <td>createMerchantTransaction</td>
    <td>data</td>
  </tr>
  <tr>
    <td><a href="/docs/recurringPayment/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="/docs/recurringPayment/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>

  <tr>
    <td>Recurring Payment Refund</td>
    <td><a href="/docs/recurringPayment/createRefundTransaction.md">Perform a Recurring Payment Refund</a></td>
    <td>createRefundTransaction</td>
    <td>data, callbackUrl</td>
  </tr>

  <tr>
    <td>Recurring Payment Reversal</td>
    <td><a href="/docs/recurringPayment/createReversal.md">Perform a Merchant Payment Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>

  <tr>
    <td>Payer sets up a Recurring Payment using MMP Channel</td>
    <td><a href="/docs/recurringPayment/createAccountDebitMandate.md">Setup a Recurring Payment</a></td>
    <td>createAccountDebitMandate</td>
    <td>callbackUrl, data, accountId</td>
	
  </tr>
  

  <tr>
    <td>Obtain a Service Provider Balance</td>
    <td><a href="/docs/recurringPayment/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>

  <tr>
    <td>Retrieve Payments for a Service Provider</td>
    <td><a href="/docs/recurringPayment/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId,filter</td>
  </tr>

  <tr>
    <td>Check for Service Availability</td>
    <td><a href="/docs/recurringPayment/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>

  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="/docs/recurringPayment/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="accountLinking"></a>
### Account Linking(AccountLinking)

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
    <td>Setup an Account Link</td>
    <td><a href="/docs/accountLinking/createAccountLink.md">Establish an Account to Account Link</a></td>
    <td>createAccountLink</td>
    <td> data, accountId, callbackUrl</td>
  </tr>
  <tr>
    <td>Perform a Transfer for a Linked Account</td>
    <td><a href="/docs/accountLinking/createTransferTransaction.md">Use a Link to make a Transfer</a></td>
    <td>createTransferTransaction</td>
    <td>data, callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Perform a Transfer using an Account Link via the Polling Method</td>
    <td><a href="/docs/accountLinking/createTransferTransaction.md">Use a Link to make a Transfer</a></td>
    <td>createTransferTransaction</td>
    <td>data</td>
  </tr>
  <tr>
    <td><a href="docs/accountLinking/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="docs/accountLinking/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Perform a Transfer Reversal</td>
    <td><a href="/docs/accountLinking/createReversal.md">Perform a Transaction Reversal</a></td>
    <td>createReversal</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Obtain a Financial Service Provider Balance</td>
    <td><a href="/docs/accountLinking/viewAccountBalance.md">Get an Account Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
   <tr>
    <td>Retrieve Transfers for a Financial Service Provider</td>
    <td><a href="/docs/accountLinking/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId,filter</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="/docs/accountLinking/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td rowspan="2">Retrieve a Missing API Response</td>
    <td><a href="/docs/accountLinking/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="billPayments"></a>
### Bill Payments (BillPayment)

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
    <td>Successful Retrieval of Bills</td>
    <td><a href="/docs/billPayment/viewAccountBills.md">Retrieve a Set of Bills</a></td>
    <td>viewAccountBills</td>
    <td>accountId, filter</td>
  </tr>
  <tr>
    <td rowspan="2">Make a Successful Bill Payment with Callback</td>
    <td><a href="/docs/billPayment/createBillTransaction.md">Create a Bill Transaction</a></td>
    <td>createBillTransaction</td>
    <td>data, callbackUrl</td>
  </tr>
  <tr>
    <td><a href="/docs/billPayment/createBillPayment.md">Make a Bill Payment</a></td>
    <td>createBillPayment</td>
    <td>accountId, billReference, data, callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Make a Bill Payment with Polling</td>
    <td><a href="/docs/billPayment/createBillPayment.md">Make a Bill Payment</a></td>
    <td>createBillPayment</td>
    <td>accountId, billReference, data</td>
  </tr>
   <tr>
    <td><a href="/docs/billPayment/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="/docs/billPayment/viewBillPayment.md">Retrieve Bill Payments for a Given Bill</a></td>
    <td>viewBillPayment</td>
    <td>billReference, accountId, filter</td>
  </tr>
   <tr>
    <td>Retrieval of Bill Payments</td>
    <td><a href="/docs/billPayment/viewBillPayment.md">Retrieve a Set of Bill Payments</a></td>
    <td>viewBillPayment</td>
    <td>billReference, accountId, filter</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="/docs/billPayment/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="/docs/billPayment/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>

<a name="agentServices"></a>
### Agent Services (AgentService)


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
    <td>Agent-initiated Cash-out</td>
    <td><a href="docs/agentService/createWithdrawalTransaction.md">Agent Initiated Cash-Out</a></td>
    <td>createWithdrawalTransaction</td>
    <td>data, callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Agent-initiated Cash-out using the Polling Method</td>
    <td><a href="docs/agentService/createWithdrawalTransaction.md">Agent Initiated Cash-out</a></td>
    <td>createWithdrawalTransaction</td>
    <td>data</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/viewRequestState.md">Poll to Determine the Request State</a></td>
    <td>viewRequestState</td>
    <td>serverCorrelationId</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/viewTransaction.md">Retrieve a Transaction</a></td>
    <td>viewTransaction</td>
    <td>transactionReference</td>
  </tr>
  <tr>
    <td>Customer-initiated Cash-out</td>
    <td><a href="docs/agentService/createWithdrawalTransaction.md">Customer Initiated Cash-Out</a></td>
    <td>createWithdrawalTransaction</td>
    <td>data, callbackUrl</td>
  </tr>
  <tr>
    <td rowspan="3">Customer Cash-out at an ATM using an Authorisation Code</td>
    <td><a href="docs/agentService/createAuthorisationCode.md">Obtain an Authorisation Code</a></td>
    <td>createAuthorisationCode</td>
    <td>accountId, callbackUrl, data</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/createWithdrawalTransaction.md">ATM Initiated Cash-Out</a></td>
    <td>createWithdrawalTransaction</td>
    <td>data, callbackUrl</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/viewAuthorisationCode.md">Retrieve Authorisation Code</a></td>
    <td>viewAuthorisationCode</td>
    <td>authorisationCode, accountId</td>
  </tr>
  <tr>
    <td rowspan="2">Agent-initiated Customer Cash-in</td>
    <td><a href="docs/agentService/viewAccountName.md">Retrieve the Name of the Depositing Customer</a></td>
    <td>viewAccountName</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/createDepositTransaction.md">Agent Initiated Cash-in</a></td>
    <td>createDepositTransaction</td>
    <td>callbackUrl,  data</td>
  </tr>
  <tr>
    <td>Cash-out Reversal</td>
    <td><a href="docs/agentService/createReversal.md">Perform a Transaction Reversal</a></td>
    <td>createReversal</td>
    <td>callbackUrl, transactionReference</td>
  </tr>
  <tr>
    <td>Register a Customer Mobile Money Account</td>
    <td><a href="docs/agentService/createAccount.md">Create a Mobile Money Account</a></td>
    <td>createAccount</td>
    <td>callbackUrl, data</td>
  </tr>
  <tr>
    <td rowspan="2">Verify the KYC of a Customer</td>
    <td><a href="docs/agentService/viewAccount.md">Retrieve Account Information</a></td>
    <td>viewAccount</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td><a href="docs/agentService/updateAccountIdentity.md">Update KYC Verification Status</a></td>
    <td>updateAccountIdentity</td>
    <td>accountId, identityId, callbackUrl, data</td>
  </tr>
  <tr>
    <td>Obtain an Agent Balance</td>
    <td><a href="docs/agentService/viewAccountBalance.md">Obtain an Agent Balance</a></td>
    <td>viewAccountBalance</td>
    <td>accountId</td>
  </tr>
  <tr>
    <td>Retrieve Transactions for an Agent</td>
    <td><a href="docs/agentService/viewAccountTransactions.md">Retrieve a Set of Transactions for an Account</a></td>
    <td>viewAccountTransactions</td>
    <td>accountId, filter</td>
  </tr>
  <tr>
    <td>Check for Service Availability</td>
    <td><a href="/docs/agentService/viewServiceAvailability.md">Check for Service Availability</a></td>
    <td>viewServiceAvailability</td>
    <td>NA</td>
  </tr>
  <tr>
    <td>Retrieve a Missing API Response</td>
    <td><a href="/docs/agentService/viewResponse.md">Retrieve a Missing Response</a></td>
    <td>viewResponse</td>
    <td>clientCorrelationId</td>
  </tr>
</tbody>
</table>
