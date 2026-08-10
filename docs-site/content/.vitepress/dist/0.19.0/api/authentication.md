> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sitemap:
  priority: 0.3
---

# Authentication


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
    'host': 'localhost',
    'port': '8108',
    'protocol': 'http'
  }],
  'apiKey': '<API_KEY>',
  'connectionTimeoutSeconds': 2
})
```



```php
use Typesense\Client;

$client = new Client(
  [
    'api_key'         => 'abcd',
    'nodes'           => [
      [
        'host'     => 'localhost',
        'port'     => '8108',
        'protocol' => 'http',
      ],
    ],
    'connection_timeout_seconds' => 2,
  ]
);
```


```py
import typesense

client = typesense.Client({
  'nodes': [{
    'host': 'localhost',
    'port': '8108',
    'protocol': 'http'
  }],
  'api_key': '<API_KEY>',
  'connection_timeout_seconds': 2
})
```


```rb
require 'typesense'

client = Typesense::Client.new(
  nodes: [{
    host:     'localhost',
    port:     8108,
    protocol: 'http'
  }],
  api_key:  '<API_KEY>',
  connection_timeout_seconds: 2
)
```


```bash
export TYPESENSE_API_KEY='<API_KEY>'
export TYPESENSE_HOST='http://localhost:8108'
```

