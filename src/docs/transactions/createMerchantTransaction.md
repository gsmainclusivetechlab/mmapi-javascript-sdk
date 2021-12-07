# Payee/Payer Initiated Merchant Payment using Callback, Polling Method or Pre-Authorised Payment Code `(createMerchantTransaction)`

Here, `createMerchantTransaction` creates a request to /transactions/type/merchantpay

## Usage/Examples

### Example Input - Callback

```
{
  "type": "createMerchantTransaction",
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "data": {
    "amount": "200.00",
    "debitParty": [
      {
        "key": "accountid",
        "value": "1"
      }
    ],
    "creditParty": [
      {
        "key": "accountid",
        "value": "30"
      }
    ],
    "currency": "RWF",
  }
 "getClientCorrelationId":(response)=>{},
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}
```

### Example Input - Polling

```
{
  "type": "createMerchantTransaction",
  "data": {
    "amount": "200.00",
    "debitParty": [
      {
        "key": "accountid",
        "value": "1"
      }
    ],
    "creditParty": [
      {
        "key": "accountid",
        "value": "30"
      }
    ],
    "currency": "RWF",
  }
 "getClientCorrelationId":(response)=>{},
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}
```

### Example Input - Pre-Authorised Payment Code

```
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "data": {
    "amount": "200.00",
    "debitParty": [
      {
        "key": "accountid",
        "value": "1"
      }
    ],
    "creditParty": [
      {
        "key": "accountid",
        "value": "30"
      }
    ],
    "currency": "RWF",
    "oneTimeCode": "e8f51f4e-c8d6-4b4e-873b-fcdbda22523d"
  },
 "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
 "type": "createMerchantTransaction",
 "getClientCorrelationId":(response)=>{},
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}
```

### Example Output - Callback / Pre-Authorised Payment Code

onSuccess:

```
response:

{
  "serverCorrelationId": "e8eecfa8-090b-4c97-aed4-3f63d92a0831",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "15952",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "168",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 05:22:44 GMT",
  "etag": "W/\"a8-xcqsk402FXBk05AgVgC8G8k79sA\"",
  "x-amz-apigw-id": "J9phtGjGrPEFfZg=",
  "x-amzn-remapped-content-length": "168",
  "x-amzn-requestid": "08e4cc0e-a7bb-49fd-acd0-01fff6128f78",
  "x-amzn-trace-id": "Root=1-61aeefa4-1c11551319be5dc83101c5ba;Sampled=0",
  "x-powered-by": "Express"
}

status:
    202


```

getClientCorrelationId:

```
64786f91-96b1-4058-9f50-f07a1a2aea5f
```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Account does not exist",
  "errorDateTime": "2021-12-07T05:25:23.864Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "[]"
    }
  ]
}

status:
    404
```

### Example Output - Polling

onSuccess:

```
response:

{
  "serverCorrelationId": "cb540b9c-173c-4194-8f40-2c055e31b598",
  "status": "pending",
  "notificationMethod": "polling",
  "objectReference": "15953",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "168",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 05:28:54 GMT",
  "etag": "W/\"a8-8sUjEgrcEd0mYIgW5x0mI580OP8\"",
  "x-amz-apigw-id": "J9qbnEWgrPEFuNw=",
  "x-amzn-remapped-content-length": "168",
  "x-amzn-requestid": "6bfa5081-b1c2-42aa-a6b8-6389b8437e1a",
  "x-amzn-trace-id": "Root=1-61aef116-1b5859a1120aca2d19093b30;Sampled=0",
  "x-powered-by": "Express"
}

status:
    202
```

getClientCorrelationId:

```
64786f91-96b1-4058-9f50-f07a1a2aea5f
```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Account does not exist",
  "errorDateTime": "2021-12-07T05:25:23.864Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "[]"
    }
  ]
}

status:
    404
```
