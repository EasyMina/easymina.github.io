---
sort: 13
title: D.2. transactionExplorer
---

# transactionExplorer

Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files.


## Specification

Default implementation: ```{ "transactionExplorer": "https://berkeley.minaexplorer.com/transaction/" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```transactionExplorer``` | ```network__berkeley__explorer__transaction``` | [Network](../options/#network) |

### Value

URLs with optional "http://" or "https://", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```https://berkeley.minaexplorer.com/transaction/``` | ```(https?:\/\/)?([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})(\/\S*)?$``` | ```string``` |
