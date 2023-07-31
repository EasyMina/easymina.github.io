---
sort: 22
title: D.7. transactionFee
---

# transactionFee

Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens.


## Specification

Default implementation: ```{ "transactionFee": 100000000 }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```transactionFee``` | ```network__berkeley__transaction_fee``` | [setEnvironment](../methods//setEnvironment.html#options), [deployContract](../methods//deployContract.html#options) | [Network](../options/#network) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```100000000``` | ```(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$``` | ```string``` |

