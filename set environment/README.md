---
sort: 2
title: Environment
---

# Environment

This configuration guide provides access to various categories of parameters, enabling users to customize their projects and workspaces according to their preferences. You can adjust general settings, account-related options, workspace parameters, and network variables to tailor your development experience.

## Workspace

The following structure is used for the workspace:

```
yourFolder
|-- .minaCredentials (A)
|   |-- accounts (A.1)
|   |   |-- yourKey1.json
|   |   |-- yourKey2.json
|   |-- contract (A.2)
|   |   |-- yourContract1.json
|   |   |-- yourContract2.json
|-- Workspace (B)
|   |-- typescript (B.1)
|   |   |-- yourSmartContract.ts
|   |-- build (B.2)
|-- tsconfig.json (C)
|-- .gitignore (D)
```

**A. Credentials**  
This directory contains the two subdirectories `accounts` and `contracts`. The folder name is prefixed with a '.', which indicates that it's a hidden folder according to the operating system. This folder contains sensitive information and must be handled with special care.

- A.1. This directory contains all generated account keys. Each account is initially funded with test tokens but can only be funded once.
- A.2. In this directory, all uploaded contracts are stored. Each contract also contains additional data that may be important for future interactions.

**B. Workspace**  
This directory contains the two subdirectories `typescript` and `build`. All smart contracts and their related files are stored in this folder.

- B.1. This is where all your developed smart contracts are stored. The Typescript Config file (see `C.`) references this folder to create the actual builds (see `B.2`).
- B.2. This folder stores the auto-generated files from TypeScript. It has been specified in the Typescript Config file (see `C.`).

**C. tsconfig.json**
The automatic creation of a `tsconfig.json` helps you focus on the most important things. This file contains all relevant settings and references to the individual folders, so that TypeScript files from `B.1` are copied to `B.2`.

**D. .gitignore**
As a best practice, a `.gitignore` file is always expected to be located in the root folder. The content of this file should always include the path to `A.` as a line. This prevents private keys from accidentally being uploaded to platforms like GitHub. Please note that ignore files should not be created for other projects. If you use other projects in this folder, make sure to add the path to `A.` there as well.

## Parameters

The function `setEnvironment( {} )` can be executed without any additional parameters. However, if you want to change settings, use the following syntax:

```
easyMina.setEnvironment( {
    'projectName': 'hello',
    'credentialsRootFolderName': './super-secure/'
} )
```

In this example, the project name is changed using the key `projectName`, and the credentials root folder is changed using the key: `credentialsRootFolderName`. Please note that each input is validated against specific criteria. For instance, the credentials folder must start with a '.' and end with '/'. For more information, refer to the respective details page for each key, or check the code for error messages in the terminal in case of incorrect input.

## Categories

### General

This section contains general parameters that offer customization options for project settings and terminal output, including setting the project name, defining account messages, adjusting console spacing, and selecting the terminal language.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| A.1 | [projectName](../options/meta__name.md) | ```"easy-mina"``` |  | Here, you can set the project name, which will be used as the file name for newly generated keys. |
| A.2 | [accountMessage](../options/console__messages__accountComment.md) | ```"Do not share this file with someone."``` |  | Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care. |
| A.3 | [consoleSpacesStandard](../options/print__spaces__standard.md) | ```30``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.4 | [consoleSpacesStandard](../options/print__spaces__extended.md) | ```40``` |  | This splitter can be used to divide the output of information in the terminal. |
| A.5 | [consoleLanguage](../options/messages__use.md) | ```"en"``` |  | Here, you can set the language of the terminal output. |


### Account

This section contains parameters related to credentials and accounts, enabling customization of the folder structure for efficiently managing account keys, such as the root folder for credentials and the folder names for accounts and contracts.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| B.1 | [fileNameSplitter](../options/environment__addresses__splitter.md) | ```"--"``` |  | Here you can switch between "__" and "--" as splitter in your fileName structure |
| B.2 | [credentialsRootFolderName](../options/environment__addresses__root.md) | ```".mina/"``` |  | Here, you can set the root folder for your credentials. |
| B.3 | [accountsFolderName](../options/environment__addresses__deployers__folder.md) | ```"deployers/"``` |  | Here, you can set the folder name for your account keys. |
| B.4 | [contractsFolderName](../options/environment__addresses__contracts__folder.md) | ```"contracts/"``` |  | Here, you can set the folder name for your contract keys. |


### Workspace

This section contains parameters related to your workspace, allowing you to customize the folder structure for managing smart contracts and TypeScript files efficiently, including the root folder, TypeScript folder, and build folder locations.

|   | **Option** | **Default** | **Examples** | **Description** |
|:--|:--|:--|:--|:--|
| C.1 | [workspaceRootFolderName](../options/environment__workspace__contracts__root.md) | ```"./workdir/"``` |  | This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript. |
| C.2 | [workspaceTypescriptFolderName](../options/environment__workspace__contracts__ts__folder.md) | ```"ts/"``` |  | This folder sets a name where all your developed TypeScript smart contracts will located. |
| C.3 | [workspaceBuildFolderName](../options/environment__workspace__contracts__build__folder.md) | ```"build/"``` |  | This folder sets a name for the location of all your automatically compiled TypeScript smart contracts. |
| C.4 | [smartContractContent](../options/environment__template__source__content.md) | ```"..."``` |  | You can leave a reference to a smart contract here. Currently, GitHub Gist and direct HTTPS requests are supported. |
| C.5 | [smartContractName](../options/environment__template__source__name.md) | ```"{{name}}.ts"``` |  | Here, you can set the name of your smart contract. |


### Network

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


