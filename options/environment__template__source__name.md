---
sort: 15
title: 16. smartContractNameDefault
---

# smartContractNameDefault

Here, you can set the name of your smart contract.


## Specification

Default implementation: ```{ "smartContractNameDefault": "{{name}}.ts" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```smartContractNameDefault``` | ```environment__template__source__name``` | [setEnvironment](../methods/setEnvironment.html#options) | [Workspace](../options/#workspace) |

### Value

match strings starting with a lowercase letter, potentially containing multiple occurrences of regular characters or "{{a-z}}" input followed by an optional period, and ending with the extension.ts

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"{{name}}.ts"``` | ```^[a-z](?:([a-z0-9_-]*|{{[a-z]+}})*.?)+.ts``` | ```string``` |

