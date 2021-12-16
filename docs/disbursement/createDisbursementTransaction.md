# Create a Disbursement Transaction

`Here, createDisbursementTransaction creates a POST request to /transactions/type/disbursement`

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'disbursement' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createDisbursementTransaction",
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
        "serverCorrelationId": "88b06c14-c3ee-4309-b595-88677aee65f2",
        "status": "pending",
        "notificationMethod": "callback",
        "objectReference": "18487",
        "pollLimit": 100
    }
status:
    202
```

## Note

> `callbackUrl is an optional parameter. If no callbackUrl is provided during Authentication Initialization or with the Input data, the notification method will be polling.`
