# Request state object to determine the outcome of the payment request `(viewRequestState)`

Here, `viewRequestState` creates a request to /requeststates/{serverCorrelationId}

## Usage/Examples

### Example Input

```
{
  "serverCorrelationId": "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
  "type": "viewRequestState",
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
  "serverCorrelationId": "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
  "status": "completed",
  "notificationMethod": "callback",
  "objectReference": "REF-1635146490282",
  "pollLimit": 100
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "169",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 06:21:56 GMT",
  "etag": "W/\"a9-47uUTtUyLe3VBo3MB5c2ErfyGXY\"",
  "x-amz-apigw-id": "J9yMrE-DLPEFy3A=",
  "x-amzn-remapped-content-length": "169",
  "x-amzn-requestid": "000b2c46-8631-4885-b2ed-92c5b8c32e93",
  "x-amzn-trace-id": "Root=1-61aefd84-30a1d30311fd305f7de7d9d5;Sampled=0",
  "x-powered-by": "Express"
}

status:
    200


```

getClientCorrelationId:

```
76352380-9306-4964-93c0-a781cf02686e
```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Resource does not exists",
  "errorDateTime": "2021-12-07T06:24:10.747Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "db474b5c-cc9d-4173-b15b0-8ac0cb20e7c"
    }
  ]
}

status:
    404
```
