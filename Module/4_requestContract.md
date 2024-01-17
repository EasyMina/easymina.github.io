---
sort: 5
title: 4. requestContract()
---


# Request Contract

This method is the first step in creating and saving a smart contract. Also see `.saveContract()`.

```
.requestContract( { name, deployer, encrypt=true, sourcePath=null } )
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| name | `String` | Specifies the name of the smart contract. | | `true` |
| deployer | `<Deployer> Object` | Inserts the deployer, see example. | | `true` |
| sourcePath | `String` | Specifies the path to the imported smart contract, which is then stored with other data. | | `true` |

Example:

```
import { Square } from '../contracts/build/Square.js'

const deployer = await easyMina.getAccount( {
    'name': 'charlie',
    'groupName': 'a',
    'checkStatus': true, // optional, checks if account has balance
    'strict': true // optional, throw an error if account has no balance
} )

easyMina.requestContract( {
    'name': 'square',
    'sourcePath': '../contracts/build/Square.js',
    deployer
} )
```
