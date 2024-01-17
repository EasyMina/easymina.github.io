---
sort: 3
title: 2. createAccounts()
---


# Create Accounts

This method allows you to create and save new accounts.

```
.createAccounts( { names, groupName, pattern=true } )
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| names | `Array of Strings` | Specifies the names of the respective accounts. | | `true` |
| groupName | `String` | Sets the group name in which the account(s) should be stored. | | `true` |
| pattern | `Boolean` | | `true` | `false` |

The method then defaults to encrypting the privateKey and stores other important information such as 'name,' 'groupName,' etc. The first letter of the name is used to search for an address that ends with that letter at least twice. This helps users distinguish individual transactions easily on an explorer.

Example:

```
easyMina.createAccounts({
    'names': ['alice', 'bob', 'charlie'],
    'groupName': 'a'
})
```

Result:

```json
{
    "header": {
        "name": "alice",
        "groupName": "a",
        "environmentId": "se-1705265831",
        "networkName": "berkeley",
        "addressShort": "B62qoMP5...DNaa",
        "addressFull": "B62qoMP5jBB9F3hECXjFdxVQBASPDtWenjufhWYxd1Ube1qEXLwDNaa",
        "explorer": "https://minascan.io/berkeley/account/B62qoMP5jBB9F3hECXjFdxVQBASPDtWenjufhWYxd1Ube1qEXLwDNaa",
        "created": "2024-01-16 12:46:16 AM",
        "createdUnix": 1705362376,
        "faucetTxHash": "5JutFYCcprtjhzWCvSgBkRpek8hh2M5WgTJm6dzUek81AWup85jK",
        "faucetTxHashExplorer": "https://minascan.io/berkeley/tx/5JutFYCcprtjhzWCvSgBkRpek8hh2M5WgTJm6dzUek81AWup85jK",
        "encrypt": true
    },
    "body": {
        "iv": "...",
        "content": "..."
    },
    "disclaimer": "Do not share this file with anyone."
}
```