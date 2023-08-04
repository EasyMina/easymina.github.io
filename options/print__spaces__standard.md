---
sort: 2
title: 2. consoleSpacesStandard
---

# consoleSpacesStandard

This splitter can be used to divide the output of information in the terminal.


## Specification

Default implementation: ```{ "consoleSpacesStandard": 24 }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```consoleSpacesStandard``` | ```print__spaces__standard``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [General](../options/#general) |

### Value

This regular expression matches any positive integer with one or more digits.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```24``` | ```^[1-9]\d*$``` | ```integer``` |

