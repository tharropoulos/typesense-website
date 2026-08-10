> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sitemap:
  priority: 0.3
---

# Cluster Operations

## Create Snapshot (for backups)
Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory.

You can then backup the snapshot directory that gets created and later restore it as a data directory, as needed.


```js
client.operations.perform('snapshot', {'snapshot_path': '/tmp/typesense-data-snapshot'})
```



```py
client.operations.perform('snapshot', {'snapshot_path': '/tmp/typesense-data-snapshot'})
```


```rb
client.operations.perform('snapshot', {'snapshot_path': '/tmp/typesense-data-snapshot'})
```


```bash
curl "http://localhost:8108/operations/snapshot?snapshot_path=/tmp/typesense-data-snapshot" -X POST \
-H "Content-Type: application/json" \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}"
```


#### Sample Response


```json
{
  "success": true
}
```


#### Definition
`POST ${TYPESENSE_HOST}/operations/snapshot`

### Arguments
| Parameter      | Required    |Description                                            |
| -------------- | ----------- |-------------------------------------------------------| 
|snapshot_path	|yes	|The directory on the server where the snapshot should be saved.|

## Re-elect Leader
Triggers a follower node to initiate the raft voting process, which triggers leader re-election.

The follower node that you run this operation against will become the new leader, once this command succeeds.


```js
client.operations.perform('vote')
```



```py
client.operations.perform('vote')
```


```rb
client.operations.perform('vote')
```


```bash
curl "http://localhost:8108/operations/vote" -X POST \
-H "Content-Type: application/json" \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}"
```


#### Sample Response


```json
{
  "success": true
}
```


#### Definition
`POST ${TYPESENSE_HOST}/operations/vote`

