> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "First-steps walk-through: create a Typesense collection, index a sample books dataset, and run your first searches via a client library."
---

# Build A Search Application

Now that you have Typesense [installed and running](./install-typesense.md), we're now ready to create a Typesense collection, index some documents in it and try searching for them.

## Sample Dataset

To follow along, [download](https://dl.typesense.org/datasets/books.jsonl.gz) this small dataset that we've put together for this walk-through.

```shell
cd /tmp
curl -O https://dl.typesense.org/datasets/books.jsonl.gz
gunzip books.jsonl.gz
```

This should give you a file called `books.jsonl` which we'll use below.

## Initializing the client

Let's begin by configuring the Typesense client by pointing it to a Typesense node.

- Be sure to use the same API key that you used to [start the Typesense server](./install-typesense.md#🎬-start) earlier.
- Or if you're using [Typesense Cloud](./install-typesense.md#option-1-typesense-cloud), click on the "Generate API key" button on the cluster page. This will give you a set of hostnames and API keys to use.


```js
/*
 *  Our JavaScript client library works on both the server and the browser.
 *  When using the library on the browser, please be sure to use the
 *  search-only API Key rather than the master API key since the latter
 *  has write access to Typesense and you don't want to expose that.
 */

const Typesense = require('typesense')

let client = new Typesense.Client({
  'nodes': [{
    'host': 'localhost', // For Typesense Cloud use xxx.a1.typesense.net
    'port': 8108,      // For Typesense Cloud use 443
    'protocol': 'http'   // For Typesense Cloud use https
  }],
  'apiKey': '<API_KEY>',
  'connectionTimeoutSeconds': 2
})
```



That's it - we're now ready to start interacting with the Typesense server.

## Creating a "books" collection

In Typesense, a [`Collection`](../latest/api/collections.md) is a group of related [`Documents`](../latest/api/documents.md) that is roughly equivalent to a table in a relational database. When we create a collection, we give it a name and describe the fields that will be indexed when a document is added to the collection.


```js
let booksSchema = {
  'name': 'books',
  'fields': [
    {'name': 'title', 'type': 'string' },
    {'name': 'authors', 'type': 'string[]', 'facet': true },

    {'name': 'publication_year', 'type': 'int32', 'facet': true },
    {'name': 'ratings_count', 'type': 'int32' },
    {'name': 'average_rating', 'type': 'float' }
  ],
  'default_sorting_field': 'ratings_count'
}

client.collections().create(booksSchema)
  .then(function (data) {
    console.log(data)
  })
```



For each field, we define its `name, type` and whether it's a `facet` field. A facet field allows us to cluster the search results into categories and lets us drill into each of those categories. We will be seeing faceted results in action at the end of this guide.

We also define a `default_sorting_field` that determines how the results must be sorted when no `sort_by` clause is provided. In this case, books that have more ratings will be ranked higher.

:::tip Indexed fields vs un-indexed fields
You only need to include fields that you want to search / filter / facet / sort / group_by in the collection schema. We call these indexed fields. Indexed fields are stored in RAM with a backup on disk.

You can still send additional fields that you might use for display purposes (for eg: image URLs) when importing the documents into Typesense.
Any fields not mentioned in the schema, but present in an imported document, will only be stored on disk and returned when the document is a hit.
We call these un-indexed fields and this helps conserve memory usage and avoid wasted CPU cycles in trying to otherwise build unused indices for these fields in memory.
:::

## Adding books to the collection

We're now ready to index some books into the collection we just created.


```js
var fs = require('fs/promises');

const booksInJsonl = await fs.readFile("/tmp/books.jsonl");
client.collections('books').documents().import(booksInJsonl);
```



## Searching for books

We will start with a really simple search query - let's search for `harry potter` and ask Typesense to rank books that have more ratings higher in the results.


```js
let searchParameters = {
  'q'         : 'harry potter',
  'query_by'  : 'title',
  'sort_by'   : 'ratings_count:desc'
}

client.collections('books')
  .documents()
  .search(searchParameters)
  .then(function (searchResults) {
    console.log(searchResults)
  })
```



#### Sample Response


```json
{
  "facet_counts": [],
  "found": 27,
  "hits": [
    {
      "highlights": [
        {
          "field": "title",
          "snippet": "<mark>Harry</mark> <mark>Potter</mark> and the Philosopher's Stone"
        }
      ],
      "document": {
        "authors": [
          "J.K. Rowling", "Mary GrandPré"
        ],
        "average_rating": 4.44,
        "id": "2",
        "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg",
        "publication_year": 1997,
        "ratings_count": 4602479,
        "title": "Harry Potter and the Philosopher's Stone"
      }
    },
    ...
  ]
}
```


In addition to returning the matching documents, Typesense also highlights where the query terms appear in a document via the `highlight` property.

Want to actually see newest `harry potter` books returned first? No problem, we can change the `sort_by` clause to `publication_year:desc`:

### Semantic Search

Typesense also supports the ability to return semantic matches, in addition to keyword matches.

For eg, if your dataset contains the word "Harry Potter" and the user searches for "famous boy wizard", semantic search will return the record with "Harry Potter" since it is conceptually related to the search term.

Read more about Semantic Search in the dedicated guide article [here](./semantic-search.md).

## Filtering results

Now, let's tweak our query to only fetch books that are published before the year 1998. To do that, we just have to add a `filter_by` clause to our query:


```js
let searchParameters = {
  'q'         : 'harry potter',
  'query_by'  : 'title',
  'filter_by' : 'publication_year:<1998',
  'sort_by'   : 'publication_year:desc'
}

client.collections('books')
  .documents()
  .search(searchParameters)
  .then(function (searchResults) {
    console.log(searchResults)
  })
```




#### Sample Response


```json
{
  "facet_counts": [],
  "found": 24,
  "hits": [
    {
      "highlights": {
        "title": {
          "field": "title",
          "snippet": "<mark>Harry</mark> <mark>Potter</mark> and the Philosopher's Stone"
        }
      },
      "document": {
        "authors": [
            "J.K. Rowling", "Mary GrandPré"
        ],
        "average_rating": 4.44,
        "id": "2",
        "image_url": "https://images.gr-assets.com/books/1474154022m/3.jpg",
        "publication_year": 1997,
        "ratings_count": 4602479,
        "title": "Harry Potter and the Philosopher's Stone"
      }
    },
    ...
  ]
}
```


## Faceting
Let's facet the search results by the authors field to see how that works. Let's also use this example to see how Typesense handles typographic errors. Let's search for `experyment` (notice the typo!).


```js
let searchParameters = {
  'q'         : 'experyment',
  'query_by'  : 'title',
  'facet_by'  : 'authors',
  'sort_by'   : 'average_rating:desc'
}

client.collections('books')
  .documents()
  .search(searchParameters)
  .then(function (searchResults) {
    console.log(searchResults)
  })
```



As we can see in the result below, Typesense handled the typographic error gracefully and fetched the results correctly. The `facet_by` clause also gives us a neat break-down of the number of books written by each author in the returned search results.

#### Sample Response


```json
{
  "facet_counts": [
    {
      "field_name": "authors",
      "counts": [
          {
              "count": 2,
              "value": " Käthe Mazur"
          },
          {
              "count": 2,
              "value": "Gretchen Rubin"
          },
          {
              "count": 2,
              "value": "James Patterson"
          },
          {
              "count": 2,
              "value": "Mahatma Gandhi"
          }
      ]
    }
  ],
  "found": 3,
  "hits": [
    {
      "_highlight": {
        "title": "The Angel <mark>Experiment</mark>"
      },
      "document": {
        "authors": [
            "James Patterson"
        ],
        "average_rating": 4.08,
        "id": "569",
        "image_url": "https://images.gr-assets.com/books/1339277875m/13152.jpg",
        "publication_year": 2005,
        "ratings_count": 172302,
        "title": "The Angel Experiment"
      }
    },
    ...
  ]
}
```


We've come to the end of our little walk-through. For a detailed dive into Typesense, refer to our [API documentation](../api/README.md).

:::tip
We used a single node in this example, but Typesense can also run in a clustered mode. See the [high availability](./high-availability.md) section for more details.
:::
