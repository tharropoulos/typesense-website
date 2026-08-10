> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Configure hostnames and API keys to authenticate requests against a Typesense cluster from each official client library."
sitemap:
  priority: 0.3
---

# Authentication

You'd need one or more hostnames and [API keys](./api-keys.md) to integrate with Typesense.

If you're self-hosting Typesense, the hostnames are the IP addresses or DNS names of each of your Typesense nodes. 
If you're using Typesense Cloud, we generate unique hostnames for each of your nodes and show them on the dashboard for you to use. 



```java
import org.typesense.api.*;
import org.typesense.models.*;
import org.typesense.resources.*;

ArrayList<Node> nodes = new ArrayList<>();
nodes.add(
  new Node(
    "http",       // For Typesense Cloud use https
    "localhost",  // For Typesense Cloud use xxx.a1.typesense.net
    "8108"        // For Typesense Cloud use 443
  )
);

Configuration configuration = new Configuration(nodes, Duration.ofSeconds(2),"<API_KEY>");

Client client = new Client(configuration);
```
