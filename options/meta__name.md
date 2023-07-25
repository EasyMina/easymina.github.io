---
sort: 0
title: A.1. projectName
---

# projectName

Here, you can set the project name, which will be used as the file name for newly generated keys.


## Specification

Default implementation: ```{ "projectName": "hello-world" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```projectName``` | ```meta__name``` | [General](../options/#general) |

### Value

Allow A-Z, a-b and 0-9 as value, use '-' for space.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```hello-world``` | ```^[a-zA-Z0-9-]*$``` | ```string``` |

