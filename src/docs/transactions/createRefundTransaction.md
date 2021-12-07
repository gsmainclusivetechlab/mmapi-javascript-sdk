# Create a Refund Transaction `(createRefundTransaction)`

Here, `createRefundTransaction` creates a request to /transactions/type/adjustment

## Usage/Examples

### Example Input

```
{
   "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
    "type": "createRefundTransaction",
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
        "currency": "RWF"
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
  "serverCorrelationId": "cf60aafd-9ec0-47cb-b851-f61a37e4b9b2",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "15960",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "155",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 07:03:55 GMT",
  "etag": "W/\"9b-hC5R6Qeqt0xLkuCKMaY5sbVaagk\"",
  "x-amz-apigw-id": "J94WDGm6rPEFRlQ=",
  "x-amzn-remapped-content-length": "155",
  "x-amzn-requestid": "1efee44d-182b-4ed7-a057-3828beda30ef",
  "x-amzn-trace-id": "Root=1-61af0759-7e8ee04e3f8daf1a736a029d;Sampled=0",
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
  "errorDateTime": "2021-12-07T07:04:56.187Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "[key: accountid, value: 10]"
    }
  ]
}

status:
    404
```
