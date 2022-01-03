# Create A Deposit Transaction

`createDepositTransaction` creates a POST request to /transactions/type/deposit

> `Provided with a valid object representation, this endpoint allows for a new transaction deposit to be created`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createDepositTransaction",
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
  "serverCorrelationId": "975c6cb0-fd0d-46b1-8545-6b2ef4891bf5",
  "status": "completed",
  "notificationMethod": "callback",
  "objectReference": "REF-1641231006965",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "e823f05e-fd8e-418c-a559-adb690ff8303",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1641231029763",
  "pollLimit": 100
}

status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
