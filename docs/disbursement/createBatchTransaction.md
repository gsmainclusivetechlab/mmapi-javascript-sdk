# Create a Transaction Batch

`Here, createBatchTransaction creates a POST request to /batchtransactions`

> `Provided with a valid object representation, this endpoint allows for a new transaction batch to be created`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createBatchTransaction",
  "data": {
    "transactions": [
      {
        "type": "billpay",
        "amount": "200.00",
        "currency": "RWF",
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
        ]
      },
      {
        "type": "billpay",
        "amount": "400.00",
        "currency": "RWF",
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
        ]
      }
    ]
  }
}
```

### Example Output

```
{
  "serverCorrelationId": "90fc8752-0ec1-455c-a22f-3c2550784b8a",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1685",
  "pollLimit": 100
}

status:
    202
```
