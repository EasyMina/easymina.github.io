---
sort: 5
title: B.1. fileNameSplitter
---

# fileNameSplitter

Here you can switch between "__" and "--" as splitter in your fileName structure


## Specification

Default implementation: ```{ "fileNameSplitter": "--" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```fileNameSplitter``` | ```environment__addresses__splitter``` | [Account](../options/#account) | [setEnvironment](../features/setEnvironment.html#options) |

### Value

Matches strings containing either "__" without consecutive occurrences or "--" without consecutive occurrences

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"--"``` | ```^(__(?!--)|--(?!__))*$``` | ```string``` |

