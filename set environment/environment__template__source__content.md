---
sort: 12
title: C.4. smartContractContent
---

# smartContractContent

You can leave a reference to a smart contract here. Currently, GitHub Gist and direct HTTPS requests are supported.


## Specification

Default implementation: ```{ "smartContractContent": "..." }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```smartContractContent``` | ```environment__template__source__content``` | [Workspace](../options/#workspace) |

### Value

match strings starting with a lowercase letter, potentially containing multiple occurrences of regular characters or "{{a-z}}" input followed by an optional period, and ending with the extension.ts

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"..."``` | ```^[a-z](?:([a-z0-9_-]*|{{[a-z]+}})*.?)+.ts``` | ```string``` |

