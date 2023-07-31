---
sort: 10
title: C.1. workspaceRootFolderName
---

# workspaceRootFolderName

This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript.


## Specification

Default implementation: ```{ "workspaceRootFolderName": "workdir/" }```

### Key

| **Name** | **Alias** | **Category** | **Methods** |  
|:--|:--|:--|:--|
| ```workspaceRootFolderName``` | ```environment__workspace__contracts__root``` | [Workspace](../options/#workspace) | [setEnvironment](../features/setEnvironment.html#options) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"workdir/"``` | ```^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |

