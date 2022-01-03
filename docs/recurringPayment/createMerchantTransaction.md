# Take a Recurring Payment

`createMerchantTransaction` creates a POST request to /transactions/type/merchantpay

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'merchantpay' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createMerchantTransaction",
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
  },
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}

```

### Example Output - Callback

```
{
  "serverCorrelationId": "0ae48e03-1656-45f6-8863-d387b35dc5cc",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "20250",
  "pollLimit": 100
}

```

### Example Output - Polling

```
{
  "serverCorrelationId": "ca9346a5-8d4f-4873-bccb-db7ca0994e1d",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640795608055",
  "pollLimit": 100
}

```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
