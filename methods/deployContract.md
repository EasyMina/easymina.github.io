---
sort: 2
title: B. deployContract()
---

# B. deployContract()

`.deployContract({})`: Helps you upload your first Smart Contract

:heavy_check_mark: Creation of Contract Addresses  
:heavy_check_mark: Finding and setting a Payer Account  
:heavy_check_mark: Uploading and saving essential information in a file  


## Quickstart

terminal
```
mkdir first-mina-project && cd first-mina-project
```
```
npm init -y && npm i easymina
```

nodejs (index.mjs)
```
import { EasyMina } from 'easymina'

const easyMina = new EasyMina()
easyMina.setEnvironment({})
await easyMina.deployContract({})
```

You can find detailed instructions in [Setup your Environment](../tutorials/setup_environment.html).

## Overview
 
With this method, it is easy to upload a Smart Contract to the blockchain. All necessary steps are either automatically handled or can be adjusted via parameters. As a prerequisite, `setEnvironment()` should have been called before.

### Default
To upload a Smart Contract using the `default` profile, no options need to be provided. Make sure to execute `setEnvironment()` beforehand. When called multiple times, no additional accounts will be created.

```
await easyMina
    .setEnvironment({})
await easyMina
    .deployContract({})
```

This command checks for an existing environment, loads the [projectName](../options/meta__name.html), and uses this name as a reference to set an account. It will also later name the saved contract with this name. Information on where the contract is stored and what information is available can be found [here](../methods/setEnvironment.html#a-credentials). You can find a complete tutorial [here](../tutorials/deploy_contract.html).


### Custom Upload
The following parameters are used to upload a Smart Contract. However, none of the parameters are required, and default values will be used if not provided.

Here is a selection of available settings:

| | **Name** | **Description** |
|:--|:--|:--|
| A. | `projectName` | Sets the namespace used for accounts and contracts |
| B. | `deployerFileName` | Manually selects an account |
| C. | `smartContractFileName` | Manually enters the SmartContract file name. You can find it under [Credentials](./methods/setEnvironment.html#a-credentials) |
| D. | `smartContractClassName` | Sets the class name used for compilation |

More options can be found under [options](#options)

```
...
await easyMina
    .deployContract( { 
        'projectName': 'my-latest-project',
        'deployerFileName': 'default--1690747562.json',
        'smartContractFileName': 'hello.ts',
        'smartContractClassName': 'Square'
    } )
```



## Options

Helps you upload your first Smart Contract

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```"12345"``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```"Do not share this file with someone."``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```30``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```"en"``` |  | Here, you can set the language of the terminal output. |
| B.4 | [deployerFileName](../options/environment__addresses__deployers__fileName.md) | ```"12345--1690811826.json"``` |  | Here, you can set your deployer file name. |
| C.3 | [smartContractFileName](../options/environment__workspace__contracts__typescript__fileName.md) | ```"12345.ts"``` |  | Here, you can set your typescript fileNName. |
| D.1 | [networkName](../options/network__use.md) | ```"berkeley"``` |  | Here you can change the network your are using. |
| D.2 | [transactionExplorer](../options/network__berkeley__explorer__transaction.md) | ```"https://berkeley.minaexplorer.com/transaction/"``` |  | Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files. |
| D.3 | [walletExplorer](../options/network__berkeley__explorer__wallet.md) | ```"https://berkeley.minaexplorer.com/wallet/"``` |  | Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files. |
| D.4 | [berkeleyNode](../options/network__berkeley__node.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here, the node provider can be set. |
| D.5 | [berkeleyNodeProxy](../options/network__berkeley__nodeProxy.md) | ```"https://proxy.berkeley.minaexplorer.com/graphql"``` |  | Here, you can change the node URL used to query account balances and similar information, for example. |
| D.6 | [berkeleyGraphQl](../options/network__berkeley__graphQl.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here you can change the GraphQl URL. |
| D.7 | [transactionFee](../options/network__berkeley__transaction_fee.md) | ```100000000``` |  | Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens. |
