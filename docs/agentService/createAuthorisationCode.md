
# Create A Withdrawal Transaction

`createAuthorisationCode` creates a POST request to /accounts/{identifierType}/{identifier}/authorisationcodes

> `Provided with a valid object representation, this endpoint is used to obtain a pre-authorised code`

### Usage/Examples

`
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createAuthorisationCode",
  "data": {
    "requestDate": "2018-07-03T10:43:27.405Z",
    "currency": "GBP",
    "amount": "1000.00"
  }
}

`


### Example Output - Callback

`
{
  "serverCorrelationId": "f0a8d71f-ff8c-4f28-8bdf-781a4c952234",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "2589",
  "pollLimit": 100
}

status
    202

`


### Example Output - Polling

`
{
  "serverCorrelationId": "38ed6831-ea92-4201-a6f6-98bef8ac8552",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "4f81cf9b-75a5-458e-89f7-0b2a7530cca0",
  "pollLimit": 100
}

status
    200
`

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---