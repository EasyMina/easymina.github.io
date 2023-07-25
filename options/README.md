---
sort: 2
title: Options
---

# Options

This configuration guide provides access to various categories of parameters, enabling users to customize their projects and workspaces according to their preferences. You can adjust general settings, account-related options, workspace parameters, and network variables to tailor your development experience.

## Categories

### General

This section contains general parameters that offer customization options for project settings and terminal output, including setting the project name, defining account messages, adjusting console spacing, and selecting the terminal language.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```hello-world``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```Do not share this file with someone.``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```30``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```en``` |  | Here, you can set the language of the terminal output. |


### Account

This section contains parameters related to credentials and accounts, enabling customization of the folder structure for efficiently managing account keys, such as the root folder for credentials and the folder names for accounts and contracts.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| B.1 | [fileNameSplitter](../options/environment__addresses__splitter.md) | ```--``` |  | Here you can switch between "__" and "--" as splitter in your fileName structure |
| B.2 | [credentialsRootFolderName](../options/environment__addresses__root.md) | ```.mina/``` |  | Here, you can set the root folder for your credentials. |
| B.3 | [accountsFolderName](../options/environment__addresses__deployers__folder.md) | ```deployers/``` |  | Here, you can set the folder name for your account keys. |
| B.4 | [contractsFolderName](../options/environment__addresses__contracts__folder.md) | ```contracts/``` |  | Here, you can set the folder name for your contract keys. |


### Workspace

This section contains parameters related to your workspace, allowing you to customize the folder structure for managing smart contracts and TypeScript files efficiently, including the root folder, TypeScript folder, and build folder locations.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| C.1 | [workspaceRootFolderName](../options/environment__workspace__contracts__root.md) | ```./workdir/``` |  | This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript. |
| C.2 | [workspaceTypescriptFolderName](../options/environment__workspace__contracts__ts__folder.md) | ```ts/``` |  | This folder sets a name where all your developed TypeScript smart contracts will located. |
| C.3 | [workspaceBuildFolderName](../options/environment__workspace__contracts__build__folder.md) | ```build/``` |  | This folder sets a name for the location of all your automatically compiled TypeScript smart contracts. |


### Network

In this section, you will find network-related variables that can be adjusted to customize the behavior of the network you are using, such as changing the default explorer for transactions or modifying the standard transaction fee.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| D.1 | [networkName](../options/network__use.md) | ```berkeley``` |  | Here you can change the network your are using. |
| D.2 | [transactionExplorer](../options/network__berkeley__explorer__transaction.md) | ```https://berkeley.minaexplorer.com/transaction/``` |  | Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files. |
| D.3 | [walletExplorer](../options/network__berkeley__explorer__wallet.md) | ```https://berkeley.minaexplorer.com/wallet/``` |  | Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files. |
| D.4 | [berkeleyNode](../options/network__berkeley__node.md) | ```https://berkeley.graphql.minaexplorer.com``` |  | Here, the node provider can be set. |
| D.5 | [berkeleyNodeProxy](../options/network__berkeley__nodeProxy.md) | ```https://proxy.berkeley.minaexplorer.com/graphql``` |  | Here, you can change the node URL used to query account balances and similar information, for example. |
| D.6 | [berkeleyGraphQl](../options/network__berkeley__graphQl.md) | ```https://berkeley.graphql.minaexplorer.com``` |  | Here you can change the GraphQl URL. |
| D.7 | [transactionFee](../options/network__berkeley__transaction_fee.md) | ```100000000``` |  | Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens. |


