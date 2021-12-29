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

### Example Output - Callback

```
{
  "serverCorrelationId": "3ef8f464-8da2-4fc7-8921-ed03b73a2187",
  "status": "completed",
  "notificationMethod": "callback",
  "objectReference": "REF-1635833835849",
  "pollLimit": 100
}

status:
    202
```
### Example Output - Polling

```
{
  "serverCorrelationId": "090b18bd-fb2c-4987-9549-4079ecf05445",
  "status": "completed",
  "notificationMethod": "polling",
  "objectReference": "REF-1635833835849",
  "pollLimit": 100
}

status:
    200
```
---

**NOTE**

In asynchronous flows, a callback mechanism or polling mechanism is utilised to allow the client to determine the request's final state. Use the [viewRequestState()](viewRequestState.md) function for the polling mechanism to receive the status of a request, and the [viewTransaction()](viewTransaction.md) function to acquire the final representation of the BatchTransaction object.

---