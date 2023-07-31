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
 
 Mit dieser Method ist es einfach möglich einen Smart Contract auf die Blockchain zu übertragen. Hierfür werden alle nötigen Schritte entweder selbstständig übernommen oder können über Parameter angepasst werden. Als Voraussetzung sollte davor `setEnvironment()` aufgerufen worden sein.

### Default
Um einen Smart Contract mit dem `default` Profil hochzuladen, müssen garkeine Optionen übergeben werden. Davor sollte `setEnviroment()` ausgeführt werden. Es werden beim mehrmaligen Aufrufen keine weiteren Accounts erstellt. 

```
await easyMina
    .setEnvironment({})
await easyMina
    .deployContract({})
```

Dieses Kommando überprüft ob eine Environment besteht. Lädt den [projectName](../options/meta__name.html) und benutzt diesen Name als Ausgangspunkt um einen Account festzulegen. Auch wird später den abgespeicherte Contract mit diesem Namen beannnt. Informationen wo der Vertrag abgelegt wird, und welche Informationen erhalten sind, findest du [hier](../methods/setEnvironment.html#a-credentials). Ein komplettes Tutorial findest du [hier](../tutorials/deploy_contract.html)


### Custom Upload
Folgende Parameter werden gebraucht um einen Smart Contract hochzuladen. Keine der folgenden Parameters ist aber required bei nicht übertragung werden default werte verwendet.

Hier eine Auswahl an Einstelungsmöglichkeiten:

| | **Name** | **Description** |
|:--|:--|:--|
| A. | `projectName` | Legt den Namespace fest, der für Accounts und Contracts verwendet wird |
| B. | `deployerFileName` | Hier kann manuell eine Account ausgesucht werden |
| C. | `smartContractFileName` | Hier kann manuell der SmartContract File Name eingegeben werden. Diesen findest du den unter [Credentials](./methods/setEnvironment.html#a-credentials) |
| D. | `smartContractClassName` | Hier kann du den Klassen Namen festlegen, der verwendet wird um die Kompilierung durchzuführen. |

Weitere Optionen findest du unter [options](#options)


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

{{options}}