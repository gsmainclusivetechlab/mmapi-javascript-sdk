# Create a MerchantPay Transaction with Pre-Authorized Code

Here, `createMerchantTransaction` creates a POST request to /transactions/type/merchantpay

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'merchantpay' passed via the URL.`

## Usage/Examples

```
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
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
    "oneTimeCode": "e8f51f4e-c8d6-4b4e-873b-fcdbda22523d"
  },
 "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
 "type": "createMerchantTransaction",
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

## Note

> `callbackUrl is an optional parameter. If no callbackUrl is provided during Authentication Initialization or with the Input data, the notification method will be polling.`
