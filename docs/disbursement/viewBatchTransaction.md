# View A Transaction Batch

`Here, viewBatchTransaction(batchId) creates a GET request to /batchtransactions/{batchId}`

> `This endpoint returns the current status of a batch transaction.`

### Usage/Examples

```
{
  "batchId": "REF-1635833835849",
  "type": "viewBatchTransaction"
}
```

### Example Output

```
{
  "batchId": "REF-1635833835849",
  "batchStatus": "completed",
  "approvalDate": "2021-11-24T12:01:32",
  "completionDate": "2021-11-24T12:01:32",
  "processingFlag": false,
  "completedCount": 0,
  "rejectionCount": 0,
  "parsingSuccessCount": 0,
  "creationDate": "2021-11-02T06:17:16",
  "modificationDate": "2021-11-24T12:01:32",
  "requestDate": "2021-11-02T06:17:16"
}

status:
  200
```
