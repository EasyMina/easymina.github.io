---
sort: 0
title: A.1. projectName
---

# projectName

Here, you can set the project name, which will be used as the file name for newly generated keys.


## Specification

Default implementation: ```{ "projectName": "12345" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```projectName``` | ```meta__name``` | [General](../options/#general) | [setEnvironment](../features/setEnvironment.html#options), [deployContract](../features/deployContract.html#options) |

### Value

Allow A-Z, a-b and 0-9 as value, use '-' for space.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"12345"``` | ```^[a-zA-Z0-9-]*$``` | ```string``` |

