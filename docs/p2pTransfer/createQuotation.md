# Create a New Quotation

`Here, createQuotation creates a POST request to /quotations`

> `Provided with a valid object representation, this endpoint allows for a new quotation to be created.`

### Usage/Examples

```
{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createQuotation",
  "data": {
    "creditParty": [
      {
        "key": "accountid",
        "value": "2000"
      }
    ],
    "debitParty": [
      {
        "key": "accountid",
        "value": "2999"
      }
    ],
    "requestAmount": "75.30",
    "requestCurrency": "RWF",
    "requestDate": "2018-07-03T11:43:27.405Z",
    "type": "inttransfer",
    "subType": "abc",
    "chosenDeliveryMethod": "agent",
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
    "customData": [
      {
        "key": "keytest",
        "value": "keyvalue"
      }
    ],
    "sendingServiceProviderCountry": "AD",
    "originCountry": "AD",
    "receivingCountry": "AD"
  }
}
```

### Example Output

```
{
  "serverCorrelationId": "51b39213-6f46-48b7-ac71-d415a0045273",
  "status": "pending",
  "notificationMethod": "callback",
  "objectReference": "1528",
  "pollLimit": 100
}

status:
    202
```
