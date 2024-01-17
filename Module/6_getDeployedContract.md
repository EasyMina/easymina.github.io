---
sort: 7
title: 8. getDeployedContract()
---


# Get Deployed Contract

This method allows you to retrieve a saved contract.

```javascript
getDeployedContract( { name, projectName } ) 
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| name | `string` | Specifies the name of the stored contract. | | `true` |
| projectName | `string` | Specifies the projectName of the contract. | | `true` |

Example:

```javascript
const contract = await easyMina.getDeployedContract({
    'name': 'square',
    'projectName': 'getting-started'
})
```