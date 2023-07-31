---
sort: 20
title: D.5. berkeleyNodeProxy
---

# berkeleyNodeProxy

Here, you can change the node URL used to query account balances and similar information, for example.


## Specification

Default implementation: ```{ "berkeleyNodeProxy": "https://proxy.berkeley.minaexplorer.com/graphql" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```berkeleyNodeProxy``` | ```network__berkeley__nodeProxy``` | [Network](../options/#network) | [setEnvironment](../features/setEnvironment.html#options), [deployContract](../features/deployContract.html#options) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"https://proxy.berkeley.minaexplorer.com/graphql"``` | ```(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$``` | ```string``` |

