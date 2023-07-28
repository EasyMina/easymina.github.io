---
sort: 2
title: About
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