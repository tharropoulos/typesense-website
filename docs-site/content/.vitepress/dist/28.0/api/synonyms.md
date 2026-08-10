> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sidebarDepth: 1
sitemap:
  priority: 0.3
---

# Synonyms
The synonyms feature allows you to define search terms that should be considered equivalent. For eg: when you define a synonym for `sneaker` as `shoe`, searching for `sneaker` will now return all records with the word `shoe` in them, in addition to records with the word `sneaker`.

Typesense supports two types of synonyms:

1. **One-way synonyms**: Defining the words `iphone` and `android` as one-way synonyms of `smart phone` will cause searches for `smart phone` to return documents containing `iphone` or `android` or both.

2. **Multi-way synonyms**: Defining the words `blazer`, `coat` and `jacket` as multi-way synonyms will cause searches for any one of those words (eg: `coat`) to return documents containing at least one of the words in the synonym set (eg: records with `blazer` or `coat` or `jacket` are returned).

:::tip Precedence
When using Synonyms and [Overrides](./curation.md) together, Overrides are handled first since the rules can contain instructions to replace the query. Synonyms will then work on the modified query.
:::

:::tip Locale-specific synonyms
When a synonym has a `locale` specified, it will only be applied when searching fields with a matching locale. If no locale is specified for a synonym, it will be applied globally. This helps manage cases where the same word has different meanings across languages.
:::

:::tip Phrase Match Queries & Filtering
Synonyms are not triggered when using Phrase Search or Filtering, by design.

So for eg, `"Site Reliability"` will not return results containing `Infrastructure` even if they are defined as multi-way synonyms, because of the double quotes around `"Site Reliability"` which makes it a phrase search. So only documents that contain that exact full phrase are returned, without any synonym matches.

Also, synonyms are only applied to the tokens in the `q` search parameter, and not to any tokens in the `filter_by` parameter. For eg, if you define a multi-way synonym for `abc <> xyz` and use `filter_by: title:=abc`, it will only match documents where `title=abc`, not `title=xyz`, because filtering is designed to be similar to a SQL `WHERE` condition to do a structured query and synonyms don't apply to filters.
:::

## Create or update a synonym

### Multi-way synonym


```js
synonym = {
  "synonyms": ["blazer", "coat", "jacket"]
}

// Creates/updates a synonym called `coat-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('coat-synonyms', synonym)
```



```php
$synonym = [
  "synonyms" => ["blazer", "coat", "jacket"]
];

# Creates/updates a synonym called `coat-synonyms` in the `products` collection
$client->collections['products']->synonyms->upsert('coat-synonyms', $synonym);
```


```py
synonym = {
  "synonyms": ["blazer", "coat", "jacket"]
}

# Creates/updates a synonym called `coat-synonyms` in the `products` collection
client.collections['products'].synonyms.upsert('coat-synonyms', synonym)
```


```rb
synonym = {
  "synonyms" => ["blazer", "coat", "jacket"]
}

# Creates/updates a synonym called `coat-synonyms` in the `products` collection
client.collections['products'].synonyms.upsert('coat-synonyms', synonym)
```


```dart
final synonym = {
  "synonyms": ["blazer", "coat", "jacket"]
};

// Creates/updates a synonym called `coat-synonyms` in the `products` collection
await client.collection('products').synonyms.upsert('coat-synonyms', synonym);
```


```java
SearchSynonymSchema synonym = new SearchSynonymSchema();
synonym.addSynonymsItem("blazer").addSynonymsItem("coat").addSynonymsItem("jacket");

// Creates/updates a synonym called `coat-synonyms` in the `products` collection
client.collections("products").synonyms().upsert("coat-synonyms", synonym);
```


```go
synonym := &api.SearchSynonymSchema{
  Synonyms: []string{"blazer", "coat", "jacket"},
}

// Creates/updates a synonym called `coat-synonyms` in the `products` collection
client.Collection("products").Synonyms().Upsert(context.Background(), "coat-synonyms", synonym)
```


```swift
let synonymSchema = SearchSynonymSchema(synonyms: ["blazer", "coat", "jacket"])

// Creates/updates a synonym called `coat-synonyms` in the `products` collection
let (searchSynonym, response) = try await client.collection(name: "products").synonyms().upsert(id: "coat-synonyms", synonymSchema)
```


```bash
curl "http://localhost:8108/collections/products/synonyms/coat-synonyms" -X PUT \
-H "Content-Type: application/json" \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -d '{
  "synonyms": ["blazer", "coat", "jacket"]
}'
```


#### Sample Response


```json
{
  "id": "coat-synonyms",
  "synonyms": ["blazer", "coat", "jacket"]
}
```


### One-way synonym


```js
synonym = {
  "root": "smart phone",
  "synonyms": ["iphone", "android"]
}

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('smart-phone-synonyms', synonym)
```



```php
$synonym = [
  'root' => 'smart phone',
  'synonyms' => ['iphone', 'android'],
];

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
$client->collections['products']->synonyms->upsert('smart-phone-synonyms', $synonym);
```


```py
synonym = {
  "root": "smart phone",
  "synonyms": ["iphone", "android"]
}

# Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
client.collections('products').synonyms.upsert('smart-phone-synonyms', synonym)
```


```rb
synonym = {
  "root": "smart phone",
  "synonyms": ["iphone", "android"]
}

# Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
client.collections('products').synonyms.upsert('smart-phone-synonyms', synonym)
```


```dart
final synonym = {
  "root": "smart phone",
  "synonyms": ["iphone", "android"]
};

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
await client.collection('products').synonyms.upsert('smart-phone-synonyms', synonym);
```


```java
SearchSynonymSchema synonym = new SearchSynonymSchema();
synonym.addSynonymsItem("iphone").addSynonymsItem("android");
synonym.root("smart phone");

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
client.collections("products").synonyms().upsert("smart-phone-synonyms", synonym);
```


```go
synonym := &api.SearchSynonymSchema{
  Root:     pointer.String("smart phone"),
  Synonyms: []string{"iphone", "android"},
}

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
client.Collection("products").Synonyms().Upsert(context.Background(), "smart-phone-synonyms", synonym)
```


```swift
let synonymSchema = SearchSynonymSchema(
  root: "smart phone",
  synonyms: ["iphone", "android"]
)

// Creates/updates a synonym called `smart-phone-synonyms` in the `products` collection
let (searchSynonym, response) = try await client.collection(name: "products").synonyms().upsert(id: "smart-phone-synonyms", synonymSchema)
```


```bash
curl "http://localhost:8108/collections/products/synonyms/smart-phone-synonyms" -X PUT \
-H "Content-Type: application/json" \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -d '{
    "root": "smart phone",
    "synonyms": ["iphone", "android"]
}'
```


#### Sample Response


```json
{
  "id":"smart-phone-synonyms",
  "root":"smart phone",
  "synonyms": ["iphone", "android"],
  "locale": "",
  "symbols_to_index": []
}
```


#### Definition
`PUT ${TYPESENSE_HOST}/collections/:collection/synonyms/:id`

### Arguments
| Parameter        | Required | Description                                                                                                                                                                       |
|------------------|----------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| synonyms         | yes      | Array of words that should be considered as synonyms.                                                                                                                             |
| root             | no       | For 1-way synonyms, indicates the root word that words in the synonyms parameter map to.                                                                                          |
| locale           | no       | Locale for the synonym. If specified, the synonym will only be applied when searching a field that has a matching locale. If not specified, the synonym will be applied globally. |
| symbols_to_index | no       | By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is.                                         |

## Retrieve a synonym
We can retrieve a single synonym.


```js
client.collections('products').synonyms('coat-synonyms').retrieve()
```



```php
$client->collections['products']->synonyms['coat-synonyms']->retrieve();
```


```py
client.collections('products').synonyms['coat-synonyms'].retrieve
```


```rb
client.collections('products').synonyms['coat-synonyms'].retrieve
```


```dart
await client.collection('products').synonym('coat-synonyms').retrieve();
```


```java
SearchSynonym searchSynonym = client.collections("products").synonyms("coat-synonyms").retrieve();
```


```go
client.Collection("products").Synonym("coat-synonyms").Retrieve(context.Background())
```


```swift
let (searchSynonym, response) = try await client.collection(name: "products").synonyms().retrieve(id: "coat-synonyms")
```


```bash
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" "http://localhost:8108/collections/products/synonyms"
```


#### Sample Response


```json
{
  "id": "coat-synonyms",
  "root":"",
  "synonyms": ["blazer", "coat", "jacket"]
}
```


#### Definition
`GET ${TYPESENSE_HOST}/collections/:collection/synonyms/:id`

## List all synonyms
List all synonyms associated with a given collection.

NOTE: By default, ALL synonyms are returned, but you can use the `offset` and `limit` parameters to
paginate on the listing.


```js
client.collections('products').synonyms().retrieve()
```



```php
$client->collections['products']->synonyms->retrieve();
```


```py
client.collections['products'].synonyms.retrieve()
```


```rb
client.collections['products'].synonyms.retrieve
```


```dart
await client.collection('products').synonyms.retrieve();
```


```java
SearchSynonymsResponse searchSynonymsResponse =  client.collections("products").synonyms().retrieve();
```


```go
client.Collection("products").Synonyms().Retrieve(context.Background())
```


```swift
let (searchSynonyms, response) = try await client.collection(name: "products").synonyms().retrieve()
```


```bash
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
"http://localhost:8108/collections/products/synonyms"
```


#### Sample Response


```json
{
  "synonyms": [
    {
      "id": "coat-synonyms",
      "root": "",
      "synonyms": ["blazer", "coat", "jacket"]
    }
  ]
}
```


#### Definition
`GET ${TYPESENSE_HOST}/collections/:collection/synonyms`

## Delete a synonym
Delete a synonym associated with a collection.


```js
client.collections('products').synonyms('coat-synonyms').delete()
```



```php
$client->collections['products']->synonyms['coat-synonyms']->delete();
```


```py
client.collections['products'].synonyms['coat-synonyms'].delete()
```


```rb
client.collections['products'].synonyms['coat-synonyms'].delete
```


```dart
await client.collection('products').synonym('coat-synonyms').delete();
```


```java
SearchSynonym searchSynonym = client.collections("products").synonyms("coat-synonyms").delete();
```


```go
client.Collection("products").Synonym("coat-synonyms").Delete(context.Background())
```


```swift
let (searchSynonym, response) = try await client.collection(name: "products").synonyms().delete(id: "coat-synonyms")
```


```bash
curl "http://localhost:8108/collections/products/synonyms/coat-synonyms" -X DELETE \
-H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}"
```


#### Sample Response


```json
{
  "id": "coat-synonyms"
}
```


#### Definition
`DELETE ${TYPESENSE_HOST}/collections/:collection/synonyms/:id`
