> **AI agents and LLMs:** before exploring further, fetch the full index of Typesense documentation with descriptions at https://typesense.org/docs/llms.txt.

---
description: "Manage who can read and write to a Typesense cluster: bootstrap key handling, scoped API keys per collection, action, record or field, and key rotation."
---

# Managing Access to Data

Typesense's primary interface to read/write data is a [REST-ful HTTP API](/30.2/api/), and access to this API is controlled by API Keys.

All API endpoints, except the [`GET /health`](/30.2/api/cluster-operations.html#health) endpoint require an API key to be provided either as an `X-TYPESENSE-API-KEY` HTTP Header or as a query parameter `?x-typesense-api-key`.

The rest of this article will discuss how to create API Keys and restrict the API Endpoints and/or data they can access.

[[toc]]

## Bootstrap API Key

When you start a Typesense cluster, you provide a bootstrap key using the `api-key` [server configuration parameter](/30.2/api/server-configuration.html).

This key has admin permissions on all endpoints and data and should not be used during normal course of operations. 
Instead, you want to use this key to create another admin API Key using the [`/keys` API endpoint](/30.2/api/api-keys.html#create-an-api-key), and then use that key for day-to-day operations.

This way, you can [rotate/revoke](#key-rotation) your admin key(s) as needed.

:::tip
In Typesense Cloud, we manage the bootstrap API key for you transparently. 

When you click on the "Generate API Keys" button in the Cluster Dashboard, we use the bootstrap API Key to generate one admin API key and a search-only API Key using the `/keys` endpoint and provide that to you. 
:::

## Restricting access to API endpoints

When you [create an API key](/30.2/api/api-keys.html#create-an-api-key), you can use the `actions` parameter to control which API endpoints the key has access to.

Let's take this example key configuration:

```json
{
  "actions": ["documents:search"],
  "collections": ["*"],
  ...
}
```

This configuration will allow this API Key to only search for documents using the search API endpoint. 

Read more about all the [available `actions` here](/30.2/api/api-keys.html#sample-actions).

## Restricting access to collections

When you [create an API key](/30.2/api/api-keys.html#create-an-api-key), you can use the `collections` parameter to control which specific collections the key has access to.

Let's take this example key configuration:

```json
{
  "actions": ["*"],
  "collections": ["contacts_.*"],
  ...
}
```

This configuration will allow this API Key to only access collections that start with `contacts_`. 

You can use any regex or a list of collection names to indicate which collections this key can access. 

## Restricting access to documents within a collection

Let's say you're building a bookmarking service where each user can create their own bookmarks. 
You can place all users' bookmarks in a single collection and use a [Scoped Search API Key](/30.2/api/api-keys.html#generate-scoped-search-key) to only allow a user to search through their own bookmarks. 

The key concept of a Scoped Search API Key is that you can cryptographically embed a [`filter_by`](/30.2/api/search.html#filter-parameters) clause that looks something like `filter_by: belongs_to_user_id:=CurrentUserId` in the API Key 
and then when you use that API Key for searching, Typesense will automatically apply that filter. Users will not be able to override the filter embedded inside the scoped API Key. 

This effectively means that the API Key can only access documents which have `belongs_to_user_id: CurrentUserId` as an attribute.

Read more about [Scoped Search API Keys here](/30.2/api/api-keys.html#generate-scoped-search-key).

## Restricting access to fields within a document

Let's say you're building a customer lookup portal where customer service agents can look up customer information, and you only want information like billing address to be visible to an admin group of agents and not to everyone. 

You can embed the [`include_fields` or `exclude_fields`](/30.2/api/search.html#results-parameters) parameter inside a [Scoped Search API Key](/30.2/api/api-keys.html#generate-scoped-search-key) that looks something like `exclude_fields: billing_address`.

When a customer service agent logs in, you would make an API call to your backend, create/fetch a [Search-only API Key](/30.2/api/api-keys.html#search-only-api-key) that has search access to the collection, then depending on the agent's role in your auth system, you would create a Scoped Search API Key with an embedded `include_fields` or `exclude_fields` parameter, send this Scoped API Key to your frontend and then have your frontend make API calls to Typesense. 

Read more about [Scoped Search API Keys here](/30.2/api/api-keys.html#generate-scoped-search-key).

## Exposing API Keys to your frontend

Typesense is designed to allow searches to be sent directly from your users' browsers / mobile apps to your Typesense cluster, instead of having to proxy the search calls through your backend. 

So you can expose your [Search-only API Key](/30.2/api/api-keys.html#search-only-api-key) on your frontend, since this API key gives users access to the same data that they would have access to via your search UI.

The only time you do NOT want to expose your Search Only API key to your frontend is when you're using a [Scoped Search API Key](/30.2/api/api-keys.html#generate-scoped-search-key), 
with embedded filters or other search parameters in order to [restrict access to documents](#restricting-access-to-documents-within-a-collection) or [restrict access to fields within a document](#restricting-access-to-fields-within-a-document). 
This is because exposing the parent Search Only API key from which the Scoped Search API Key is generated, will allow your users to make unscoped searches, which you do not want to happen.

:::warning
Never expose your **Admin API Key** or **Bootstrap API Key** to your frontend application as anyone with access to it will be able to write data into your collection.
:::

## Key Rotation

When you create an API Key via the [`/keys` API endpoint](/30.2/api/api-keys.html#create-an-api-key), you can set an `expires_at` value to indicate the Unix timestamp until which the key will be valid.

A good security practice is to regularly create new API Keys with a short expiration window, in order reduce any risk with exposed keys.

For eg, instead of hard-coding your API key in your app, you could have your frontend make an API Call to your backend to fetch the latest API key, or if it has expired, create another one with a short expiration window and return that to the frontend to use.

Or if you have an application where users log in, you could create a search API Key for each user separately on your backend when they log in, generate a scoped search api key for them if needed and send that to the frontend to use.

::: tip

It's especially important to not hard-code API Keys or even Typesense hostnames in your native mobile apps, because then it becomes hard to rotate keys on the fly.

So you want to have an API endpoint on your backend, from where you can pull both your Typesenese cluster hostnames and API keys when the app loads, or when the user logs in.  

This way, you can avoid the potentially long app store review cycles and having to support old versions of the app still using old API keys.

:::

## Scraping protection

If your search bar is public and you want to protect your data from being scraped by bots, you can limit the total number of results a search query can fetch. This effectively thwarts bots from getting access to your full dataset.

You want to generate a [Scoped Search API Key](/30.2/api/api-keys.html#generate-scoped-search-key), 
embed the `limit_hits` parameter inside it
and then use that scoped search key from your front end application.

If you're using [`multi_search`](/30.2/api/federated-multi-search.html#multi-search-parameters), you also want to embed the `limit_multi_searches` parameter inside a Scoped Search API key to limit the number of searches that can be sent in a single `multi_search` request.

## DDOS protection

DDOS attacks are notoriously hard to thwart without significant amount of resources. 
So if DDOS is a concern you want to protect against, we recommend that you put each of your Typesense node hostnames behind a Cloudflare DNS endpoint (with the Proxy setting turned ON and SSL mode set to Full)
and then use the Cloudflare hostnames in your Typesense client configs. 

For example, for a 3-node cluster, you'd set up the following proxied connections:

```
ts-ha.yourdomain.com -> xxx.a1.typesense.net
ts1.yourdomain.com -> xxx-1.a1.typesense.net
ts2.yourdomain.com -> xxx-2.a1.typesense.net
ts3.yourdomain.com -> xxx-3.a1.typesense.net
```

Where `xxx*.a1.typesense.net` is your Typesense Cluster's individual nodes' hostnames.

You'd then use the `ts*.yourdomain.com` hostnames when instantiating the client libraries or making API calls, so that requests are routed through Cloudflare and any DDOS attacks can be handled by Cloudflare before they reach your origin Typesense nodes. 
