---
sort: 12
title: C.3. smartContractFileName
---

# smartContractFileName

Here, you can set your typescript fileNName.


## Specification

Default implementation: ```{ "smartContractFileName": "default.ts" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```smartContractFileName``` | ```environment__workspace__contracts__typescript__fileName``` | [deployContract](../methods/deployContract.html#options) | [Workspace](../options/#workspace) |

### Value

Matches file names starting with a lowercase letter, potentially containing multiple occurrences of alphanumerics, hyphens, or underscores, with an optional period, and ending with the extension ".ts".

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"default.ts"``` | ```^[a-z](?:[a-z0-9_-]*\.?)+\.ts``` | ```string``` |

