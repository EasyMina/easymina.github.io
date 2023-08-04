---
sort: 8
title: 8. deployerFileName
---

# deployerFileName

Here, you can set your deployer file name.


## Specification

Default implementation: ```{ "deployerFileName": "default--1691191118.json" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```deployerFileName``` | ```environment__addresses__deployers__fileName``` | [deployContract](../methods/deployContract.html#options) | [Account](../options/#account) |

### Value

Allows file names with the structure "{{name}}--{{unix}}.json". {{name}} can contain alphanumerics and hyphens, and {{unix}} is a Unix timestamp.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"default--1691191118.json"``` | ```^[a-zA-Z0-9-]+--\d+\.json$``` | ```string``` |

