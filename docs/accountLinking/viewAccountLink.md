# Read a specific link for a given account.

 `viewAccountLink` creates a GET request to /accounts/{identifierType}/{identifier}/links/{linkReference}

> `This endpoint returns a specific link where one identifier suffices to uniquely identify an account.`



### Usage/Examples

```
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "linkReference": "REF-1638168563421",
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "viewAccountLink"
}

```

### Example Output

```
{
  "linkReference": "REF-1638168563421",
  "sourceAccountIdentifiers": [
    {
      "key": "accountid",
      "value": "2999"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907197912"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907232832"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907265888"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907412029"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637907483978"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637909732171"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638330257762"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638360515423"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638444910612"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639023787539"
    }
  ],
  "mode": "both",
  "status": "active",
  "requestingOrganisation": {
    "requestingOrganisationIdentifierType": "organisationid",
    "requestingOrganisationIdentifier": "12345"
  },
  "creationDate": "2021-11-29T06:49:23",
  "modificationDate": "2021-11-29T06:49:23",
  "customData": [
    {
      "key": "keytest",
      "value": "keyvalue"
    }
  ]
}

status
    200
```
