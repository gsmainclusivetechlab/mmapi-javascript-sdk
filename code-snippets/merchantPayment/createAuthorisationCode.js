{
   "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "type": "createAuthorisationCode",
  "data": {
    "amount": "200.00",
    "currency": "RWF",
    "amountType": "exact",
    "codeLifetime": "600",
    "holdFundsIndicator": true,
    "redemptionAccountIdentifiers": [
      {
        "key": "accountid",
        "value": "1"
      }
    ]
  },
  "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}