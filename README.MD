# MMAPI JavaScript SDK
## Table of Contents
1. [Integrating SDK to your Application][integration]
2. [Initialization Methods][initMethods]
3. [Executing Functions][execution]
	- [Authentication Functions][authMethods]
		- [Basic Authentication][basicAuth]
		- [OAuth2 based Authentication][oauth2]
	- [Executing without Authentication][noAuth]
	- [Executing after Authentication][auth]
4. [Payment Modules][modules]
	- [Merchant Payment Module][merchantPayment]

[integration]: #integration
##Integrating SDK to your Application
Import the SDK script in the head of the client application.
```html
<script src="http://{cdn-url}/mmsdk.min.js"></script>
```
Once Imported, The SDK Modules will be available in the Browser Object Model - window as window.gsma
You can use:
```javascript
console.log(window.gsma)
``` 
To list all the available modules within the SDK.
[initMethods]: #initMethods
##Initialization Methods
Functions and modules that are available in `window.gsma`

Function |  Parameters | Utility 
-------|------|------------|---------
initBasicAuth |  username, pass | This function is used for basic authentication of MobileMoney SDK
initStandardAuth |username, pass, apiKey, onSuccess, onFailure | This function is used for OAuth2 based authentication of MobileMoney SDK where access token is handled by SDK. 
noAuth |  - | If the client is not logged in using any of the authentication all the use cases and their respective functions will be available in this module, if they don't require Authentication.
auth | - | If the client is logged in using any of the authentication all the use cases and their respective functions will be available in this module.
[execution]: #execution
##Executing Functions

[authMethods]: #authMethods
###Authentication Functions
Once Authenticated, the client gets access to all functions that require authentication in `window.gsma.auth`
[basicAuth]: #basicAuth
####Basic Authentication
Tou Authenticate using Basic Authentication method, you can use `initBasicAuth()` with Consumer key and Consumer Secret as function Parameters.
```javascript
    window.gsma.initBasicAuth(consumerKey, consumerSecret );
```
[oauth2]:#oauth2
####OAuth2 based Authentication
Tou Authenticate using OAuth2 based Authentication method, you can use `initStandardaAuth()` with an object with username, pass, apiKey, onSuccess and onFailure as parameter. here, onSuccess and onFailure are callback functions, which gives the client a response of Authentication Status.
```javascript
window.gsma.initStandardaAuth({ 
	username: username, 
	pass: password,
	apiKey: apiKey,
	onSuccess: (res) => {
		console.log("Authentication Success", res)}, 
	onFailure: (res) => {
		console.log("Authentication Failed",res);
	}, 
});
```


[noAuth]: #noAuth
###Executing without Authentication
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
	type: 'payeeInitiated', 
	callbackUrl:'https://www.test.com/callbackurl',
	data: { 
		amount: "200.00", 
		debitParty: [ 
			{ 
				key: "accountid", 
				value: "2999", },
		], creditParty: [
			{ 
				key: "accountid",
				value: "2999",
			}, 
		], 
		currency: "RWF", 
	} 
})
```
[auth]: #auth
###Executing after Authentication
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
	type: 'payeeInitiated', 
	callbackUrl:'https://www.test.com/callbackurl',
	data: { 
		amount: "200.00", 
		debitParty: [ 
			{ 
				key: "accountid", 
				value: "2999", },
		], creditParty: [
			{ 
				key: "accountid",
				value: "2999",
			}, 
		], 
		currency: "RWF", 
	} 
})
```
[modules]: #modules
##Payment Modules
[merchantPayment]:#merchantPayment
###Merchant Payment Module
Contains functions for all the use case scenarios within Merchant Payments Use case.

Function | Scenarios | Parameters
--------------|-----------|------------
payeeInitiated | Payee-Initiated Merchant Payment, Payee-Initiated Merchant Payment using the Polling Method | callbackUrl, data
payerInitiated | Payer-Initiated Merchant Payment | callbackUrl, data
requestState  | Payee-Initiated Merchant Payment Failure, Payer-Initiated Merchant Payment Failure | serverCorrelationId
transactionReference | Get Details of a Transaction Reference | transactionReference
preAuthCode | Auth Code generation for paymentWithAuthCode | identifierType, identifier, data, callbackUrl
paymentWithAuthCode | Payee-Initiated Merchant Payment using a Pre-authorised Payment Code | callbackUrl, data, and amount, currency, oneTimeCode within the data object
refund | Merchant Payment Refund | data, callbackUrl and amount, currency within data object
reversal | Merchant Payment Reversal | transactionReference
payments | Retrieve Payments for a Merchant | identifierType, identifier, offset, limit
balanceCheck | Obtain a Merchant Balance | identifierType, identifier
serviceAvailability | Check for Service Availability | -
retrieveMissingRequest | Retrieve a Missing API Response | clientCorrelationId
