# View an Account

1.  Here,`viewAccount` creates a GET request to /accounts/{identifierType}/{identifier}

> `This endpoint returns the details of an account where one identifier suffices to uniquely identify an account.`

2. Here, `viewAccount` creates a GET request to /accounts/{accountId}`

> `This endpoint returns details for a given account. This API accepts multiple account identifiers`

### Usage/Examples

```
{
  "accountId": [
    {
      "key": "msisdn",
      "value": "+447777777774"
    }
  ],
  "type": "viewAccount"
}
```

### Example Output

```
{
  "accountIdentifiers": [
    {
      "key": "msisdn",
      "value": "+447777777774"
    }
  ],
  "identity": [
    {
      "identityId": "373",
      "identityType": "individual",
      "identityStatus": "active",
      "identityKyc": {
        "nationality": "AD",
        "dateOfBirth": "2000-11-20",
        "occupation": "Miner",
        "employerName": "string",
        "contactPhone": "+447777777777",
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
        },
        "emailAddress": "xyz@xyz.com",
        "birthCountry": "AD"
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
  "accountStatus": "available",
  "accountSubStatus": "subStatus",
  "fees": [
    {
      "feeType": "string",
      "feeAmount": "5.46",
      "feeCurrency": "AED"
    }
  ],
  "registeringEntity": "ABC Agent",
  "creationDate": "2022-01-03T17:42:16",
  "requestDate": "2021-02-17T15:41:45",
  "customData": [
    {
      "key": "test",
      "value": "custom1"
    }
  ]
}

```
