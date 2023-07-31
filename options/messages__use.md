---
sort: 4
title: A.5. consoleLanguage
---

# consoleLanguage

Here, you can set the language of the terminal output.


## Specification

Default implementation: ```{ "consoleLanguage": "en" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```consoleLanguage``` | ```messages__use``` | [General](../options/#general) | [setEnvironment](../features/setEnvironment.html#options), [deployContract](../features/deployContract.html#options) |

### Value

Currently only "en" is valid

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"en"``` | ```^(en|none)$``` | ```string``` |

