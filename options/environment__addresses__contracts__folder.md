---
sort: 8
title: B.4. contractsFolderName
---

# contractsFolderName

Here, you can set the folder name for your contract keys.


## Specification

Default implementation: ```{ "contractsFolderName": "contracts/" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```contractsFolderName``` | ```environment__addresses__contracts__folder``` | [Account](../options/#account) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```contracts/``` | ```^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |

