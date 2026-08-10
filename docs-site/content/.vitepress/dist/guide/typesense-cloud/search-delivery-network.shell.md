> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

# Search Delivery Network

**In Typesense Cloud**, you can choose to have your data distributed to multiple regions around the world
and have search queries routed to the node that's closest to where your end users are geographically located.
We call this a Search Delivery Network (SDN).

## How it helps

By placing your search indices physically closer to your end-users, you can minimize network latency
and ensure that your users around the world have a consistently fast instant-search experience.

This is very similar to the benefits you get with a Content Delivery Network (CDN) for static assets,
except that instead of just caching the most recently accessed items like a CDN typically does,
in Typesense Cloud, we replicate the entire dataset to each node in your SDN cluster.

### Example scenario

If you had a single-region Typesense cluster in **Oregon** and your users are in **New York**, they'll see an added network latency of **~76ms** when making search requests from New York to Oregon.

But if you had a 3-region SDN Typesense Cloud cluster in **Oregon, Ohio & Northern Virginia**, your users in New York will now see a much lower network latency of **~9ms**, since the SDN will route the New York user to the node in Northern Virginia.

Typesense Cloud has 25+ geo regions around the world, and you can pick any 3 or 5 regions for a single SDN cluster, with one node in each region.

If you need more than one node in a particular region, say to handle higher search traffic from that location, you can use the **Multi-Nodes Per Region** option to spread up to 7 nodes across 2 to 7 regions, and choose how many nodes run in each region.

## How to use it

When you provision a Typesense Cloud cluster, you'll find the option to turn on "Search Delivery Network" in the cluster configuration page, and select the regions you want in your SDN. If you choose the Multi-Nodes Per Region option, you can also set how many nodes to run in each region.

Once the cluster is provisioned, you'll now see a special "Nearest Node" hostname displayed in the dashboard:

<img src="~@images/search-delivery-network/sdn-hostnames.png" height="350" width="385" alt="Typesense Cloud SDN Hostnames">

Any requests sent to this nearest node hostname will be routed to the node that's closest to the geographic region where the query originates.

### Client Configuration

The official client libraries support specifying a nearest node hostname, and then specifying the individual nodes' hostnames as a fallback.

Requests are first sent to the Nearest Node endpoint, and if it fails for some reason, the request is then retried on the fallback nodes in a round-robin fashion.



```bash
export TYPESENSE_API_KEY='<API_KEY>'
export TYPESENSE_HOST='https://xxx.a1.typesense.net'
```


::: warning NOTE

For Typesense Cloud SDN clusters provisioned **after Jun 16, 2022**,
if a particular region has infrastructure issues, or a node is in accessible for any reason,
traffic is automatically re-routed to the next closest node that is healthy server-side.
So specifying fallback nodes in the client configuration is optional (but still recommended when a client library supports it), as traffic re-routing in error scenarios happens on the server-side.

In Typesense Cloud SDN clusters provisioned **before Jun 16, 2022**,
the nearest node endpoint will resolve to the node that's closest to the user, regardless of whether the node is healthy or not.
So you would have to rely on client-side load-balancing and the fallback nodes mentioned above to route requests away from unhealthy nodes.
In this case, specifying both the nearest node and fallback node is required in the client libraries.

If you'd like to enable automatic re-routing (server-side load-balancing) for your existing SDN cluster provisioned before Jun 16, 2022, you can do that by going to your Cluster Dashboard > Cluster Configuration > Modify and then enable "Load Balancing" and schedule the change.
:::
