# Retrieve a Set of Bills

`viewAccountBills` creates a GET request to /accounts/{identifierType}/{identifier}/bills

> `This endpoint returns bills linked to an account where one identifier suffices to uniquely identify an account.`


### Usage/Examples

```
{
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
  "type": "viewAccountBills"
}

```

### Example Output

```

[
  {
    "billReference": "REF-000001",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-01-17T00:00:00",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-000004",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-000005",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-17T00:00:00",
    "modificationDate": "2021-02-17T00:00:00",
    "customData": [
      {
        "key": "customKey1",
        "value": "customValue1"
      },
      {
        "key": "customKey2",
        "value": "customValue2"
      },
      {
        "key": "customKey3",
        "value": "customValue3"
      },
      {
        "key": "customKey4",
        "value": "customValue4"
      },
      {
        "key": "customKey5",
        "value": "customValue5"
      },
      {
        "key": "customKey6",
        "value": "customValue6"
      },
      {
        "key": "customKey7",
        "value": "customValue7"
      },
      {
        "key": "customKey8",
        "value": "customValue8"
      },
      {
        "key": "customKey9",
        "value": "customValue9"
      },
      {
        "key": "customKey10",
        "value": "customValue10"
      },
      {
        "key": "customKey11",
        "value": "customValue11"
      },
      {
        "key": "customKey12",
        "value": "customValue12"
      },
      {
        "key": "customKey13",
        "value": "customValue13"
      },
      {
        "key": "customKey14",
        "value": "customValue14"
      },
      {
        "key": "customKey15",
        "value": "customValue15"
      },
      {
        "key": "customKey16",
        "value": "customValue16"
      },
      {
        "key": "customKey17",
        "value": "customValue17"
      },
      {
        "key": "customKey18",
        "value": "customValue18"
      },
      {
        "key": "customKey19",
        "value": "customValue19"
      },
      {
        "key": "customKey20",
        "value": "customValue20"
      }
    ],
    "metadata": [
      {
        "key": "metadata1",
        "value": "metadataValue1"
      }
    ]
  },
  {
    "billReference": "REF-000006",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00",
    "customData": [
      {
        "key": "customKey1",
        "value": "customValue1"
      }
    ]
  },
  {
    "billReference": "REF-000007",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-000008",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-000009",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-0000010",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-0000011",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  },
  {
    "billReference": "REF-0000012",
    "amountDue": "50.00",
    "currency": "GBP",
    "dueDate": "2016-08-02",
    "minimumAmountDue": "0.00",
    "creationDate": "2021-02-15T11:44:58",
    "modificationDate": "2021-02-17T00:00:00"
  }
]

status
    200
```
