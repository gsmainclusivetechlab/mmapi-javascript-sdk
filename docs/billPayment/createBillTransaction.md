# Create A BillPay Transaction

`createBillTransaction` creates a POST request to /transactions/type/billpay

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'billpay' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createBillTransaction",
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
  "serverCorrelationId": "9a94a616-d4d5-4029-b244-aa6f59e4fc0a",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "20567",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "30aca4a1-3c69-4bc9-ac76-99f460c9fa62",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1641194757932",
  "pollLimit": 100
}

status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
