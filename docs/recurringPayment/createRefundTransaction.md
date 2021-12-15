# Create a Refund Transaction

Here, `createRefundTransaction` creates a POST request to /transactions/type/adjustment

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'adjustment' passed via the URL.`

## Usage/Examples

```
{
   "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
    "type": "createRefundTransaction",
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
  "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

```
{
  "serverCorrelationId": "cf60aafd-9ec0-47cb-b851-f61a37e4b9b2",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "15960",
  "pollLimit": 100
}

status:
    202
```
