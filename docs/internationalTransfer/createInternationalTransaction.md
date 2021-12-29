# Create an International Transfer Transaction

`Here, createInternationalTransaction creates a POST request to /transactions/type/{transactionType}`

> `Provided with a valid object representation, this endpoint allows for a new transaction to be created for a given transaction type 'inttransfer' passed via the URL.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createInternationalTransaction",
  "data": {
    "amount": "100.00",
    "creditParty": [
      {
        "key": "accountid",
        "value": "2000"
      }
    ],
    "currency": "GBP",
    "debitParty": [
      {
        "key": "accountid",
        "value": "2999"
      }
    ],
    "internationalTransferInformation": {
      "originCountry": "GB",
      "quotationReference": "{{quotationReference}}",
      "quoteId": "{{quoteId}}",
      "receivingCountry": "RW",
      "remittancePurpose": "personal",
      "relationshipSender": "none",
      "deliveryMethod": "agent",
      "sendingServiceProviderCountry": "AD"
    },
    "senderKyc": {
      "nationality": "GB",
      "dateOfBirth": "1970-07-03T11:43:27.405Z",
      "occupation": "Manager",
      "employerName": "MFX",
      "contactPhone": "+447125588999",
      "gender": "m",
      "emailAddress": "luke.skywalkeraaabbb@gmail.com",
      "birthCountry": "GB",
      "idDocument": [
        {
          "idType": "nationalidcard",
          "idNumber": "1234567",
          "issueDate": "2018-07-03T11:43:27.405Z",
          "expiryDate": "2021-07-03T11:43:27.405Z",
          "issuer": "UKPA",
          "issuerPlace": "GB",
          "issuerCountry": "GB",
          "otherIdDescription": "test"
        }
      ],
      "postalAddress": {
        "country": "GB",
        "addressLine1": "111 ABC Street",
        "city": "New York",
        "stateProvince": "New York",
        "postalCode": "ABCD"
      },
      "subjectName": {
        "title": "Mr",
        "firstName": "Luke",
        "middleName": "R",
        "lastName": "Skywalker",
        "fullName": "Luke R Skywalker",
        "nativeName": "ABC"
      }
    },
    "requestingOrganisation": {
      "requestingOrganisationIdentifierType": "organisationid",
      "requestingOrganisationIdentifier": "testorganisation"
    }
  }
}
```

### Example Output -Callback

```
{
  "serverCorrelationId": "2c730c53-c858-45dc-a4ba-428d2b506119",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "18514",
  "pollLimit": 100
}

status:
    202
```

### Example Output - Polling

```
{
  "serverCorrelationId": "91787a40-c6c8-43c4-aab5-4d53368a73bd",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1640012929598",
  "pollLimit": 100
}

status:
    200
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the Transaction object.

---