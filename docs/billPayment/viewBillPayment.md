# Retrieve Bill Payments for a Given Bill

1. `viewBillPayment` creates a GET request to /accounts/{identifierType}/{identifier}/bills/{billReference}/payments

> `This endpoint allows for bill payments for a specific account to be returned where one identifier suffices to uniquely identify an account.`


### Usage/Examples

```
{
  "billReference": "REF-000001",
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "filter": [
    {
      "key": "offset",
      "value": "0"
    },
    {
      "key": "limit",
      "value": "10"
    }
  ],
  "type": "viewBillPayment"
}

```

### Example Output

```
[
  {
    "customerReference": "customer ref 0001",
    "billPaymentStatus": "unpaid",
    "amountPaid": "0.99",
    "currency": "GBP",
    "supplementaryBillReferenceDetails": [
      {
        "paymentReferenceType": "type 1",
        "paymentReferenceValue": "value 1"
      }
    ],
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "customerReference": "customer ref 0001",
    "billPaymentStatus": "unpaid",
    "amountPaid": "0.99",
    "currency": "GBP",
    "supplementaryBillReferenceDetails": [
      {
        "paymentReferenceType": "type 1",
        "paymentReferenceValue": "value 1"
      }
    ],
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  },
  {
    "billPaymentStatus": "unpaid",
    "amountPaid": "55.00",
    "currency": "AED",
    "requestDate": "2021-02-18T08:21:27",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-18T08:20:58"
  }
]

status 
    200
```
