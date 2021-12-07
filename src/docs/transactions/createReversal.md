# Create a Reversal Transaction `(createReversal)`

Here, `createReversal` creates a request to /transactions/{transactionReference}/reversals

## Usage/Examples

### Example Input

```
{
   "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
   "transactionReference": "REF-1466171557592",
   "type": "createReversal",
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
  "serverCorrelationId": "3a278629-7a0b-45df-94b8-f76cb61ed6b7",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "151",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 07:06:35 GMT",
  "etag": "W/\"97-7jcDswxDryhnRpCTSXluTQptWPE\"",
  "x-amz-apigw-id": "J94vPHoFLPEFc-Q=",
  "x-amzn-remapped-content-length": "151",
  "x-amzn-requestid": "3600224b-14bb-4284-86c4-136757cde5d9",
  "x-amzn-trace-id": "Root=1-61af07fa-3b54bc9c065cd0f658e9b74c;Sampled=0",
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
  "errorDescription": "Transaction does not exists",
  "errorDateTime": "2021-12-07T07:07:42.776Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "REF-1466171557515"
    }
  ]
}

status:
    404
```
