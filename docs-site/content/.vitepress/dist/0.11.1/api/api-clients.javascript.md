> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
sitemap:
  priority: 0.3
---

# API Clients

We have client libraries for:

- [JavaScript](https://github.com/typesense/typesense-js)
- [Python](https://github.com/typesense/typesense-python)
- [Ruby](https://github.com/typesense/typesense-ruby)

We also have the following community-contributed client libraries:

- [Go](https://github.com/typesense/typesense-go)
- [C#](https://github.com/DAXGRID/typesense-dotnet)

We recommend that you use our API client if it's available for your language. It's also easy to interact with Typesense through its simple, RESTful HTTP API.


```js
// Node.js
npm install typesense @babel/runtime

// Browser
<script src="dist/typesense.min.js"></script>
```



If you're using our JavaScript client to access Typesense directly from the browser, be sure to start the Typesense server with the `--enable-cors` flag.
