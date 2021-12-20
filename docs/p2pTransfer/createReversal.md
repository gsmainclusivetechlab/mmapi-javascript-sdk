# Create a Reversal

Here, `createReversal` creates a POST request to /transactions/{transactionReference}/reversals

> `Provided with a valid object representation, this endpoint allows for a new reversal to be created`

## Usage/Examples

```
{
   "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
   "transactionReference": "REF-1466171557592",
   "type": "createReversal",
   "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output - Callback

```
{
  "serverCorrelationId": "3a278629-7a0b-45df-94b8-f76cb61ed6b7",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1",
  "pollLimit": 100
}

status:
    202
```
### Example Output - Polling 

```
{
   "serverCorrelationId":"de9faa3d-0b14-4a69-b35b-dc7fce68cf08",
   "status":"pending",
   "notificationMethod":"polling",
   "objectReference":"12493",
   "pollLimit":100
}

status:
    202
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---