---
sort: 1
title: .setEnvironment()
---

# A. setEnvironment()

This configuration guide provides access to various categories of parameters, enabling users to customize their projects and workspaces according to their preferences. You can adjust general settings, account-related options, workspace parameters, and network variables to tailor your development experience.


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
```

Visit [Tutorials](./tutorials) for mr


## Overview

The following structure is used for the environment:

```
yourFolder
|-- .minaCredentials (A)
|   |-- accounts (A.1)
|   |   |-- yourKey1.json
|   |   |-- yourKey2.json
|   |-- contracts (A.2)
|   |   |-- yourContract1.json
|   |   |-- yourContract2.json
|-- Workspace (B)
|   |-- typescript (B.1)
|   |   |-- yourSmartContract.ts
|   |-- build (B.2)
|-- tsconfig.json (C)
|-- .gitignore (D)
```

### A. Credentials  

```
yourFolder
|-- .minaCredentials (A)
|   |-- accounts (A.1)
|   |   |-- yourKey1.json
|   |   |-- yourKey2.json
|   |-- contracts (A.2)
|   |   |-- yourContract1.json
|   |   |-- yourContract2.json
...
```

This directory contains the two subdirectories `accounts` and `contracts`. The folder name is prefixed with a '.', which indicates that it's a hidden folder according to the operating system. This folder contains sensitive information and must be handled with special care.

**A.1. Accounts**
This directory contains all generated account keys. Each account is initially funded with test tokens but can only be funded once.

**A.2. Contracts**
In this directory, all uploaded contracts are stored. Each contract also contains additional data that may be important for future interactions.

### B. Workspace  

```
yourFolder
...
|-- Workspace (B)
|   |-- typescript (B.1)
|   |   |-- yourSmartContract.ts
|   |-- build (B.2)
...
```

This directory contains the two subdirectories `typescript` and `build`. All smart contracts and their related files are stored in this folder.

**B.1. Typescript**
This is where all your developed smart contracts are stored. The Typescript Config file (see `C.`) references this folder to create the actual builds (see `B.2`).

**B.2. Build**
This folder stores the auto-generated files from TypeScript. It has been specified in the Typescript Config file (see `C.`).

### C. tsconfig.json

```
yourFolder
...
|-- tsconfig.json (C)
...
```

The automatic creation of a `tsconfig.json` helps you focus on the most important things. This file contains all relevant settings and references to the individual folders, so that TypeScript files from `B.1` are copied to `B.2`.

### D. .gitignore

```
yourFolder
...
|-- .gitignore (D)
```

As a best practice, a `.gitignore` file is always expected to be located in the root folder. The content of this file should always include the path to `A.` as a line. This prevents private keys from accidentally being uploaded to platforms like GitHub. Please note that ignore files should not be created for other projects. If you use other projects in this folder, make sure to add the path to `A.` there as well.


## Options

The function `setEnvironment( {} )` can be executed without any additional options. However, if you want to change settings, use the following syntax:

```
easyMina.setEnvironment( {
    'projectName': 'hello',
    'credentialsRootFolderName': './super-secure/'
} )
```

In this example, the project name is changed using the key `projectName`, and the credentials root folder is changed using the key: `credentialsRootFolderName`. Please note that each input is validated against specific criteria. For instance, the credentials folder must start with a '.' and end with '/'. For more information, refer to the respective details page for each key, or check the code for error messages in the terminal in case of incorrect input.

For more information visit: [options](../options)
