# Create A Reversal

Here, `createReversal` creates a POST request to /transactions/{transactionReference}/reversals

> `Provided with a valid object representation, this endpoint allows for a new reversal to be created`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "transactionReference": "REF-1640674886743",
  "type": "createReversal"
}
```

### Example Output - Callback

```
{
  "serverCorrelationId": "71ab5988-e3b3-42e3-9ea8-a45c5ab37a47",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "19689",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
   "serverCorrelationId":"3ce961a6-a345-4fe7-898d-69d681e089ce",
   "status":"pending",
   "notificationMethod":"polling",
   "objectReference":"19689",
   "pollLimit":100
}

status
    202
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
