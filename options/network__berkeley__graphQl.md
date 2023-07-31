---
sort: 21
title: D.6. berkeleyGraphQl
---

# berkeleyGraphQl

Here you can change the GraphQl URL.


## Specification

Default implementation: ```{ "berkeleyGraphQl": "https://berkeley.graphql.minaexplorer.com" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```berkeleyGraphQl``` | ```network__berkeley__graphQl``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [Network](../options/#network) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"https://berkeley.graphql.minaexplorer.com"``` | ```(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$``` | ```string``` |

