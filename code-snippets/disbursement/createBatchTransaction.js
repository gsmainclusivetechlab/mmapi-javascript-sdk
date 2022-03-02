{
  "callbackUrl": "https://end13wxm5t7fgd6.m.pipedream.net/",
  "type": "createBatchTransaction",
  "data": {
    "transactions": [
      {
        "type": "billpay",
        "amount": "200.00",
        "currency": "RWF",
        "debitParty": [
          {
            "key": "accountid",
            "value": "1"
          }
        ],
        "creditParty": [
          {
            "key": "accountid",
            "value": "30"
          }
        ]
      },
      {
        "type": "billpay",
        "amount": "400.00",
        "currency": "RWF",
        "debitParty": [
          {
            "key": "accountid",
            "value": "1"
          }
        ],
        "creditParty": [
          {
            "key": "accountid",
            "value": "30"
          }
        ]
      }
    ]
  }
}