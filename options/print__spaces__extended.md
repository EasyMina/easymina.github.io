---
sort: 3
title: A.4. consoleSpacesStandard
---

# consoleSpacesStandard

This splitter can be used to divide the output of information in the terminal.


## Specification

Default implementation: ```{ "consoleSpacesStandard": 40 }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```consoleSpacesStandard``` | ```print__spaces__extended``` | [General](../options/#general) |

### Value

This regular expression matches any positive integer with one or more digits.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```40``` | ```^[1-9]\d*$``` | ```integer``` |
