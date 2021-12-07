# View specific Authorisation Code linked to an account `(viewAuthorisationCode)`

Here, `viewAuthorisationCode` creates a request to /accounts/{identifierType}/{identifier}/authorisationcodes or /accounts/{accountId}/authorisationcodes depending on the number of account IDs provided.

## Usage/Examples

### Example Input

```
{
   "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "authorisationCode": "7006e6d7-d0e4-4cda-9300-8cb42bbf8915",
  "type": "createAuthorisationCode",
  "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

onSuccess:

```
response:

{
  "authorisationCode": "7006e6d7-d0e4-4cda-9300-8cb42bbf8915",
  "codeState": "active",
  "amount": "200.00",
  "currency": "RWF",
  "amountType": "exact",
  "codeLifetime": 600,
  "holdFundsIndicator": true,
  "redemptionAccountIdentifiers": [
    {
      "key": "msisdn",
      "value": "+449999999"
    },
    {
      "key": "walletid",
      "value": "1"
    },
    {
      "key": "accountid",
      "value": "1"
    },
    {
      "key": "mandatereference",
      "value": "REF-1583141449478"
    },
    {
      "key": "linkref",
      "value": "REF-1473082363913"
    },
    {
      "key": "linkref",
      "value": "REF-1579002505974"
    },
    {
      "key": "mandatereference",
      "value": "REF-1599647601577"
    },
    {
      "key": "mandatereference",
      "value": "REF-1613740431016"
    },
    {
      "key": "linkref",
      "value": "REF-1613740470938"
    },
    {
      "key": "mandatereference",
      "value": "REF-1613740615603"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614024918957"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614025064838"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614025221748"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614097239538"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614163668072"
    },
    {
      "key": "linkref",
      "value": "REF-1614172481727"
    },
    {
      "key": "linkref",
      "value": "REF-1614172597261"
    },
    {
      "key": "linkref",
      "value": "REF-1614172656091"
    },
    {
      "key": "linkref",
      "value": "REF-1614173800129"
    },
    {
      "key": "linkref",
      "value": "REF-1614173872194"
    },
    {
      "key": "linkref",
      "value": "REF-1614174252665"
    },
    {
      "key": "linkref",
      "value": "REF-1614179612570"
    },
    {
      "key": "linkref",
      "value": "REF-1614255971622"
    },
    {
      "key": "linkref",
      "value": "REF-1614256172931"
    },
    {
      "key": "linkref",
      "value": "REF-1614256998924"
    },
    {
      "key": "linkref",
      "value": "REF-1614257709534"
    },
    {
      "key": "linkref",
      "value": "REF-1614258016942"
    },
    {
      "key": "linkref",
      "value": "REF-1614258036195"
    },
    {
      "key": "linkref",
      "value": "REF-1614258054851"
    },
    {
      "key": "linkref",
      "value": "REF-1614258135135"
    },
    {
      "key": "linkref",
      "value": "REF-1614258167890"
    },
    {
      "key": "linkref",
      "value": "REF-1614258209978"
    },
    {
      "key": "linkref",
      "value": "REF-1614258254108"
    },
    {
      "key": "linkref",
      "value": "REF-1614258289916"
    },
    {
      "key": "linkref",
      "value": "REF-1614258353721"
    },
    {
      "key": "linkref",
      "value": "REF-1614258806823"
    },
    {
      "key": "linkref",
      "value": "REF-1614259484113"
    },
    {
      "key": "linkref",
      "value": "REF-1614259518394"
    },
    {
      "key": "linkref",
      "value": "REF-1614259655836"
    },
    {
      "key": "linkref",
      "value": "REF-1614259656462"
    },
    {
      "key": "linkref",
      "value": "REF-1614336223173"
    },
    {
      "key": "linkref",
      "value": "REF-1614336223786"
    },
    {
      "key": "mandatereference",
      "value": "REF-1614598472228"
    },
    {
      "key": "linkref",
      "value": "REF-1614618683962"
    },
    {
      "key": "linkref",
      "value": "REF-1614618684550"
    },
    {
      "key": "linkref",
      "value": "REF-1614677481537"
    },
    {
      "key": "linkref",
      "value": "REF-1614677481929"
    },
    {
      "key": "linkref",
      "value": "REF-1614685684136"
    },
    {
      "key": "linkref",
      "value": "REF-1614685684490"
    },
    {
      "key": "linkref",
      "value": "REF-1614687536271"
    },
    {
      "key": "linkref",
      "value": "REF-1614687536627"
    },
    {
      "key": "linkref",
      "value": "REF-1614688493891"
    },
    {
      "key": "linkref",
      "value": "REF-1614688494227"
    },
    {
      "key": "linkref",
      "value": "REF-1614688615922"
    },
    {
      "key": "linkref",
      "value": "REF-1614688616259"
    },
    {
      "key": "linkref",
      "value": "REF-1614689669742"
    },
    {
      "key": "linkref",
      "value": "REF-1614689670151"
    },
    {
      "key": "linkref",
      "value": "REF-1614695087258"
    },
    {
      "key": "linkref",
      "value": "REF-1614695087636"
    },
    {
      "key": "linkref",
      "value": "REF-1614695232130"
    },
    {
      "key": "linkref",
      "value": "REF-1614695232466"
    },
    {
      "key": "linkref",
      "value": "REF-1614696138661"
    },
    {
      "key": "linkref",
      "value": "REF-1614696139245"
    },
    {
      "key": "linkref",
      "value": "REF-1614696547822"
    },
    {
      "key": "linkref",
      "value": "REF-1614696548450"
    },
    {
      "key": "linkref",
      "value": "REF-1614779009971"
    },
    {
      "key": "linkref",
      "value": "REF-1614779015041"
    },
    {
      "key": "linkref",
      "value": "REF-1614783611972"
    },
    {
      "key": "linkref",
      "value": "REF-1614783612576"
    },
    {
      "key": "linkref",
      "value": "REF-1614858826142"
    },
    {
      "key": "linkref",
      "value": "REF-1614858826535"
    },
    {
      "key": "linkref",
      "value": "REF-1614861892672"
    },
    {
      "key": "linkref",
      "value": "REF-1614861892995"
    },
    {
      "key": "linkref",
      "value": "REF-1614873771867"
    },
    {
      "key": "linkref",
      "value": "REF-1614873772193"
    },
    {
      "key": "linkref",
      "value": "REF-1614874240011"
    },
    {
      "key": "linkref",
      "value": "REF-1614874240605"
    },
    {
      "key": "linkref",
      "value": "REF-1614956212034"
    },
    {
      "key": "linkref",
      "value": "REF-1614956212433"
    },
    {
      "key": "linkref",
      "value": "REF-1614956761814"
    },
    {
      "key": "linkref",
      "value": "REF-1614956762388"
    },
    {
      "key": "mandatereference",
      "value": "REF-1627463546650"
    },
    {
      "key": "mandatereference",
      "value": "REF-1627463574933"
    },
    {
      "key": "mandatereference",
      "value": "REF-1627463646773"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637758230837"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637758246333"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637758246666"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637758263349"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637759433028"
    },
    {
      "key": "mandatereference",
      "value": "REF-1637759481627"
    },
    {
      "key": "linkref",
      "value": "REF-1638168537556"
    },
    {
      "key": "linkref",
      "value": "REF-1638168537976"
    },
    {
      "key": "linkref",
      "value": "REF-1638168563421"
    },
    {
      "key": "linkref",
      "value": "REF-1638171072599"
    },
    {
      "key": "linkref",
      "value": "REF-1638171121877"
    },
    {
      "key": "linkref",
      "value": "REF-1638171141861"
    },
    {
      "key": "linkref",
      "value": "REF-1638171142118"
    },
    {
      "key": "linkref",
      "value": "REF-1638172486630"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638172505362"
    },
    {
      "key": "linkref",
      "value": "REF-1638172894160"
    },
    {
      "key": "linkref",
      "value": "REF-1638172904232"
    },
    {
      "key": "linkref",
      "value": "REF-1638172941080"
    },
    {
      "key": "linkref",
      "value": "REF-1638172948735"
    },
    {
      "key": "linkref",
      "value": "REF-1638173001975"
    },
    {
      "key": "linkref",
      "value": "REF-1638173009795"
    },
    {
      "key": "linkref",
      "value": "REF-1638173019679"
    },
    {
      "key": "linkref",
      "value": "REF-1638173025535"
    },
    {
      "key": "linkref",
      "value": "REF-1638180081592"
    },
    {
      "key": "linkref",
      "value": "REF-1638180143213"
    },
    {
      "key": "linkref",
      "value": "REF-1638335434089"
    },
    {
      "key": "linkref",
      "value": "REF-1638335440708"
    },
    {
      "key": "mandatereference",
      "value": "REF-1638335490120"
    }
  ],
  "creationDate": "2021-11-17T04:45:43",
  "modificationDate": "2021-11-17T04:45:43",
  "requestDate": "2021-11-17T04:45:43"
}

header:
{
  "access-control-allow-headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
  "access-control-allow-methods": "DELETE,GET,HEAD,OPTIONS,PATCH,POST,PUT",
  "access-control-allow-origin": "*",
  "content-length": "154",
  "content-type": "application/json; charset=utf-8",
  "date": "Tue, 07 Dec 2021 06:43:33 GMT",
  "etag": "W/\"9a-2OzSO7YK/EW4aY4bXcNiaDXc+B8\"",
  "x-amz-apigw-id": "J91XUED6rPEFZ-A=",
  "x-amzn-remapped-content-length": "154",
  "x-amzn-requestid": "05046859-db02-4751-80b6-3677f4cb40fb",
  "x-amzn-trace-id": "Root=1-61af0295-5a1941fd2eecf3305cc50f76;Sampled=0",
  "x-powered-by": "Express"
}

status:
    200


```

onFailure

```
response:

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Authorization code does not exists",
  "errorDateTime": "2021-12-07T06:53:34.908Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "7006e6d7-d0e4-4cda-9312-8cb42bbf8915"
    }
  ]
}

status:
    404
```
