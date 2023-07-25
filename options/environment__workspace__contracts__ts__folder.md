---
sort: 10
title: C.2. workspaceTypescriptFolderName
---

# workspaceTypescriptFolderName

This folder sets a name where all your developed TypeScript smart contracts will located.


## Specification

Default implementation: ```{ "workspaceTypescriptFolderName": "ts/" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```workspaceTypescriptFolderName``` | ```environment__workspace__contracts__ts__folder``` | [Workspace](../options/#workspace) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```ts/``` | ```"^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$"``` | ```string``` |

