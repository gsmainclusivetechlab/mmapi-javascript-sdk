# Establish an Account to Account Link

`Here, createAccountLink creates a POST request to /accounts/{identifierType}/{identifier}/links`

> `Provided with a valid object representation, this endpoint allows a new link to be created for a specific account where one identifier suffices to uniquely identify an account.`


### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "type": "createAccountLink",
  "data": {
    "sourceAccountIdentifiers": [
      {
        "key": "accountid",
        "value": "2999"
      }
    ],
    "status": "active",
    "mode": "both",
    "customData": [
      {
        "key": "keytest",
        "value": "keyvalue"
      }
    ],
    "requestingOrganisation": {
      "requestingOrganisationIdentifierType": "organisationid",
      "requestingOrganisationIdentifier": "12345"
    }
  }

```

### Example Output - Callback

```
{
  "serverCorrelationId": "ac5c0f33-2e6a-4571-80e1-fab7ce184f38",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "614",
  "pollLimit": 100
}

status
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "ebb2c117-a746-4a98-82d9-4547b6563352",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640796936488",
  "pollLimit": 100
}

status
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewAccountLink()](viewAccountLink.md) function to acquire the final representation of the AccountLink object.

---
