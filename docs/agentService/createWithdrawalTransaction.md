# Create A Withdrawal Transaction

`createWithdrawalTransaction` creates a POST request to /transactions/type/withdrawal

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createWithdrawalTransaction",
  "data": {
    "amount": "200.00",
    "debitParty": [
      {
        "key": "accountid",
        "value": "2999"
      }
    ],
    "creditParty": [
      {
        "key": "accountid",
        "value": "2999"
      }
    ],
    "currency": "RWF"
  }
}
```

### Example Output - Callback

```
{
  "serverCorrelationId": "8a128806-cb63-4682-90cd-eefe936fd117",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "20951",
  "pollLimit": 100
}

status
    202

```

### Example Output - Polling

```
{
  "serverCorrelationId": "ca9309e7-d10b-4da0-ac3b-05c7cf685d08",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1641225790305",
  "pollLimit": 100
}
status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
