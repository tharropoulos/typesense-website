> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Pick and install a Typesense client library: official builds for JavaScript, PHP, Python, Ruby, and community libraries for Go, Java, Rust, Dart, Swift, and more."
---

# Installing a client

We have client libraries for:

- [JavaScript](https://github.com/typesense/typesense-js)
- [PHP](https://github.com/typesense/typesense-php)
- [Python](https://github.com/typesense/typesense-python)
- [Ruby](https://github.com/typesense/typesense-ruby)

We also have the following community-maintained client libraries:

- [TypeScript](https://github.com/tharropoulos/typesense-ts)
- [Go](https://github.com/typesense/typesense-go)
- [.Net](https://github.com/DAXGRID/typesense-dotnet)
- [Java](https://github.com/typesense/typesense-java)
- [Rust](https://github.com/typesense/typesense-rust)
- [Dart](https://github.com/typesense/typesense-dart)
- [Perl](https://github.com/Ovid/Search-Typesense)
- [Swift](https://github.com/typesense/typesense-swift)
- [Clojure](https://github.com/runeanielsen/typesense-clj)
- [python orm client](https://github.com/RedSnail/typesense_orm)
- [PHP SEAL Adapter](https://github.com/schranz-search/seal-typesense-adapter)
- [Elixir](https://github.com/jaeyson/ex_typesense)

---

- [Other Framework Integrations](/30.2/api/api-clients.html#framework-integrations)



```java
// Download the JAR file from the releases section in the typesense-java repository.
// (https://github.com/typesense/typesense-java/releases)
// And the import it them to your project

import org.typesense.api.*;
import org.typesense.models.*;
import org.typesense.resources.*;
```


:::tip
If you don't see an official client in your language, you can still use any HTTP library in your language to make API calls to Typesense's RESTful API directly.
:::
