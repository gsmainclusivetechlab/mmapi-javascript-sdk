# Auth Code generation for paymentWithAuthCode `(createAuthorisationCode)`

Here, `createAuthorisationCode` creates a request to /accounts/{identifierType}/{identifier}/authorisationcodes or /accounts/{accountId}/authorisationcodes depending on the number of account IDs provided.

## Usage/Examples

### Example Input

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

onSuccess:

```
response:

{
  "serverCorrelationId": "e64112e3-cde3-4942-adb8-4576006237b0",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1888",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "154",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 06:43:33 GMT",
  "etag": "W/\"9a-2OzSO7YK/EW4aY4bXcNiaDXc+B8\"",
  "x-amz-apigw-id": "J91XUED6rPEFZ-A=",
  "x-amzn-remapped-content-length": "154",
  "x-amzn-requestid": "05046859-db02-4751-80b6-3677f4cb40fb",
  "x-amzn-trace-id": "Root=1-61af0295-5a1941fd2eecf3305cc50f76;Sampled=0",
  "x-powered-by": "Express"
}

status:
    202


```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Account does not exist",
  "errorDateTime": "2021-12-07T06:44:21.696Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "accountid@1$accountid@10"
    }
  ]
}

status:
    404
```
