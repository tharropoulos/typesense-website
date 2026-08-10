> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Create a virtual alias pointing to a real collection so you can swap underlying collections without changing client code, useful for zero-downtime reindexing."
sidebarDepth: 1
sitemap:
  priority: 0.7
---

# Collection Alias
An alias is a virtual collection name that points to a real collection. If you're familiar with symbolic links in Linux, it's very similar to that.

**You can use an alias name, instead of the collection name, in any API call that uses a collection name.** Typesense will internally resolve the alias to the collection name that the alias is configured to point to, and use that to perform the operation (searches, writes, etc).

## Use Case
One common use-case for aliases is to reindex your data in the background on a new collection and then switch your application to it without any changes to your code.

Here's an example:

Let's say we have a collection called `companies_june10` and an alias called `companies` pointing to that collection.

```
companies ---> companies_june10
```

In our application, for all search API calls we'll use the alias name `companies`, instead of using the collection name `companies_june10`:

```shell
curl "http://localhost:8108/multi_search" \
        -X POST \
        -H "Content-Type: application/json" \
        -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
        -d '{
          "searches": [
            {
              "collection": "companies",
              "q": "Acme"
            }
          ]
        }'
```

Since `companies` is an alias, Typesense will resolve `"collection": "companies"` to `companies_june10` internally, and perform the search against that collection.

On the next day (June 11), let's say we want to reindex our entire dataset. We can create a new collection called `companies_june11` and start indexing the documents in the background into this collection.

When we are done indexing, if we updated the `companies` alias to now point to this new collection `companies_june11`, your application would immediately start sending searches to this freshly indexed collection, because we're using the alias name in the search query like above.

```
companies ---> companies_june11
```

Convenient, isn't it? Let's now look at how we can create, update and manage aliases.

## Create or Update an alias



```swift
let collection = CollectionAliasSchema(collectionName: "companies_june11")

// Creates/updates an alias called `companies` to the `companies_june11` collection
let (collectionAlias, response) = try await client.aliases().upsert(name: "companies", collection: collection)
```


#### Sample Response


```json
{
  "name": "companies",
  "collection_name": "companies_june11",
}
```


#### Definition
`PUT ${TYPESENSE_HOST}/aliases/:alias`

### Arguments
| Parameter      | Required    |Description                                            |
| -------------- | ----------- |-------------------------------------------------------|
|collection_name	|yes	|Name of the collection you wish to map the alias to.|

## Retrieve an alias
We can find out which collection an alias points to by fetching it.



```swift
let (collectionAlias, response) = try await client.aliases().retrieve(name: "companies")
```


#### Sample Response


```json
{
  "name": "companies",
  "collection_name": "companies_june11",
}
```


#### Definition
`GET ${TYPESENSE_HOST}/aliases/:alias`

## List all aliases
List all aliases and the corresponding collections that they map to.



```swift
let (collectionAliases, response) = try await client.aliases().retrieve()
```


#### Sample Response


```json
{
  "aliases": [
    {
      "name": "companies",
      "collection_name": "companies_june11"
    },
    {
      "name": "employees",
      "collection_name": "employees_june11"
    }
  ]
}
```


#### Definition
`GET ${TYPESENSE_HOST}/aliases`

## Delete an alias



```swift
let (collectionAlias, response) = try await client.aliases().delete(name: "companies")
```


#### Sample Response


```json
{
  "name": "companies",
  "collection_name": "companies_june11"
}
```


#### Definition
`DELETE ${TYPESENSE_HOST}/aliases/:alias`
