# Setup a Recurring Payment

`Here, createAccountDebitMandate creates a POST request to /accounts/{identifierType}/{identifier}/debitmandates`

> `Provided with a valid object representation, this endpoint allows for a new debit mandate to be created for a specific account where one identifier suffices to uniquely identify an account.`

### Usage/Examples

```
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createAccountDebitMandate",
  "data": {
    "payee": [
      {
        "key": "accountId",
        "value": "1"
      }
    ],
    "startDate": "2018-11-20",
    "requestDate": "2021-11-24T12:44:34.223Z"
  },
 "onSuccess":(response, header, status)=>{},
 "onFailure": (response, status) => {}
}

```

### Example Output - Callback

```
{
  "serverCorrelationId": "4efc83f8-7838-439d-aabd-2666ee12c508",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "704",
  "pollLimit": 100
}

status
  202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "cfd042c0-f658-4a91-b540-eab5fff9ed25",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640751902706",
  "pollLimit": 100
}

status
  200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewAccountDebitMandate()](viewAccountDebitMandate.md) function to acquire the final representation of the DebitMandate object.

---
