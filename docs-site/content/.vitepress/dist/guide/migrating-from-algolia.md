> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Migration guide for moving from Algolia to Typesense: timeline, document mapping, synonyms and rules export-import, and using the InstantSearch adapter."
---

# Migrating from Algolia

If you are currently using Algolia and are planning a migration to Typesense, this guide is meant to give you some helpful pointers to help ease your transition.
We've put this together based on common things we've seen Algolia users experience when switching to Typesense.

## Timeline

The most frequent question we get from Algolia users exploring a switch to Typesense, is how long a migration typically takes. 

The median migration timeline has been about 2-3 weeks.

The record so far has been 3 hours, to switch from Algolia to Typesense in production (of course this is an outlier). 
On the other end of the spectrum, we've had a few users take 1-1.5 months, since they wanted to deploy Typesense behind a feature flag to a small percentage of traffic, and then slowly ramp traffic up to Typesense over a period of weeks, while closely metrics and fine-tuning.

If you're using Algolia's [InstantSearch](https://github.com/algolia/instantsearch) UI widgets, then the migration timeline tends to be on the lower end of the spectrum,
since we have an [adapter library](#migrating-frontend-ui-components) that once you install into your frontend app, will take care of transalting the queries to Typesense. So you can keep your existing UI widgets as is, and migrate in as little as 30 minutes to an hour.

So the key work involved would be to push your JSON documents into Typesense, instead of Algolia and account for the nuances below.
You'd also want to consider migration of synonyms and query rules, for which both Algolia and Typesense have APIs for to export and import. 

## Architecture

Both Algolia and Typesense are very similar architecturally - **both are in-memory search engines**, optimized for lightning-fast search.

### API Compatibility

While Typesense _is_ an open source alternative to Algolia that gives you the same instant-search-as-you-type experience,
it also improves on some key aspects of Algolia.
So while you might find many concepts similar in Typesense and Algolia, we've designed Typesense's feature set with a first-principles mindset,
and so the APIs are not wire-compatible with each other by design.

### Type-checking

Typesense encourages you to define a schema for your documents and then type-checks documents you index against this schema to ensure that the data indexed is consistent and doesn't lead to unexpected surprises or subtle errors.
This is very similar to the benefits of type-checking in strongly-typed programming languages like C++, Go, Rust, Java, Kotlin, Swift, Typescript, etc.

In Algolia, you can send any JSON data to be indexed and the data types are preserved as is, even if inconsistent across documents.
So you could have one document with a string field called "timestamp" and another document with an integer field called "timestamp".
This leads to some gotchas during filtering, depending on the type of filter you use.

While Typesense doesn't allow you to have different data types for the same field across documents,
you can configure Typesense to automatically detect the schema for you based on the documents you index (See [Auto-Schema Detection](/30.2/api/collections.html#with-auto-schema-detection).)
You can also configure Typesense to automatically attempt to coerce data types based on the detected schema using the [`coerce_or_reject`](/30.2/api/documents.html#dealing-with-dirty-data) parameter when importing documents.

### Synchronous Write APIs

In Algolia, all write API calls are queued up internally and applied asynchronously to the index.
You would have to poll the status of writes to know the status of each write operation.
Depending on the size of your dataset you might see a delay between when you make a write API call and when it shows up in the index when searching.

In Typesense, all write API calls are synchronous. There is no polling required to know the status of a write.
If an API call succeeds, it means that the data has been written to a majority of the nodes in the cluster and is available for search.
This also means that these synchronous write API calls containing large batches of data will take longer to complete as the data is being ingested.
Depending on the amount of data being indexed concurrently, if the configured thresholds are exceeded, Typesense might return an `HTTP 503 Lagging or Not Ready` message to ensure that search operations are not affected during high volume writes.
At that point, you would have to retry the write API call after a pause at a later point in time.

## Feature Parity

Typesense is currently at about 85% feature parity with Algolia (see the [feature comparison matrix here](https://typesense.org/typesense-vs-algolia-vs-elasticsearch-vs-meilisearch/)). 
We plan to close the gap based on feedback we get from Algolia users switching over to Typesense.

### Key Features in Algolia, not in Typesense

- Server-side AB-Testing (can be implemented [client-side](./ab-testing.md) using an AB-Testing framework and using different collections based on the bucket identifier for a user)
- Out-of-the-box AI/ML Features
  - Dynamic Synonym Suggestion
  - Out-of-the-box event tracking
  - Out-of-the-box user-level personalization (can be implemented by bringing the output of machine learning models into Typesense. Read more [here](./personalization.md#user-level-personalization))
  - Out-of-the-box recommendations ([Here's](./recommendations.md) a guide on how to implement recommendations in Typesense using ML models and [Vector Search](/30.2/api/vector-search.html)).

### Key Features in Typesense, not in Algolia

- Multiple (hard) sort orders on a single index (In Algolia you need to create duplicate indices for every hard sort order, eg: sort by price asc, sort by price desc, etc each need a duplicate index in Algolia)
- Validations for field data types when documents are indexed (similar to typed languages) to prevent inconsistent data from getting into the index. (This can be turned off if you need Algolia-like behavior)
- Ability to specify numerical weights for particular fields during search, to give them more priority
- Ability to store and query multiple geo (latitude / longitude) fields in the same record, and combine them using logical operators when filtering in a single query.
- Ability to store vectors from your own machine learning models and do [nearest neighbor searches](/30.2/api/vector-search.html).
- Ability to use embedding models like OpenAI, PaLM API or built-in models like S-BERT, E-5, etc in order to implement hybrid (semantic + keyword) search and integrate with Large Language Models (LLMs).
- Ability to have the engine return results as [Conversational Responses](/30.2/api/conversational-search-rag.html) (Built-in RAG) using your JSON data.
- Ability to create [aliases](/30.2/api/collection-alias.html) for collections, like symlinks
- In general many parameters that are configurable at the index level in Algolia are dynamically configurable at search time in Typesense, which gives you more flexibility
- No limits on record size, maximum index size, number of synonyms, number of rules or number of indices
- Ability to self-host
- Can be run in a Continuous Integration environment since it is self-hostable
- Fully Open Source

## Equivalent Features and Concepts

Here is a list of common features and concepts along with what each one is called in Algolia vs Typesense.

### Terminology

| Algolia                                        | Typesense                                                                                                                                                         |
|:-----------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Every JSON object you index is called a record | Every JSON object you index is called a [`Document`](/30.2/api/documents.html)               |
| A collection of records is called an `Index`   | A collection of records / documents is a called a [`Collection`](/30.2/api/collections.html) |
| Distributed Search Network                     | Search Delivery Network (in Typesense Cloud)                                                                                                                      |
| NeuralSearch                                   | [Hybrid Search](/30.2/api/vector-search.html#hybrid-search), which is essentially Semantic Search + Keyword Vector Search with automatic embedding generation.

### Features

| Algolia                                                                                                             | Typesense                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|:--------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Authentication is done via `Application ID` and `API Key`                                                           | Authentication is done via `x-typesense-api-key`                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| Secured or Virtual API Keys                                                                                         | [Scoped API Keys](/30.2/api/api-keys.html#generate-scoped-search-key)                                                                                                                                                                                                                                                                                                                                                   |
| Importing records (without validations and schema)                                                                  | Create a collection with [auto-schema detection](/30.2/api/collections.html#with-auto-schema-detection) and import documents with [`coerce_or_reject`](/30.2/api/documents.html#dealing-with-dirty-data)                                                                                                                                           |
| Query rules                                                                                                         | [Overrides](/30.2/api/curation.html) aka Curation (Typesense Cloud also has a drag-drop management interface for Overrides).                                                                                                                                                                                                                                                                                            |
| [Query Suggestions](https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/query-suggestions/js/) | Also called [Query Suggestions](./query-suggestions.md) in Typesense. Can be created with [Analytics Rules](/30.2/api/analytics-query-suggestions.html).                                                                                                                                                                                                                                                                |
| Merchandising                                                                                                       | [Promoting or Excluding results](/30.2/api/curation.html#including-or-excluding-documents) via Overrides, or at search time via the [`pinned_hits` or `hidden_hits`](/30.2/api/search.html#search-parameters) search parameter                                                                                                                     |
| Dynamic Filtering                                                                                                   | [Dynamic Filtering via Overrides](/30.2/api/curation.html#dynamic-filtering)                                                                                                                                                                                                                                                                                                                                            |
| Optional Filtering                                                                                                  | [Sorting Based on Conditions](/30.2/api/search.html#sorting-based-on-conditions)                                                                                                                                                                                                                                                                                                                                        |
| Filter Scoring                                                                                                      | [Sorting Based on Filter Score](/30.2/api/search.html#sorting-based-on-filter-score)                                                                                                                                                                                                                                                                                                                                    |
| Virtual Index Replicas for sorting                                                                                  | In Typesense, a single collection can handle multiple sort orders using [`sort_by`](/30.2/api/search.html#search-parameters), so virtual index replicas are not needed                                                                                                                                                                                                                                                  |
| Searching multiple indices (aka Federated Search, aka `multipleQueries`)                                            | [`multi_search`](/30.2/api/documents.html#federated-multi-search)                                                                                                                                                                                                                                                                                                                                                       |
| [Ranking and Relevance in Algolia](https://www.algolia.com/doc/guides/managing-results/relevance-overview/)         | [Ranking and Relevance in Typesense](./ranking-and-relevance.md).<br/><br/>One key difference in Typesense is that we've tried to simplify the relevance tuning experience, so things work out-of-the-box for most use-cases and we've tried to keep the number of knobs needed to a minimum.                                                                                                                                                                                                |
| [Filtering records](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/)                  | [[`filter_by`](/30.2/api/search.html#search-parameters) search parameter filters documents                                                                                                                                                                                                                                                                                                                              |
| [Faceting records](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/)                    | [`facet_by`](/30.2/api/search.html#search-parameters) search parameter facets documents                                                                                                                                                                                                                                                                                                                                 |
| [Grouping records](https://www.algolia.com/doc/guides/managing-results/refine-results/grouping/)                    | [`group_by`](/30.2/api/search.html#search-parameters) search parameter groups documents                                                                                                                                                                                                                                                                                                                                 |
| GeoSearch with `aroundRadius`, `aroundLatLng`                                                                       | [GeoSearch with Typesense](/30.2/api/documents.html#geosearch)                                                                                                                                                                                                                                                                                                                                                          |
| GeoSearch with `insidePolygon`                                                                                      | [GeoSearch inside a polygon](/30.2/api/documents.html#searching-within-a-geo-polygon)                                                                                                                                                                                                                                                                                                                                   |
| GeoSearch with `insideBoundingBox`                                                                                  | If the diagonal ends of the bounding box are the coordinates `[A,X]` and `[B,Y]`, you can get the other two coordinates of the bounding box using this pattern: `[A,Y]` and `[B,X]` (essentially interchanging the individual lat / lng). With these 4 coordinates, you can now use Typesense's [polygon GeoSearch feature](/30.2/api/documents.html#searching-within-a-geo-polygon) to search inside the bounding box. |
| Controlling GeoSearch precision with `aroundPrecision`                                                              | [`geo_precision` and `exclude_radius`](/30.2/api/documents.html#exclude-radius)                                                                                                                                                                                                                                                                                                                                         | 

### Configuration

| Algolia                                                                                    | Typesense                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `searchableAttributes`                                                                     | All fields / attributes that need to be indexed are configured when [creating a collection](/30.2/api/collections.html#create-a-collection), and then you can choose to use a subset of fields at search time dynamically using the [`query_by`](/30.2/api/search.html#search-parameters) search parameter.                                                                                                  |
| `attributesForFaceting` for faceting and filtering                                         | Faceting can be turned on for fields by specifying `facet: true` for the field in the [collection's schema](/30.2/api/collections.html#create-a-collection) and then can by changed at search time using [`facet_by`](/30.2/api/search.html#search-parameters)<br/> In Typesense, filter fields need not be set as facets.                                                                                   |
| `unretrievableAttributes`                                                                  | Can be configured at search time by creating a [Scoped API Key](/30.2/api/api-keys.html#generate-scoped-search-key) and embedding the [`exclude_fields`](/30.2/api/search.html#search-parameters) search parameter                                                                                                                                                                                           |
| `attributesToRetrieve`                                                                     | Can be configured at search time by creating a [Scoped API Key](/30.2/api/api-keys.html#generate-scoped-search-key) and embedding the [`include_fields`](/30.2/api/search.html#search-parameters) search parameter                                                                                                                                                                                           |
| `attributeForDistinct` and `distinct`                                                      | Can be configured at search time using the [`group_by` and `group_limit`](/30.2/api/search.html#search-parameters) search parameters                                                                                                                                                                                                                                                                                                                                              |                                                                                                                                                                                                                                                                                        
| `separatorsToIndex`                                                                        | [`symbols_to_index`](/30.2/api/collections.html#schema-arguments) setting when creating a collection                                                                                                                                                                                                                                                                                                                                                                              |
| `removeWordsIfNoResults`                                                                   | [`drop_tokens_threshold`](/30.2/api/search.html#search-parameters) search parameter                                                                                                                                                                                                                                                                                                                                                                                               |
| `disablePrefixOnAttributes`                                                                | [`prefix=false,false,true`](/30.2/api/search.html#search-parameters) search parameter corresponding to the fields in `query_by`                                                                                                                                                                                                                                                                                                                                                   |
| `disableTypoToleranceOnAttributes`                                                         | [`num_typos=false,false,true`](/30.2/api/search.html#search-parameters) search parameter corresponding to the fields in `query_by`                                                                                                                                                                                                                                                                                                                                                |
| [`customRanking`](https://www.algolia.com/doc/api-reference/api-parameters/customRanking/) | [Up to 3 sort_by parameters can be specified in the [`sort_by`](/30.2/api/search.html#search-parameters) search parameter. <br><br>Eg: `sort_by=_text_match(buckets: 10):desc,custom_field_1:desc,custom_field_2:desc` <br><br> As of v0.23.0, this divides the result set into 10 buckets from most relevant results to the least relevant, and forces all items in one bucket into a tie, which causes your custom ranking field to be used for ranking within each bucket.     |
| `optionalFilters`                                                                          | [Sorting Based on Conditions](/30.2/api/search.html#sorting-based-on-conditions)                                                                                                                                                                                                                                                                                                                                                                                                  |

### API

| Algolia                                                                                                      | Typesense                                                                                                                                                                                                                                           |
|:-------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Importing / Indexing Documents with `saveObjects`                                                            | Import documents using [`/collections//documents/import`](/30.2/api/documents.html#index-multiple-documents) endpoint with `action=upsert`                    |
| `partialUpdateObjects` with `createIfNotExists: true`                                                        | Import documents using [`/collections//documents/import`](/30.2/api/documents.html#index-multiple-documents) endpoint with `action=emplace` (as of `v0.23.0`) |
| Exporting records using the [`browseObjects`](https://www.algolia.com/doc/api-reference/api-methods/browse/) | Export documents using [`/collections/collection_name/documents/export`](/30.2/api/documents.html#export-documents) endpoint                                                   |
| [`searchForFacetValues`](https://www.algolia.com/doc/api-reference/api-methods/search-for-facet-values/)     | [`facet_query`](/30.2/api/search.html#search-parameters) search parameter                                                                                                      |

## Migrating Frontend UI components

Algolia has built and open-sourced a suite of Search UI libraries for Vanilla JS, React, Vue and Angular called [InstantSearch](https://github.com/algolia/instantsearch.js).

Typesense supports the same InstantSearch widgets, through the [typesense-instantsearch-adapter](https://github.com/typesense/typesense-instantsearch-adapter).
You would just have to install the adapter into your application via `npm` or `yarn` and [configure it](https://github.com/typesense/typesense-instantsearch-adapter#usage),
and your existing UI widgets will work with your Typesense cluster, without any additional changes in most cases. 

A few widgets need [small changes](https://github.com/typesense/typesense-instantsearch-adapter#widget-specific-instructions) to use them with Typesense.

## Migrating Data from Algolia into Typesense

You'd typically want to update your application's backend that currently sends JSON data into Algolia, to send the same JSON data to Typesense.
This way you're sending data directly from your primary data store into Typesense.

But if you want a quick way to do a one-time export of your data in Algolia into Typesense, to explore Typesense or to do a backfill, here's how:

### Step 1: Export the data from Algolia

Install the [Algolia CLI](https://www.algolia.com/doc/tools/cli/get-started/overview/) and then run:

```shell
algolia objects browse YOUR_INDEX_NAME > documents-raw.jsonl
```

This will export your Algolia records into a JSONL file.

### Step 2: Transform the data

#### ID fields
Algolia uses a field called `objectId` to uniquely identify records and Typesense uses a field called `id` for the same purpose. 

So let's use [`jq`](https://jqlang.github.io/jq/) to copy the value of the `objectId` field to a new field called `id` in the JSONL file we downloaded above:

```shell
jq -c '(to_entries[] | select(.key | ascii_downcase == "objectid")).key as $key | .["id"] = .[$key]' documents-raw.jsonl > documents-with-ids.jsonl
```

#### Timestamps (optional)

To be able to sort by date/timestamps, you would need to convert any date/timestamps in iso8601 to a Unix timestamp (epoch time). 

Here's a one-liner to do this:

```shell
jq -c 'if .your_iso_timestamp_field then .your_iso_timestamp_field |= (sub("\\.[0-9]+"; "") | strptime("%Y-%m-%dT%H:%M:%SZ") | mktime) else . end' documents-with-ids.jsonl > documents.jsonl
```

### Step 3: Create a collection

Create a collection in Typesense following the instructions [here](/30.2/api/collections.html).

You want to set `facet: true` for any fields you've configured as a facetable field in Algolia.

[Here's](https://github.com/typesense/typesense-collection-schema-generator/blob/master/README.md) a little utility to help you generate a first-draft Typesense Collection schema from a sample JSON object from your dataset: 

```bash
npx typesense-collection-schema-generator@latest <path_to_input_json_document_file> <path_to_output_typesense_collection_schema_json_file>
```

### Step 4: Import your documents

You can now [import](/30.2/api/documents.html#import-a-jsonl-file) the transformed JSONL file from above into your
[Typesense Collection](/30.2/api/collections.html#create-a-collection)
using this snippet:

```shell
export TYPESENSE_API_KEY=xyz
export TYPESENSE_HOST=xxx.a1.typesense.net
export TYPESENSE_PROTOCOL=https
export TYPESENSE_COLLECTION_NAME=YOUR_INDEX_NAME

#  We're parallelize-ing the import using the `parallel` command (make sure you install it first):

parallel --block -5 -a documents.jsonl --tmpdir /tmp --pipepart --cat 'curl -H "X-TYPESENSE-API-KEY: ${TYPESENSE_API_KEY}" -X POST -T {} "${TYPESENSE_PROTOCOL}://${TYPESENSE_HOST}/collections/${TYPESENSE_COLLECTION_NAME}/documents/import?action=upsert"'
```

:::tip Tips
- Increase `-5` in the command above to a larger number to reduce the size of each chunk being imported into Typesense.
- If you see a "Bad Request" or "Connection Refused" error, you might need to adjust the escaping / quotes in the command above for your particular shell.
- If you see a 404, please make you have [created your Typesense Collection](/30.2/api/collections.html#create-a-collection) before running the import command above.
:::

### Step 5: Import query rules

If you use Algolia's Query Rules feature to curate your search results based on conditions, you can import those rules using this utility we've put together:

```bash
npx algolia-query-rules-to-typesense@latest <path/to/algolia_rules_export.json> <path/to/typesense_overrides_output.json>
```

To get the Algolia rules export file, go to the "Rules" section of your Algolia index, and you'll find a download icon to export the rules as JSON.

You can then import these converted JSON rules (`typesense_overrides_output.json`) into Typesense using the [Typesense Overrides API](/30.2/api/curation.html).

## Geo-Distributed Clusters

Algolia calls their Geo-Distributed CDN-like search offering [Distributed Search Network](https://www.algolia.com/doc/guides/scaling/distributed-search-network-dsn/), and is only available for customers who pay annually, as a paid add-on.

In Typesense Cloud, Geo-Distributed CDN-like search offering is called a Search Delivery Network, and is available to all users as a configuration you can choose when you create a new cluster.  

## Pricing Model

Algolia charges by the number of records and number of searches (or key strokes if you've implemented search-as-you-type), and you pay for the max of these two dimensions, along with overages if you go over your plan limit.
So if you have high traffic and low number of records or low traffic and large number of records, you'll be paying for the larger number of the two.

**Typesense is free and open source, and can be self-hosted for free.**

Typesense also offers a hosted search service called [Typesense Cloud](https://cloud.typesense.org).
Typesense Cloud pricing is based on the amount of [RAM & CPU](./system-requirements.md) you need to index your data and support your desired traffic concurrency respectively.
It's a flat hourly fee depending on the configuration you choose, plus standard bandwidth charges, similar to AWS, GCP, etc.
There are no per-record or per-search charges unlike Algolia. You can throw as much traffic or data at your cluster as it can handle. 
We've seen this pricing model save anywhere from 50% to 95% in search costs for users switching from Algolia to Typesense Cloud.

## Algolia Migration Support

If you plan to migrate to Typesense Cloud from Algolia, we offer FREE [migration consulting support](https://cloud.typesense.org/pricing#switching-from-algolia) with different levels of service based on your Algolia usage.
