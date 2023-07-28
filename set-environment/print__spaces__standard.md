---
sort: 2
title: A.3. consoleSpacesStandard
---

# consoleSpacesStandard

This splitter can be used to divide the output of information in the terminal.


## Specification

Default implementation: ```{ "consoleSpacesStandard": 30 }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```consoleSpacesStandard``` | ```print__spaces__standard``` | [General](../options/#general) |

### Value

This regular expression matches any positive integer with one or more digits.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```30``` | ```^[1-9]\d*$``` | ```integer``` |

