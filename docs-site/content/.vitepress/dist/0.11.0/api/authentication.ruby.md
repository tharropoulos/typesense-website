> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sitemap:
  priority: 0.3
---

# Authentication



```rb
require 'typesense'

client = Typesense::Client.new(
  master_node: {
    host:     'localhost',
    port:     8108,
    protocol: 'http',
    api_key:  '<API_KEY>'
  },

  read_replica_nodes: [
    {
      host:     'read_replica_1',
      port:     8108,
      protocol: 'http',
      api_key:  '<API_KEY>'
    }
  ],

  timeout_seconds: 2
)
```

