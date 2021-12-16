# Create an Authorisation Code via an Account Identifier

Here, if only a single account ID is provided, `createAuthorisationCode` creates a POST request to /accounts/{identifierType}/{identifier}/authorisationcodes

> `This endpoint allows a mobile money payer or payee to generate a code which when presented to the other party, can be redeemed for an amount set by the payer or payee, depending upon the use case where one identifier suffices to uniquely identify an account.`

Here, if Multiple account IDs are provided `createAuthorisationCode` creates a POST request to /accounts/{accountId}/authorisationcodes depending on the number of account IDs provided.

> `This endpoint allows a mobile money payer or payee to generate a code which when presented to the other party, can be redeemed for an amount set by the payer or payee, depending upon the use case where a single identifier is not sufficient to identify an account.`

## Usage/Examples

```
{
   "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "type": "createAuthorisationCode",
  "data": {
    "amount": "200.00",
    "currency": "RWF",
    "amountType": "exact",
    "codeLifetime": "600",
    "holdFundsIndicator": true,
    "redemptionAccountIdentifiers": [
      {
        "key": "accountid",
        "value": "1"
      }
    ]
  },
  "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

```
{
  "serverCorrelationId": "e64112e3-cde3-4942-adb8-4576006237b0",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1888",
  "pollLimit": 100
}

status:
    202
```
