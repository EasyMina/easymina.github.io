---
sort: 5
title: 5. fileNameSplitter
---

# fileNameSplitter

Here you can switch between "__" and "--" as splitter in your fileName structure


## Specification

Default implementation: ```{ "fileNameSplitter": "--" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```fileNameSplitter``` | ```environment__addresses__splitter``` | [setEnvironment](../methods/setEnvironment.html#options) | [Account](../options/#account) |

### Value

Matches strings containing either "__" without consecutive occurrences or "--" without consecutive occurrences

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"--"``` | ```^(__(?!--)|--(?!__))*$``` | ```string``` |

