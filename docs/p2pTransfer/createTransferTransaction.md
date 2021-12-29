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

### Example Output - Callback

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
### Example Output - Polling
```
{
  "serverCorrelationId": "cc6ff7b5-7cac-42d5-a0ca-83c84ca099c9",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640013356110",
  "pollLimit": 100
}

status:
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
