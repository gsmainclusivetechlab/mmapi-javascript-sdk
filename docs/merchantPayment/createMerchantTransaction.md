# Create a MerchantPay Transaction

Here, `createMerchantTransaction` creates a POST request to /transactions/type/merchantpay

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'merchantpay' passed via the URL.`

## Usage/Examples

```
{
  "type": "createMerchantTransaction",
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
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
    "currency": "RWF",
  }
 "getClientCorrelationId":(response)=>{},
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}
```

### Example Output

```
{
  "serverCorrelationId": "e8eecfa8-090b-4c97-aed4-3f63d92a0831",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "15952",
  "pollLimit": 100
}

status:
    202
```


---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---
