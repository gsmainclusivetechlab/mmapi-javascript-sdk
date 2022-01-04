# Create an Account

`Here, createAccount creates a POST request to /accounts/individual`

> `Provided with a valid object representation, this endpoint allows for a new account to be created`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createAccount",
  "data": {
    "accountIdentifiers": [
      {
        "key": "msisdn",
        "value": "+447777777774"
      }
    ],
    "identity": [
      {
        "identityKyc": {
          "birthCountry": "AD",
          "contactPhone": "+447777777777",
          "dateOfBirth": "2000-11-20",
          "emailAddress": "xyz@xyz.com",
          "employerName": "string",
          "gender": "m",
          "idDocument": [
            {
              "idType": "passport",
              "idNumber": "111111",
              "issueDate": "2018-11-20",
              "expiryDate": "2018-11-20",
              "issuer": "ABC",
              "issuerPlace": "DEF",
              "issuerCountry": "AD"
            }
          ],
          "nationality": "AD",
          "occupation": "Miner",
          "postalAddress": {
            "addressLine1": "37",
            "addressLine2": "ABC Drive",
            "addressLine3": "string",
            "city": "Berlin",
            "stateProvince": "string",
            "postalCode": "AF1234",
            "country": "AD"
          },
          "subjectName": {
            "title": "Mr",
            "firstName": "H",
            "middleName": "I",
            "lastName": "J",
            "fullName": "H I J",
            "nativeName": "string"
          }
        },
        "accountRelationship": "accountholder",
        "kycVerificationStatus": "verified",
        "kycVerificationEntity": "ABC Agent",
        "kycLevel": 1,
        "customData": [
          {
            "key": "test",
            "value": "custom"
          }
        ]
      }
    ],
    "accountType": "string",
    "customData": [
      {
        "key": "test",
        "value": "custom1"
      }
    ],
    "fees": [
      {
        "feeType": "string",
        "feeAmount": "5.46",
        "feeCurrency": "AED"
      }
    ],
    "registeringEntity": "ABC Agent",
    "requestDate": "2021-02-17T15:41:45.194Z"
  }
}

```

### Example Output - Callback

```
{
  "serverCorrelationId": "1a144d42-af9a-43b9-a416-0c34051a28ec",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "332",
  "pollLimit": 100
}

```

### Example Output - Polling

```
{
  "serverCorrelationId": "9d1ca7a1-de5c-470f-a39b-cea9845ba715",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "msisdn@+447777777774",
  "pollLimit": 100
}
```

---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewAccount()](viewAccount.md) function to acquire the final representation of the Account object.

---
