> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Index, retrieve, update, upsert, delete, import, and export documents in a Typesense collection, including bulk JSONL imports and partial updates."
sidebarDepth: 2
sitemap:
  priority: 0.7
---

# Documents

Every record you index in Typesense is called a `Document`.

## Index documents

A document to be indexed in a given collection must conform to the [schema of the collection](./collections.md#create-a-collection).

If the document contains an `id` field of type `string`, Typesense will use that field as the identifier for the document.
Otherwise, Typesense will assign an auto-generated identifier to the document. Since it's a special field, the `id` field
is not required to be defined as part of the collection schema.

:::warning NOTE
The `id` should not include spaces or any other characters that require [encoding in urls](https://www.w3schools.com/tags/ref_urlencode.asp).
:::

### Index a single document

If you need to index a document in response to some user action in your application, you can use the single document create endpoint.

If you need to index multiple documents at a time, we highly recommend using the [import documents](#index-multiple-documents) endpoint, which is optimized for bulk imports.
For eg: If you have 100 documents, indexing them using the import endpoint at once will be much more performant than indexing documents one a time.

Let's see how we can add a new document to a collection.


```js
let document = {
  'id': '124',
  'company_name': 'Stark Industries',
  'num_employees': 5215,
  'country': 'USA'
}

client.collections('companies').documents().create(document)
```



#### Upsert a single document

We can also replace a document with the same `id` if it already exists, or create a new document if one doesn't already exist with the same `id`.

If you need to upsert multiple documents at a time, we highly recommend using the [import documents](#index-multiple-documents) endpoint with `action=upsert`, which is optimized for bulk upserts.
For eg: If you have 100 documents, upserting them using the import endpoint at once will be much more performant than upserting documents one a time.


```js
let document = {
  'id': '124',
  'company_name': 'Stark Industries',
  'num_employees': 5215,
  'country': 'USA'
}

client.collections('companies').documents().upsert(document)
```



**Sample Response**


```json
{
  "id": "124",
  "company_name": "Stark Industries",
  "num_employees": 5215,
  "country": "USA"
}
```


**Definition**

`POST ${TYPESENSE_HOST}/collections/:collection/documents`

:::tip
If your application generates more than 10s of writes-per-second, you want to switch to using the [bulk import API](#index-multiple-documents), which is much more performant in handling high volume writes than the single document write endpoint. 
For eg, sending 10000 documents over 10000 different single API calls is going to be an order magnitude more CPU intensive and slower than sending those 10K documents in a single bulk import API call.

A simple way to switch to bulk imports is to have your application write into a buffer table on your side first, instead of to Typesense directly. 
And then have a scheduled job that periodically reads from this table (even if it's every 5-10s for eg) and flushes the data into Typesense in batches. 
For a more detailed guide, check out [High-volume writes in Typesense](../../guide/syncing-data-into-typesense.md#high-volume-writes).
:::

### Index multiple documents

You can index multiple documents in a batch using the import API.

When indexing multiple documents, this endpoint is much more performant, than calling the [single document create endpoint](#index-a-single-document) multiple times in quick succession.

The documents to import need to be formatted as a newline delimited JSON string, aka [JSONLines](https://jsonlines.org/) format.
This is essentially one JSON object per line, without commas between documents. For example, here are a set of 3 documents represented in JSONL format.

```json lines
{"id": "124", "company_name": "Stark Industries", "num_employees": 5215, "country": "US"}
{"id": "125", "company_name": "Future Technology", "num_employees": 1232, "country": "UK"}
{"id": "126", "company_name": "Random Corp.", "num_employees": 531, "country": "AU"}
```

If you are using one of our client libraries, you can also pass in an array of documents and the library will take care of converting it into JSONL.

You can also [convert from CSV to JSONL](#import-a-csv-file) and [JSON to JSONL](#import-a-json-file) before importing to Typesense.

#### Action modes (create, upsert, update & emplace)

Besides batch-creating documents, you can also use the `action` query parameter to update documents using
their `id` field.

<table>
    <tr>
        <td>create (default)</td>
        <td>Creates a new document. Fails if a document with the same id already exists</td>
    </tr>
    <tr>
        <td>upsert</td>
        <td>Creates a new document or updates an existing document if a document with the same <code>id</code> already exists.
           Requires the whole document to be sent. For partial updates, use the <code>update</code> action below.</td>
    </tr>
    <tr>
        <td>update	</td>
        <td>Updates an existing document. Fails if a document with the given <code>id</code> does not exist. You can send
            a partial document containing only the fields that are to be updated.</td>
    </tr>
    <tr>
        <td>emplace	</td>
        <td>Creates a new document or updates an existing document if a document with the same <code>id</code> already exists.
            You can send either the whole document or a partial document for update.</td>
    </tr>
</table>

Let's see how we can now use the `create` mode to import some documents.


```js
let documents = [{
  'id': '124',
  'company_name': 'Stark Industries',
  'num_employees': 5215,
  'country': 'USA'
}]

// IMPORTANT: Be sure to increase connectionTimeoutSeconds to at least 5 minutes or more for imports,
//  when instantiating the client

client.collections('companies').documents().import(documents, {action: 'create'})
```



**Definition**

`POST ${TYPESENSE_HOST}/collections/:collection/documents/import`

**Sample Response**


```json lines
{"success": true}
{"success": true}
```


Each line of the response indicates the result of each document present in the request body (in the same order). If the import of a single document fails, it does not affect the other documents.

If there is a failure, the response line will include a corresponding error message and as well as the actual document content. For example, the second document had an import failure in the following response:


```json lines
{"success": true}
{"success": false, "error": "Bad JSON.", "document": "[bad doc]"}
```


:::warning NOTE
The import endpoint will always return a `HTTP 200 OK` code, regardless of the import results of the individual documents.

We do this because there might be some documents which succeeded on import and others that failed, and we don't want to return an HTTP error code in those partial scenarios.
To keep it consistent, we just return HTTP 200 in all cases.

So always be sure to check the API response for any `{success: false, ...}` records to see if there are any documents that failed import.
:::

:::tip
Here are some [tips when importing data into Typesense](../../guide/syncing-data-into-typesense.md#tips-when-importing-data).
:::

#### Returning the `id` of the imported documents

If you want the import response to return the ingested document's `id` in the response,
you can use the `return_id` parameter.

```shell
# Makes the import response return the `id` field of imported documents in the response
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -X POST --data-binary @documents.jsonl \
'http://localhost:8108/collections/companies/documents/import?return_id=true'
{"success": true, "id": "0"}
{"success": true, "id": "1"}
...
```

Likewise, using the `return_doc` parameter will return the entire document back in response.

#### Configure batch size

By default, Typesense ingests 40 documents at a time into Typesense - after every 40 documents are ingested, Typesense will then service the search request queue, before switching back to imports.
To increase this value, use the `batch_size` parameter.

Note that this parameter controls server-side batching of documents sent in a single import API call.
Increasing this value might affect search performance, so we'd recommend that you not change the default unless you really need to.
You can also do client-side batching, by sending your documents over multiple import API calls (potentially in parallel).


```js
const documentsInJsonl = await fs.readFile("documents.jsonl");
client.collections('companies').documents().import(documentsInJsonl, {batch_size: 100});
```



**NOTE**: Larger batch sizes will consume larger transient memory during import.

### Dealing with Dirty Data

The `dirty_values` parameter determines what Typesense should do when the type of a particular field being
indexed does not match the previously [inferred](./collections.md#with-auto-schema-detection) type for that field, or the one [defined](./collections.md#with-pre-defined-schema) in the collection's schema.

This parameter can be sent with any of the document write API endpoints, for both single documents and multiple documents.

| Value              | Behavior                                                                                                                                            |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------|
| `coerce_or_reject` | Attempt coercion of the field's value to previously inferred type. If coercion fails, reject the write outright with an error message.              |
| `coerce_or_drop`   | Attempt coercion of the field's value to previously inferred type. If coercion fails, drop the particular field and index the rest of the document. |
| `drop`             | Drop the particular field and index the rest of the document.                                                                                       |
| `reject`           | Reject the document outright.                                                                                                                       |

**Default behaviour**

If a wildcard (`.*`) field is defined in the schema _or_ if the schema contains any field
name with a regular expression (e.g a field named `.*_name`), the default behavior is `coerce_or_reject`. Otherwise,
the default behavior is `reject` (this ensures backward compatibility with older Typesense versions).

#### Indexing a document with dirty data

Let's now attempt to index a document with a `title` field that contains an integer. We will assume that this
field was previously inferred to be of type `string`. Let's use the `coerce_or_reject` behavior here:


```js
let document = {
    'title': 1984,
    'points': 100
}

client.collections('titles').documents().create(document, {
    "dirty_values": "coerce_or_reject"
})
```



Similarly, we can use the `dirty_values` parameter for the [update](#update-a-document), [upsert](#upsert-a-single-document) and [import](#index-multiple-documents) operations as well.

### Indexing all values as string

Typesense provides a convenient way to store all fields as strings through the use of the `string*` field type.

Defining a type as `string*` allows Typesense to accept both singular and multi-value/array values.

Let's say we want to ingest data from multiple devices but want to store them as strings since each device could
be using a different data type for the same field name (e.g. one device could send an `record_id` as an integer,
while another device could send an `record_id` as a string).

To do that, we can define a schema as follows:

```json
{
  "name": "device_data",
  "fields": [
    {"name": ".*", "type": "string*" }
  ]
}
```

Now, Typesense will automatically convert any single/multi-valued data into their corresponding string
representations automatically when data is indexed with the `dirty_values: "coerce_or_reject"` mode.

You can see how they will be transformed below:


```json
{
  "record_id": 141414,
  "values": [76.24, 88, 100.67]
}
```



```json
{
  "record_id": "141414",
  "values": ["76.24", "88", "100.67"]
}
```


### Import a JSONL file

You can import a JSONL file or you can import the output of a Typesense [export operation](#export-documents) directly as import to the [import end-point](#index-multiple-documents) since both use JSONL.

Here's an example file:


```json lines
{"id": "1", "company_name": "Stark Industries", "num_employees": 5215, "country": "USA"}
{"id": "2", "company_name": "Orbit Inc.", "num_employees": 256, "country": "UK"}
```


You can import the above `documents.jsonl` file like this.


```js
const documentsInJsonl = await fs.readFile("documents.jsonl");
client.collections('companies').documents().import(documentsInJsonl, {action: 'create'});
```



<br/>

:::warning 
**Important Note**: Typesense limits individual import requests to a maximum of 10GB. For larger files, you should split them into smaller chunks and import them individually.
:::

### Import a JSON file

If you have a file in JSON format, you can convert it into JSONL format using [`jq`](https://github.com/stedolan/jq):

```shell
jq -c '.[]' documents.json > documents.jsonl
```

Once you have the JSONL file, you can then import it following the [instructions above](#import-a-jsonl-file) to import a JSONL file.

### Import a CSV file

If you have a CSV file with column headers, you can convert it into JSONL format using [`mlr`](https://github.com/johnkerl/miller):

```shell
mlr --icsv --ojsonl cat documents.csv > documents.jsonl
```

Once you have the JSONL file, you can then import it following the [instructions above](#import-a-jsonl-file) to import a JSONL file.

### Import other file types

Typesense is primarily a JSON store, optimized for fast search.
So if you can extract data from other file types and convert it into structured JSON, you can import it into Typesense and search through it.

For eg, here's one library you can use to [convert DOCX files to JSON](https://github.com/microsoft/Simplify-Docx).

[Apache Tika](https://tika.apache.org/) is another library to extract text and metadata from PDF, PPT, XLS and over a 1000 different file formats.

Once you've extracted the JSON, you can then [index](#index-documents) them in Typesense just like any other JSON file.

## Retrieve a document

Fetch an individual document from a collection by using its `id`.


```js
client.collections('companies').documents('124').retrieve()
```



**Sample Response**


```json
{
  "id": "124",
  "company_name": "Stark Industries",
  "num_employees": 5215,
  "country": "USA"
}
```


While retrieving a document, you can use the following parameters to control the fields that are returned:

| Parameter      | Description                                                         |
|:---------------|:--------------------------------------------------------------------|
| include_fields | List of fields that should be present in the returned document.     |
| exclude_fields | List of fields that should not be present in the returned document. |

**Definition**

`GET ${TYPESENSE_HOST}/collections/:collection/documents/:id`

## Update documents

Typesense allows you to update a single document, multiple documents, or documents that match a particular
`filter_by` query.

### Update a single document

We can update a single document from a collection by using its `id`. The update can be partial,
as shown below:


```js
let document = {
  'company_name': 'Stark Industries',
  'num_employees': 5500
}

client.collections('companies').documents('124').update(document)
```



**Sample Response**


```json
{
  "company_name": "Stark Industries",
  "num_employees": 5500
}
```


**Definition**

`PATCH ${TYPESENSE_HOST}/collections/:collection/documents/:id`

### Update multiple documents

To update multiple documents, use the import endpoint with [`action=update`](#action-modes-batch-create-upsert-update-emplace),
[`action=upsert`](#action-modes-batch-create-upsert-update-emplace) or [`action=emplace`](#action-modes-batch-create-upsert-update-emplace).

### Update by query

To update all documents that match a given `filter_by` query:


```js
let document = {
  'tag': 'large'
}

client.collections('companies').documents().update(document, {"filter_by": "num_employees:>1000"})
```




**Sample Response**


```json
{
  "num_updated": 24
}
```


**Definition**

`PATCH ${TYPESENSE_HOST}/collections/:collection/documents`

## Delete documents

### Delete a single document

Delete an individual document from a collection by using its `id`.


```js
client.collections('companies').documents('124').delete()
```



**NOTE:** When a document does not exist for the given `id`, an error is returned. To ignore this error and treat the
deletion as success, you can send `ignore_not_found=true` parameter.

**Sample Response**


```json
{
  "id": "124",
  "company_name": "Stark Industries",
  "num_employees": 5215,
  "country": "USA"
}
```


**Definition**

`DELETE ${TYPESENSE_HOST}/collections/:collection/documents/:id`

### Delete by query

You can also delete a bunch of documents that match a specific [`filter_by`](search.md#filter-results) condition:


```js
client.collections('companies').documents().delete({'filter_by': 'num_employees:>100'})
```



Use the `batch_size` parameter to control the number of documents that should deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.

**Sample Response**


```json
{
  "num_deleted": 24
}
```


**Definition**

`DELETE ${TYPESENSE_HOST}/collections/:collection/documents?filter_by=X&batch_size=N`

:::tip
To delete multiple documents by ID, you can use `filter_by=id: [id1, id2, id3]`.

To delete all documents in a collection, you can use a filter that matches all documents in your collection.
For eg, if you have an `int32` field called `popularity` in your documents, you can use `filter_by=popularity:>0` to delete all documents.
Or if you have a `bool` field called `in_stock` in your documents, you can use `filter_by=in_stock:[true,false]` to delete all documents.

:::

### Delete all documents

You can remove all documents from a collection while keeping the collection and schema intact by using the truncate operation.


```js
client.collections('companies').documents().delete({ truncate: true })
```



**Sample Response**


```json
{
  "num_deleted": 125
}
```


**Definition**
`DELETE ${TYPESENSE_HOST}/collections/:collection/documents?truncate=true`

The response includes the number of documents that were deleted in the `num_deleted` field. For an empty collection, this value will be 0.

## Export documents

Export documents in a collection in JSONL format.


```js
client.collections('companies').documents().export()
```



**Sample Response**


```json lines
{"id": "124", "company_name": "Stark Industries", "num_employees": 5215, "country": "US"}
{"id": "125", "company_name": "Future Technology", "num_employees": 1232, "country": "UK"}
{"id": "126", "company_name": "Random Corp.", "num_employees": 531, "country": "AU"}
```


While exporting, you can use the following parameters to control the result of the export:

| Parameter      | Description                                                                                         |
|:---------------|:----------------------------------------------------------------------------------------------------|
| filter_by      | Restrict the exports to documents that satisfies the [`filter by` query](search.md#filter-results). |
| include_fields | List of fields that should be present in the exported documents.                                    |
| exclude_fields | List of fields that should not be present in the exported documents.                                |

**Definition**

`GET ${TYPESENSE_HOST}/collections/:collection/documents/export`

<RedirectOldSearchLinksForV023AndAbove />
