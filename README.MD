<!-- ## bundle config

npm i --save-dev webpack webpack-cli webpack-dev-server

## tranformation

babel
npm i --save-dev @babel/core @babel/preset-env babel-loader

## Api

api
npm install axios

## env setup

acessing env variable config
npm install dotenv-webpack --save-dev

## url encode

A querystring parsing and stringifying library with some added security.
npm install qs -->

Integration:

Import the SDK script in the head of the client application.

<head>
   <script src="http://{cdn-url}/main.min.js"></script>
</head>

Once Imported, The SDK Modules will be available in the Browser Object Model - window as
window.gsma

You may use
console.log(window.gsma)
To list all the available modules within the SDK.

Modules available in window.gsma:

| Module           | Type        | Parameters                                   | Utility                                                                                                                                                                                 |
| ---------------- | ----------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| initBasicAuth    | Function    | username, pass                               | This function is used for basic authentication of MobileMoney SDK                                                                                                                       |
| --------------   | ----------- | ------------                                 | ------------                                                                                                                                                                            |
| initStandardAuth | Function    | username, pass, apiKey, onSuccess, onFailure | This function is used for OAuth2 based authentication of MobileMoney SDK where access token is handled by SDK.                                                                          |
| --------------   | ----------- | ------------                                 | ------------                                                                                                                                                                            |
| noAuth           | Function    | -                                            | If the client is not logged in using any of the authentication all the use cases and their respective functions will be available in this module, if they don't require Authentication. |
| --------------   | ----------- | ------------                                 | ------------                                                                                                                                                                            |
| auth             | Function    | -                                            | If the client is logged in using any of the authentication all the use cases and their respective functions will be available in this module.                                           |

Use cases available in auth and noAuth modules:

merchantPay - Contains functions for all the use case scenarios within Merchant Payments Use case.

| Scenario Type          | Scenarios                                                                                   | Parameters                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| payeeInitiated         | Payee-Initiated Merchant Payment, Payee-Initiated Merchant Payment using the Polling Method | callbackUrl, data                                                           |
| --------------         | -----------                                                                                 | ------------                                                                |
| payerInitiated         | Payer-Initiated Merchant Payment                                                            | callbackUrl, data                                                           |
| --------------         | -----------                                                                                 | ------------                                                                |
| requestState           | Payee-Initiated Merchant Payment Failure, Payer-Initiated Merchant Payment Failure          | serverCorrelationId                                                         |
| --------------         | -----------                                                                                 | ------------                                                                |
| transactionReference   | Get Details of a Transaction Reference                                                      | transactionReference                                                        |
| --------------         | -----------                                                                                 | ------------                                                                |
| preAuthCode            | Auth Code generation for paymentWithAuthCode                                                | identifierType, identifier, data, callbackUrl                               |
| --------------         | -----------                                                                                 | ------------                                                                |
| paymentWithAuthCode    | Payee-Initiated Merchant Payment using a Pre-authorised Payment Code                        | callbackUrl, data, and amount, currency, oneTimeCode within the data object |
| --------------         | -----------                                                                                 | ------------                                                                |
| refund                 | Merchant Payment Refund                                                                     | data, callbackUrl and amount, currency within data object                   |
| --------------         | -----------                                                                                 | ------------                                                                |
| reversal               | Merchant Payment Reversal                                                                   | transactionReference                                                        |
| --------------         | -----------                                                                                 | ------------                                                                |
| payments               | Retrieve Payments for a Merchant                                                            | identifierType, identifier, offset, limit                                   |
| --------------         | -----------                                                                                 | ------------                                                                |
| balanceCheck           | Obtain a Merchant Balance                                                                   | identifierType, identifier                                                  |
| --------------         | -----------                                                                                 | ------------                                                                |
| serviceAvailability    | Check for Service Availability                                                              | -                                                                           |
| --------------         | -----------                                                                                 | ------------                                                                |
| retrieveMissingRequest | Retrieve a Missing API Response                                                             | clientCorrelationId                                                         |

Executing a function:

Authentication:

Basic Authentication
window.gsma.initBasicAuth(
consumerKey,
consumerSecret
);

OAuth2 based Authentication
window.gsma.initStandardaAuth({
username: username,
pass: password,
apiKey: apiKey,
onSuccess: (res) => {
console.log("Authentication Success", res);
},
onFailure: (res) => {
console.log("Authentication Failed");
return onFailure(res);
},
});

Use Cases:
If Not authenticated:

Syntax:
window.gsma.noAuth.[use-case]({
type: [use-case scenario type],
[parameter1]: [value of parameter1],
[parameter2]: [value of parameter2],
..
..
[parameter-n]: [value of parameter-n],
})
Example:
window.gsma.noAuth.merchantPay({
type: 'payeeInitiated',
callbackUrl:'https://www.test.com/callbackurl',
data:{
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
}
})

If Authenticated:
window.gsma.auth.[use-case]({
type: [use-case scenario type],
[parameter1]: [value of parameter1],
[parameter2]: [value of parameter2],
..
[parameter-n]: [value of parameter-n],
})
Example:
window.gsma.auth.merchantPay({
type: 'payeeInitiated',
callbackUrl:'https://www.test.com/callbackurl',
data:{
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
}
})
