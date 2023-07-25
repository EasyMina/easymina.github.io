---
sort: 7
title: B.3. accountsFolderName
---

# accountsFolderName

Here, you can set the folder name for your account keys.


## Specification

Default implementation: ```{ "accountsFolderName": "deployers/" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```accountsFolderName``` | ```environment__addresses__deployers__folder``` | [Account](../options/#account) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"deployers/"``` | ```^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |

