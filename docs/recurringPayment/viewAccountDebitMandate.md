# Retrieve a Debit Mandate

`viewAccountDebitMandate` creates a GET request to /accounts/{identifierType}/{identifier}/debitmandates/{mandateReference}

> `This endpoint returns a specific debit mandate linked to an account where one identifier suffices to uniquely identify an account.`



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
  "mandateReference": "REF-1637758263349",
  "type": "viewAccountDebitMandate"
}

```

### Example Output

```

{
  "startDate": "2018-11-20",
  "numberOfPayments": 0,
  "mandateStatus": "active",
  "requestDate": "2021-11-24T12:44:34",
  "mandateReference": "REF-1637758263349",
  "creationDate": "2021-11-24T12:51:03",
  "modificationDate": "2021-11-24T12:51:03",
  "payee": [
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
    },
    {
      "key": "mandatereference",
      "value": "REF-1639135100909"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639135104790"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639135110742"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639135130282"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639141045325"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639141049525"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639141054205"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639141069168"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387429783"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387435604"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387442336"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387459902"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387547107"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639387567972"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639393314559"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639393319493"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639393325626"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639393340218"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639495383663"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639495385477"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639495408479"
    },
    {
      "key": "linkref",
      "value": "REF-1639634343360"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639740338536"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639740340056"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639740367083"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744147029"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744148511"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744171944"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744195563"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744196908"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639744224451"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639986862852"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639986867808"
    },
    {
      "key": "mandatereference",
      "value": "REF-1639986873564"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640168068933"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640168168179"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640168378727"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640168722282"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252420215"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252426452"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252433112"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252449240"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252615312"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252620610"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252627263"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640252644708"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253128100"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253133676"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253141344"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253158631"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253861729"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253868188"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253874939"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253891020"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253929045"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253934845"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253941631"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253957605"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253985045"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253990759"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640253999987"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254017113"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254091848"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254097466"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254104143"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254144241"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254149719"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254158314"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254396956"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254402565"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254410353"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254427439"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254600918"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254608265"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254616112"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640254632935"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640255549510"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640255556704"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640255563564"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640255581982"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640257220848"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640257226807"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640257233756"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640257250467"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640670500083"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688934446"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688939867"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688943897"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688953587"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688980787"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688985252"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688989489"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640688999208"
    },
    {
      "key": "linkref",
      "value": "REF-1640749731577"
    },
    {
      "key": "linkref",
      "value": "REF-1640749859806"
    },
    {
      "key": "linkref",
      "value": "REF-1640749870799"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640751859978"
    },
    {
      "key": "mandatereference",
      "value": "REF-1640751902706"
    },
    {
      "key": "linkref",
      "value": "REF-1640796892807"
    },
    {
      "key": "linkref",
      "value": "REF-1640796936488"
    }
  ]
}

status
    200

```
