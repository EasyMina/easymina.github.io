---
sort: 2
title: 1. constructor
---


# Constructor


```
new EasyMina( { encryption=true, networkName } )
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| encryption | `Boolean` | Specifies whether private key encryption should be applied. | `true` | `false` |
| networkName | `String` | Sets the network to be used. | | `true` |

Example:

```
const easyMina = new EasyMina( { 'networkName': 'berkeley' })
```

Upon initializing EasyMina, the network is set as "networkName." This name is used to store the name in Account and Contract Credential Files, select the correct explorer, and create URLs for accounts and transactions. The GraphQL interface is determined by the user by importing the 'o1js' Mina class.

```
import { Mina } from 'o1js'
const Berkeley = Mina.Network( 
     'https://proxy.berkeley.minaexplorer.com/graphql' 
    //'https://api.minascan.io/node/berkeley/v1/graphql'
)
Mina.setActiveInstance(Berkeley)
```