---
sort: 15
title: D.4. berkeleyNode
---

# berkeleyNode

Here, the node provider can be set.


## Specification

Default implementation: ```{ "berkeleyNode": "https://berkeley.graphql.minaexplorer.com" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```berkeleyNode``` | ```network__berkeley__node``` | [Network](../options/#network) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```https://berkeley.graphql.minaexplorer.com``` | ```"(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$"``` | ```string``` |

