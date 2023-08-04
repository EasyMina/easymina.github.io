---
sort: 0
title: 0. projectName
---

# projectName

Here, you can set the project name, which will be used as the file name for newly generated keys.


## Specification

Default implementation: ```{ "projectName": "default" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```projectName``` | ```meta__name``` | [setEnvironment](../methods/setEnvironment.html#options), [deployContract](../methods/deployContract.html#options) | [General](../options/#general) |

### Value

Allow A-Z, a-b and 0-9 as value, use '-' for space.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"default"``` | ```^[a-zA-Z0-9-]*$``` | ```string``` |

