---
sort: 4
title: 3. getAccount()
---


# Create Account

This method allows you to retrieve a saved account.

```
.getAccount( { name, groupName, checkStatus=false, strict=false } )
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| name | `string` | Specifies the name of the requested account. | | `true` |
| groupName | `string` | Specifies the groupName of the requested account. | | `true` |
| checkStatus | `boolean` | Determines whether a check should be performed to see if the account already exists and has tokens. | `false` | `true` |
| strict | `boolean` | If a negative response is received from the status check, strict can force an abort. | `false` | `true` |

Example:

```
const deployer = await easyMina.getAccount({
    'name': 'bob',
    'groupName': 'a',
    'checkStatus': true,
    'strict': true
})
```