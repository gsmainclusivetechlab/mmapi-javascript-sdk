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

### Example Output - Callback

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
### Example Output - Polling 

```
{
  "serverCorrelationId": "4fcd4b5d-be3b-4a31-a269-330ce9cd5334",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640011404363",
  "pollLimit": 100
}
status:
    200
```
---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
