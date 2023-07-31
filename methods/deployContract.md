---
sort: 2
title: B. deployContract()
---

# B. deployContract()

`.deployContract({})`: Helps you upload your first Smart Contract

:heavy_check_mark: Creation of Contract Addresses  
:heavy_check_mark: Finding and setting a Payer Account  
:heavy_check_mark: Uploading and saving essential information in a file  

Find more information about this method [deployContract](../deployContract)


## Quickstart

## Overview
 
With this method, it is easy to upload a Smart Contract to the blockchain. All necessary steps are either automatically handled or can be adjusted via parameters. As a prerequisite, `setEnvironment()` should have been called before.

### Default
To upload a Smart Contract using the `default` profile, no options need to be provided. Make sure to execute `setEnvironment()` beforehand. When called multiple times, no additional accounts will be created.

```javascript
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

```javascript
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

{{options}}
