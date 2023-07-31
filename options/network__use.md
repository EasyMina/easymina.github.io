---
sort: 16
title: D.1. networkName
---

# networkName

Here you can change the network your are using.


## Specification

Default implementation: ```{ "networkName": "berkeley" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```networkName``` | ```network__use``` | [Network](../options/#network) | [setEnvironment](../features/setEnvironment.html#options), [deployContract](../features/deployContract.html#options) |

### Value

Currently only "berkeley" is valid

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"berkeley"``` | ```^(berkeley|none)$``` | ```string``` |

