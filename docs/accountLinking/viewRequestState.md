# View a Request State

Here, `viewRequestState` creates a GET request to /requeststates/{serverCorrelationId}

> `This endpoint returns a specific request state`

## Usage/Examples

```
{
  "serverCorrelationId": "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
  "type": "viewRequestState",
   "getClientCorrelationId":(response)=>{},
   "onSuccess":(response, header, status)=>{},
   "onFailure": (response, status) => {}
}
```

### Example Output

```
{
  "serverCorrelationId": "db474b5c-cc9d-4173-b1b0-8ac06cb20e7c",
  "status": "completed",
  "notificationMethod": "callback",
  "objectReference": "REF-1635146490282",
  "pollLimit": 100
}

status:
    200
```
