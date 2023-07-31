---
sort: 11
title: C.2. workspaceTypescriptFolderName
---

# workspaceTypescriptFolderName

Here, you can set your typescript folder.


## Specification

Default implementation: ```{ "workspaceTypescriptFolderName": "typescript/" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```workspaceTypescriptFolderName``` | ```environment__workspace__contracts__typescript__folder``` | [setEnvironment](../methods//setEnvironment.html#options) | [Workspace](../options/#workspace) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"typescript/"``` | ```^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |

