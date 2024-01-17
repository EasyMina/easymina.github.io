---
sort: 6
title: 5. saveContract()
---


# Save Contract

This is the second part of creating and saving a smart contract. Also see `.requestContract()`.

```javascript
.saveContract( { response, verificationKey } )
```

| Key | Type | Description | Default | Required |
| :-- | :-- | :-- | :-- | :-- |
| response | `<o1

js Response> Object` | Passes the `response` from the sent transaction. | | `true` |
| verificationKey | `<o1js verificationKey> Object` | Passes the used verificationKey created via `.compile`. | | `true` |

Example:

```javascript
const { verificationKey } = await Square.compile()

...
const signedMessage = tx.sign([ 
    deployer['privateKey']['field'], 
    contract['privateKey']['field'] 
])
...
const response = await signedMessage.send()
...
const deployedContract = await easyMina.saveContract({ 
    response,
    verificationKey
})
```

Result
```
{
    "header": {
        "name": "square",
        "methods": {
            "Square": [
                "update"
            ]
        },
        "projectName": "hello-world",
        "networkName": "berkeley",
        "addressShort": "B62qpVLR...iaDY",
        "addressFull": "B62qpVLR4U6JNJrkbDE49CWWzKcBHfFZHUf6XuuQzFKNxikPR3yiaDY",
        "explorer": "https://minascan.io/berkeley/account/B62qpVLR4U6JNJrkbDE49CWWzKcBHfFZHUf6XuuQzFKNxikPR3yiaDY",
        "created": "2024-01-16 03:21:26 AM",
        "createdUnix": 1705371686,
        "deployer": ".mina/accounts/alice--1705360821.json",
        "sourceCode": "...",
        "encrypt": true,
        "txHash": "5Jtj4zP46gcfkC5BRLMEHgJcapGBz4XceXsoG42e9CX4ofvbp8Af",
        "txHashExplorer": "https://minascan.io/berkeley/tx/5Jtj4zP46gcfkC5BRLMEHgJcapGBz4XceXsoG42e9CX4ofvbp8Af",
        "txHashSuccess": true
    },
    "body": {
        "iv": "...",
        "content": "..."
    },
    "disclaimer": "Do not share this file with anyone."
}
```
