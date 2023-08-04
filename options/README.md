---
sort: 10
title: Options
---

# Options

## By Method

### setEnvironment

Assists in creating your workspace.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```"default"``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```"Do not share this file with someone."``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```24``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```"en"``` |  | Here, you can set the language of the terminal output. |
| B.1 | [fileNameSplitter](../options/environment__addresses__splitter.md) | ```"--"``` |  | Here you can switch between "__" and "--" as splitter in your fileName structure |
| B.2 | [credentialsRootFolderName](../options/environment__addresses__root.md) | ```".mina/"``` |  | Here, you can set the root folder for your credentials. |
| B.3 | [accountsFolderName](../options/environment__addresses__deployers__folder.md) | ```"deployers/"``` |  | Here, you can set the folder name for your account keys. |
| B.5 | [contractsFolderName](../options/environment__addresses__contracts__folder.md) | ```"contracts/"``` |  | Here, you can set the folder name for your contract keys. |
| C.1 | [workspaceRootFolderName](../options/environment__workspace__contracts__root.md) | ```"workdir/"``` |  | This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript. |
| C.2 | [workspaceTypescriptFolderName](../options/environment__workspace__contracts__typescript__folder.md) | ```"typescript/"``` |  | Here, you can set your typescript folder. |
| C.4 | [workspaceBuildFolderName](../options/environment__workspace__contracts__build__folder.md) | ```"build/"``` |  | This folder sets a name for the location of all your automatically compiled TypeScript smart contracts. |
| C.5 | [smartContractContentDefault](../options/environment__template__source__content.md) | ```"..."``` |  | You can leave a reference to a smart contract here. Currently, GitHub Gist and direct HTTPS requests are supported. |
| C.6 | [smartContractNameDefault](../options/environment__template__source__name.md) | ```"{{name}}.ts"``` |  | Here, you can set the name of your smart contract. |
| D.1 | [networkName](../options/network__use.md) | ```"berkeley"``` |  | Here you can change the network your are using. |
| D.2 | [transactionExplorer](../options/network__berkeley__explorer__transaction.md) | ```"https://berkeley.minaexplorer.com/transaction/"``` |  | Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files. |
| D.3 | [walletExplorer](../options/network__berkeley__explorer__wallet.md) | ```"https://berkeley.minaexplorer.com/wallet/"``` |  | Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files. |
| D.4 | [berkeleyNode](../options/network__berkeley__node.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here, the node provider can be set. |
| D.5 | [berkeleyNodeProxy](../options/network__berkeley__nodeProxy.md) | ```"https://proxy.berkeley.minaexplorer.com/graphql"``` |  | Here, you can change the node URL used to query account balances and similar information, for example. |
| D.6 | [berkeleyGraphQl](../options/network__berkeley__graphQl.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here you can change the GraphQl URL. |
| D.7 | [transactionFee](../options/network__berkeley__transaction_fee.md) | ```100000000``` |  | Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens. |

### deployContract

Helps you upload your first Smart Contract

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```"default"``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```"Do not share this file with someone."``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```24``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```"en"``` |  | Here, you can set the language of the terminal output. |
| B.4 | [deployerFileName](../options/environment__addresses__deployers__fileName.md) | ```"default--1691191118.json"``` |  | Here, you can set your deployer file name. |
| C.3 | [smartContractFileName](../options/environment__workspace__contracts__typescript__fileName.md) | ```"default.ts"``` |  | Here, you can set your typescript fileNName. |
| D.1 | [networkName](../options/network__use.md) | ```"berkeley"``` |  | Here you can change the network your are using. |
| D.2 | [transactionExplorer](../options/network__berkeley__explorer__transaction.md) | ```"https://berkeley.minaexplorer.com/transaction/"``` |  | Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files. |
| D.3 | [walletExplorer](../options/network__berkeley__explorer__wallet.md) | ```"https://berkeley.minaexplorer.com/wallet/"``` |  | Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files. |
| D.4 | [berkeleyNode](../options/network__berkeley__node.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here, the node provider can be set. |
| D.5 | [berkeleyNodeProxy](../options/network__berkeley__nodeProxy.md) | ```"https://proxy.berkeley.minaexplorer.com/graphql"``` |  | Here, you can change the node URL used to query account balances and similar information, for example. |
| D.6 | [berkeleyGraphQl](../options/network__berkeley__graphQl.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here you can change the GraphQl URL. |
| D.7 | [transactionFee](../options/network__berkeley__transaction_fee.md) | ```100000000``` |  | Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens. |



## By Category

### general

This section contains general parameters that offer customization options for project settings and terminal output, including setting the project name, defining account messages, adjusting console spacing, and selecting the terminal language.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```"default"``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```"Do not share this file with someone."``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```24``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```"en"``` |  | Here, you can set the language of the terminal output. |

### account

This section contains parameters related to credentials and accounts, enabling customization of the folder structure for efficiently managing account keys, such as the root folder for credentials and the folder names for accounts and contracts.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| B.1 | [fileNameSplitter](../options/environment__addresses__splitter.md) | ```"--"``` |  | Here you can switch between "__" and "--" as splitter in your fileName structure |
| B.2 | [credentialsRootFolderName](../options/environment__addresses__root.md) | ```".mina/"``` |  | Here, you can set the root folder for your credentials. |
| B.3 | [accountsFolderName](../options/environment__addresses__deployers__folder.md) | ```"deployers/"``` |  | Here, you can set the folder name for your account keys. |
| B.4 | [deployerFileName](../options/environment__addresses__deployers__fileName.md) | ```"default--1691191118.json"``` |  | Here, you can set your deployer file name. |
| B.5 | [contractsFolderName](../options/environment__addresses__contracts__folder.md) | ```"contracts/"``` |  | Here, you can set the folder name for your contract keys. |

### workspace

This section contains parameters related to your workspace, allowing you to customize the folder structure for managing smart contracts and TypeScript files efficiently, including the root folder, TypeScript folder, and build folder locations.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| C.1 | [workspaceRootFolderName](../options/environment__workspace__contracts__root.md) | ```"workdir/"``` |  | This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript. |
| C.2 | [workspaceTypescriptFolderName](../options/environment__workspace__contracts__typescript__folder.md) | ```"typescript/"``` |  | Here, you can set your typescript folder. |
| C.3 | [smartContractFileName](../options/environment__workspace__contracts__typescript__fileName.md) | ```"default.ts"``` |  | Here, you can set your typescript fileNName. |
| C.4 | [workspaceBuildFolderName](../options/environment__workspace__contracts__build__folder.md) | ```"build/"``` |  | This folder sets a name for the location of all your automatically compiled TypeScript smart contracts. |
| C.5 | [smartContractContentDefault](../options/environment__template__source__content.md) | ```"..."``` |  | You can leave a reference to a smart contract here. Currently, GitHub Gist and direct HTTPS requests are supported. |
| C.6 | [smartContractNameDefault](../options/environment__template__source__name.md) | ```"{{name}}.ts"``` |  | Here, you can set the name of your smart contract. |

### network

In this section, you will find network-related variables that can be adjusted to customize the behavior of the network you are using, such as changing the default explorer for transactions or modifying the standard transaction fee.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| D.1 | [networkName](../options/network__use.md) | ```"berkeley"``` |  | Here you can change the network your are using. |
| D.2 | [transactionExplorer](../options/network__berkeley__explorer__transaction.md) | ```"https://berkeley.minaexplorer.com/transaction/"``` |  | Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files. |
| D.3 | [walletExplorer](../options/network__berkeley__explorer__wallet.md) | ```"https://berkeley.minaexplorer.com/wallet/"``` |  | Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files. |
| D.4 | [berkeleyNode](../options/network__berkeley__node.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here, the node provider can be set. |
| D.5 | [berkeleyNodeProxy](../options/network__berkeley__nodeProxy.md) | ```"https://proxy.berkeley.minaexplorer.com/graphql"``` |  | Here, you can change the node URL used to query account balances and similar information, for example. |
| D.6 | [berkeleyGraphQl](../options/network__berkeley__graphQl.md) | ```"https://berkeley.graphql.minaexplorer.com"``` |  | Here you can change the GraphQl URL. |
| D.7 | [transactionFee](../options/network__berkeley__transaction_fee.md) | ```100000000``` |  | Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens. |

