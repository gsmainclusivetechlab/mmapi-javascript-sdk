# Create a Transfer Transaction

`Here, createTransferTransaction creates a POST request to /transactions/type/transfer`

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'transfer' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createTransferTransaction",
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
  }
}
```

### Example Output

```
{
  "serverCorrelationId": "bc35ba9f-ed99-48b3-966c-ec6322b54557",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "18515",
  "pollLimit": 100
}

status:
    202
```
