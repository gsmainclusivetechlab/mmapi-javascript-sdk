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

### Example Output

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
