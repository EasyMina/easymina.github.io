---
sort: 4
title: . consoleLanguage
---

# consoleLanguage

Here, you can set the language of the terminal output.


## Specification

Default implementation: ```{ "consoleLanguage": "en" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```consoleLanguage``` | ```messages__use``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [General](../options/#general) |

### Value

Currently only "en" is valid

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"en"``` | ```^(en|none)$``` | ```string``` |

