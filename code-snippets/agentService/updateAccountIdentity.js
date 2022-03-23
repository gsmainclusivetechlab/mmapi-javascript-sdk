# Update an Account Identity

Here, `updateAccountIdentity` creates a PATCH request to /accounts/{accountId}/identities/{identityId}`

> `This endpoint updates an account identity. identityStatus, kycVerificationStatus, kycVerificationEntity and kycLevel field updates are permitted.`

### Usage/Examples

```
{
  "accountId": [
    {
      "key": "msisdn",
      "value": "+447777777774"
    }
  ],
  "identityId": "1",
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "updateAccountIdentity",
  "data": [
    {
      "op": "replace",
      "path": "/kycVerificationStatus",
      "value": "verified"
    }
  ]
}
```

### Example Output - Callback

```
{
  "serverCorrelationId": "1e0a6155-9ae5-467b-b496-3d1b0c8a1a5c",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "111",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "b40df0db-22e4-4bc3-a1cd-804ff23ac1bc",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "xxxxx@+33111123456",
  "pollLimit": 100
}

status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState](viewRequestState.md) for the polling mechanism to receive the status of a request, and the [viewAccount](viewAccount.md) to acquire the final representation of the Account object.

---
