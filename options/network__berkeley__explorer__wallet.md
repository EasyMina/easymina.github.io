---
sort: 18
title: 18. walletExplorer
---

# walletExplorer

Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files.


## Specification

Default implementation: ```{ "walletExplorer": "https://berkeley.minaexplorer.com/wallet/" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```walletExplorer``` | ```network__berkeley__explorer__wallet``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [Network](../options/#network) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"https://berkeley.minaexplorer.com/wallet/"``` | ```(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$``` | ```string``` |

