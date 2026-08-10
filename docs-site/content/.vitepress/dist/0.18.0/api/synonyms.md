> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sitemap:
  priority: 0.3
---

# Synonyms
The synonyms feature allows you to define search terms that should be considered equivalent. For eg: when you define a synonym for `sneaker` as `shoe`, searching for `sneaker` will now return all records with the word `shoe` in them, in addition to records with the word `sneaker`.

Typesense supports two types of synonyms:

1. **Multi-way synonyms**: Defining words `ABC, DEF and XYZ` (for eg) as multi-way synonyms will cause searches for any one of those words (eg: `DEF`) to return records containing at least one of the words in the synonym set (eg: records with `ABC` or `DEF` or `KYX` are returned).

2. **One-way synonyms**: Defining the words `DEF` and `XYZ` as one-way synonyms of `ABC` will cause searches for `DEF` or `XYZ` to return records containing `ABC`.

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
]

# Creates/updates a synonym called `coat-synonyms` in the `products` collection
$client->collections['products']->synonyms->upsert('coat-synonyms', $synonym)
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
  "root": "blazer",
  "synonyms": ["coat", "jacket"]
}

// Creates/updates a synonym called `blazer-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('blazer-synonyms', synonym)
```



```php
synonym = {
  "root": "blazer",
  "synonyms": ["coat", "jacket"]
}

// Creates/updates a synonym called `blazer-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('blazer-synonyms', synonym)
```


```py
synonym = {
  "root": "blazer",
  "synonyms": ["coat", "jacket"]
}

// Creates/updates a synonym called `blazer-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('blazer-synonyms', synonym)
```


```rb
synonym = {
  "root": "blazer",
  "synonyms": ["coat", "jacket"]
}

// Creates/updates a synonym called `blazer-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('blazer-synonyms', synonym)
```


```bash
synonym = {
  "root": "blazer",
  "synonyms": ["coat", "jacket"]
}

// Creates/updates a synonym called `blazer-synonyms` in the `products` collection
client.collections('products').synonyms().upsert('blazer-synonyms', synonym)
```


#### Sample Response


```json
{
  "id":"coat-synonyms",
  "root":"blazer",
  "synonyms": ["coat", "jacket"]
}
```


#### Definition
`PUT ${TYPESENSE_HOST}/collections/:collection/synonyms/:id`

### Arguments
| Parameter      | Required    |Description                                            |
| -------------- | ----------- |-------------------------------------------------------| 
|synonyms	|yes	|Array of words that should be considered as synonyms.|
|root	|no	|For 1-way synonyms, indicates the root word that words in the synonyms parameter map to.|

## Retrieve a synonym
We can retrieve a single synonym.


```js
client.collections('products').synonyms('coat-synonyms').retrieve
```



```php
client.collections('products').synonyms('coat-synonyms').retrieve
```


```py
client.collections('products').synonyms('coat-synonyms').retrieve
```


```rb
client.collections('products').synonyms('coat-synonyms').retrieve
```


```bash
client.collections('products').synonyms('coat-synonyms').retrieve
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


```js
client.collections('products').synonyms().retrieve
```



```php
$client->collections['products']->synonyms->retrieve()
```


```py
client.collections['products'].synonyms.retrieve()
```


```rb
client.collections['products'].synonyms.retrieve
```


```bash
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
"http://localhost:8108/collections/products/synonyms"
```


#### Sample Response


```json
curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" \
"http://localhost:8108/collections/products/synonyms"
```


#### Definition
`GET ${TYPESENSE_HOST}/collections/:collection/synonyms`

## Delete a synonym
Delete a synonym associated with a collection.


```js
client.collections('books').synonyms('coat-synonyms').delete()
```



```php
$client->collections['books']->synonyms['coat-synonyms'].delete()
```


```py
client.collections['books'].synonyms['coat-synonyms'].delete()
```


```rb
client.collections['books'].synonyms['coat-synonyms'].delete
```


```bash
curl "http://localhost:8108/collections/books/synonyms/coat-synonyms" -X DELETE \
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

