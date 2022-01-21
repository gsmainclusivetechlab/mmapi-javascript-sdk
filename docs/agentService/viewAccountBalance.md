# View Account Balance

Here, if only a single account ID is provided, `viewAccountBalance` creates a GET request to /accounts/{identifierType}/{identifier}/balance

> `This endpoint returns the balance of an account where one identifier suffices to uniquely identify an account.`

Here, if Multiple account IDs are provided, `viewAccountBalance` creates a GET request to /accounts/{accountId}/balance

> `This endpoint returns the balance of an account where a single identifier is not sufficient to identify an account.`

## Usage/Examples

```
{
    "accountId": [
        {
        "key": "accountid",
        "value": "1"
        }
    ],
    "type": "viewAccountBalance",
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

```
{
  "currentBalance": "1000000000.00",
  "availableBalance": "0.00",
  "reservedBalance": "0.00",
  "unclearedBalance": "0.00",
  "currency": "GBP",
  "accountStatus": "available"
}

status:
    200
```
