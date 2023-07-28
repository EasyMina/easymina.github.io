---
sort: 1
title: About Easy Mina
---

<img src="./../assets/images/logo.png" height="60px">


```
yourFolder
|-- .minaCredentials (A)
|   |-- accounts (A.1)
|   |   |-- yourKey1.json
|   |   |-- yourKey2.json
|   |-- contract (A.2)
|   |   |-- yourContract.json
|   |   |-- yourContract.json
|-- Workspace (B)
|   |-- ts (B.1)
|   |   |-- yourSmartContract.ts
|   |-- build (B.2)
|-- tsconfig.json (C)
|-- .gitignore (D)
```


# About
`easy mina` is a Node.js module that assists newcomers in getting started with zk-snark development by providing a minimal and straightforward environment with minimal opinionated pre-configuration.

The goal is to offer developers a smooth entry into zk-snark development by creating a minimal workspace that focuses their attention on the structure. The simple setup indirectly explains fundamental rules. Additionally, best practices are built-in by default, such as key encryption and the inclusion of a `.gitignore` file with exclusions for the credential folder and its associated keys.

## History
Easy Mina was originally developed as a side project to facilitate the submission process for Mina's `zkignite cohort 0`. In `cohort 1`, `Easy Mina` received independent funding with the aim of creating comprehensive documentation beyond the code.

## Features
The actual functions come with several configurable settings. To reduce complexity, the functions can be executed with as few parameters as possible or none at all.

The following functions are available:

`setEnvironment`: Assists in creating your workspace:

:heavy_check_mark: Account creation and Test Token transfers  
:heavy_check_mark: Directory setup for TypeScript programming  
:heavy_check_mark: Creation of an appropriate TypeScript config file  
:heavy_check_mark: Best-practice behavior and continuous security checks  

>> Find more information about this method [setEnvironment](./set%20environment)

`deployContract`: Helps you upload your first Smart Contract

:heavy_check_mark: Creation of Contract Addresses  
:heavy_check_mark: Finding and setting a Payer Account  
:heavy_check_mark: Uploading and saving essential information in a file  

>> Find more information about this method [deployContract](./deploy%20Contract)

`fetchInformation`: Helps you easily query initial data from the GraphQL interface

:heavy_check_mark: Pre-built GraphQL queries for a quick start  
:heavy_check_mark: Waiting for confirmation and estimating the time until the next slot  

>> Find more information about this method [fetchInformation](./fetch%20Informationen)

`readContract` coming soon...

`updateContract` coming soon...