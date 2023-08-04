---
sort: 16
title: 16. networkName
---

# networkName

Here you can change the network your are using.


## Specification

Default implementation: ```{ "networkName": "berkeley" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```networkName``` | ```network__use``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [Network](../options/#network) |

### Value

Currently only "berkeley" is valid

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"berkeley"``` | ```^(berkeley|none)$``` | ```string``` |

