# Use a Link to make a Transfer

`Here, createTransferTransaction() creates a POST request to /transactions/type/transfer`

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'transfer' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createTransferTransaction",
  "data": {
    "amount": "200.00",
    "creditParty": [
      {
        "key": "linkref",
        "value": "REF-1638168563421"
      }
    ],
    "currency": "RWF",
    "debitParty": [
      {
        "key": "accountid",
        "value": "1"
      }
    ]
  }
}

```

### Example Output - Callback

```
{
  "serverCorrelationId": "2e0123f2-6c2f-461f-b571-5abcbf066730",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "20253",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "368a0ddb-d580-4675-93ba-f8c7ee841e77",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640797394562",
  "pollLimit": 100
}

status
    200

```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
