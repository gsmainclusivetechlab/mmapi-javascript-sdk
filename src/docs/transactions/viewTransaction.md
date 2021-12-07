# Get representation of complete payment transaction `(viewTransaction)`

Here, `viewTransaction` creates a request to /transactions/{transactionReference}

## Usage/Examples

### Example Input

```
{
   "transactionReference": "REF-1633678194929",
   "type": "viewTransaction"
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

onSuccess:

```
response:

{
  "transactionReference": "REF-1633678194929",
  "creditParty": [
    {
      "key": "accountid",
      "value": "2999"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907197912"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907232832"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907265888"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907412029"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907483978"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637909732171"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638330257762"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638360515423"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638444910612"
    }
  ],
  "debitParty": [
    {
      "key": "accountid",
      "value": "2999"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907197912"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907232832"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907265888"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907412029"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907483978"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637909732171"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638330257762"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638360515423"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638444910612"
    }
  ],
  "type": "merchantpay",
  "transactionStatus": "pending",
  "amount": "200.00",
  "currency": "RWF",
  "creationDate": "2021-10-08T08:29:55",
  "modificationDate": "2021-10-08T08:29:55",
  "requestDate": "2021-10-08T08:29:55"
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "1335",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 06:29:39 GMT",
  "etag": "W/\"537-rLC2Hnvp/tU302zZ7VW6BODvP+w\"",
  "x-amz-apigw-id": "J9zU0HJALPEFkTA=",
  "x-amzn-remapped-content-length": "1335",
  "x-amzn-requestid": "7a37f7bf-8ce3-4451-b18a-7f8380871afa",
  "x-amzn-trace-id": "Root=1-61aeff51-6a6975476d8b1c010f844bcf;Sampled=0",
  "x-powered-by": "Express"
}

status:
    200


```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Transaction does not exists",
  "errorDateTime": "2021-12-07T06:31:07.843Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "REF-1633678165929"
    }
  ]
}

status:
    404
```
