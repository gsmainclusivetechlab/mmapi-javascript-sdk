# Retrieve a Missing API Response` (viewResponse)`

Here, `viewResponse` creates a request to /responses/{clientCorrelationId}

## Usage/Examples

### Example Input

```
{
  "clientCorrelationId": "cc56daf1-b2dd-4553-aeba-43d61d81f5c8",
  "type": "viewResponse",
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

onSuccess:

```
response:
{
  "transactionReference": "REF-1635943592995",
  "creditParty": [
    {
      "key": "accountid",
      "value": "30"
    }
  ],
  "debitParty": [
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
  "type": "merchantpay",
  "transactionStatus": "completed",
  "amount": "200.00",
  "currency": "RWF",
  "creationDate": "2021-11-03T12:46:33",
  "modificationDate": "2021-11-03T12:46:33",
  "requestDate": "2021-11-03T12:46:33"
}

status:
    200
```

onFailure:

```
response

{
  "errorCategory": "identification",
  "errorCode": "identifierError",
  "errorDescription": "Resource does not exists",
  "errorDateTime": "2021-12-07T08:33:10.964Z",
  "errorParameters": [
    {
      "key": "providedValue",
      "value": "cc56daf1-b2dd-4553-aeba-43d21d81f5c8"
    }
  ]
}

status
    404
```
