---
sort: 6
title: . credentialsRootFolderName
---

# credentialsRootFolderName

Here, you can set the root folder for your credentials.


## Specification

Default implementation: ```{ "credentialsRootFolderName": ".mina/" }```

### Key

| **Name** | **Alias** | **Methods** | **Category** |  
|:--|:--|:--|:--|
| ```credentialsRootFolderName``` | ```environment__addresses__root``` | [setEnvironment](../methods/setEnvironment.html#options) | [Account](../options/#account) |

### Value

start with a ".", followed by a lowercase letter, and may contain alphanumeric characters, hyphens, and underscores, ending with an alphanumeric character and a "/"

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```".mina/"``` | ```^[.][a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\/$``` | ```string``` |

