---
sort: 8
title: 9. loadModuleExperimental()
---


# Load Module Experimental

**This method is currently in the experimental phase**. A way to correctly import a smart contract.

```javascript
.loadModuleExperimental({ sourceCode })
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| sourceCode | `String` | Here | | `true` |

Example:

```javascript
const contract = await easyMina.getDeployedContract({
    'name': 'square',
    'projectName': 'getting-started'
})
const { sourceCode } = contract
const { Square } = await easyMina.loadModuleExperimental({ sourceCode })
```