# Make a Bill Payment

Here, `createBillPayment` creates a POST request to /accounts/{identifierType}/{identifier}/bills/{billReference}/payments

> `Provided with a valid object representation, this endpoint allows for a new bill payment to be created for a specific account where one identifier suffices to uniquely identify an account.`



### Usage/Examples

```
{
  "billReference": "REF-000001",
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "type": "createBillPayment",
  "data": {
    "currency": "GBP",
    "amountPaid": "5.30"
  }
}

```

### Example Output - Callback

```
{
  "serverCorrelationId": "ffffdbb5-9021-47bf-8ec7-221d7260705d",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1357",
  "pollLimit": 100
}

status
    202
    
```

### Example Output - Polling

```
{
  "serverCorrelationId": "538162a3-84e1-4ad8-88d3-db8bd9171892",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-000001",
  "pollLimit": 100
}

status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewBillPayment()](viewBillPayment.md) function to acquire the final representation of the BillPay object.

---
