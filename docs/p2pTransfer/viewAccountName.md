# View Account Name

`Here, if only a single account ID is provided, viewAccountName creates a GET request to /accounts/{identifierType}/{identifier}/accountname`

> `This endpoint returns the name of an account holder where one identifier suffices to uniquely identify an account.`

`Here, if Multiple account IDs are provided, viewAccountName creates a GET request to GET /accounts/{AccountIdentifiers}/accountname`

> `This endpoint returns the name of an account holder where a single identifier is not sufficient to identify an account.`

### Usage/Examples

```
{
  "accountId": [
    {
      "key": "accountid",
      "value": "1"
    }
  ],
  "type": "viewAccountName"
}
```

### Example Output

```
{
  "name": {
    "title": "Mr",
    "firstName": "Jeff",
    "middleName": "James",
    "lastName": "Jimmer",
    "fullName": "Jeff Jimmer"
  },
  "lei": "AAAA0012345678901299"
}

status:
    200
```
