---
sort: 13
title: C.5. smartContractName
---

# smartContractName

Here, you can set the name of your smart contract.


## Specification

Default implementation: ```{ "smartContractName": "{{name}}.ts" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```smartContractName``` | ```environment__template__source__name``` | [Workspace](../options/#workspace) |

### Value

match strings starting with a lowercase letter, potentially containing multiple occurrences of regular characters or "{{a-z}}" input followed by an optional period, and ending with the extension.ts

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"{{name}}.ts"``` | ```^[a-z](?:([a-z0-9_-]*|{{[a-z]+}})*.?)+.ts``` | ```string``` |

