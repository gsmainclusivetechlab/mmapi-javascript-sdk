# Get Account balance `(viewAccountBalance)`

Here, `viewAccountBalance` creates a request to /accounts/{identifierType}/{identifier}/balance

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
    "type": "viewAccountBalance"
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
  "currentBalance": "1000000000.00",
  "availableBalance": "0.00",
  "reservedBalance": "0.00",
  "unclearedBalance": "0.00",
  "currency": "GBP",
  "accountStatus": "available"
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "156",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 07:09:25 GMT",
  "etag": "W/\"9c-vx259YPJ5L9jWF+WF0mFdcX3xhg\"",
  "x-amz-apigw-id": "J95J6EFQrPEF4YA=",
  "x-amzn-remapped-content-length": "156",
  "x-amzn-requestid": "8d4c8f9f-d868-4876-a105-047d7a92d29c",
  "x-amzn-trace-id": "Root=1-61af08a5-6060ec2f5e67374b6d8478b3;Sampled=0",
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
  "errorDateTime": "2021-12-07T07:13:35.585Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "10"
    }
  ]
}

status:
    404
```
