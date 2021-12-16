# Update a Transaction Batch

`Here, updateBatchTransaction creates a PATCH request to /batchtransactions/{batchId}`

> `This endpoint updates a specific transaction batch. Only the batchStatus field can be modified. The Batch Status is set to 'approved'`

### Usage/Examples

```
{
  "batchId": "REF-1635833835849",
  "type": "updateBatchTransaction"
}
```

### Example Output

```
{
  "serverCorrelationId": "3ef8f464-8da2-4fc7-8921-ed03b73a2187",
  "status": "completed",
  "notificationMethod": "callback",
  "objectReference": "REF-1635833835849",
  "pollLimit": 100
}

status:
    200
```
