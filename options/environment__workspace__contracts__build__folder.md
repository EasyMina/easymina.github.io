---
sort: 11
title: C.3. workspaceBuildFolderName
---

# workspaceBuildFolderName

This folder sets a name for the location of all your automatically compiled TypeScript smart contracts.


## Specification

Default implementation: ```{ "workspaceBuildFolderName": "build/" }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```workspaceBuildFolderName``` | ```environment__workspace__contracts__build__folder``` | [Workspace](../options/#workspace) |

### Value

The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```"build/"``` | ```^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |
