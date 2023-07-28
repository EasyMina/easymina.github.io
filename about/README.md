---
sort: 1
title: About Easy Mina
---

<img src="./assets/images/logo.png" height="60px">


## Overview
Die eigentlichen Funktionen habe teilweise viele veränderbare Einstellungen. Um die komplexitä†zu reduzieren, können die Funktionen mit möglichst wenig oder keinen Parametern ausgeführt werden.

Folgende Funktionen sind vorhanden:

`setEnvironment`: Hilft dir beim Erstellen deines Arbeitsbereiches:

:heavy_check_mark: Erstellen von Accounts und Transfer von Test Tokens
:heavy_check_mark: Erstellen von Verzeichnissen für die Typescript programmierung 
:heavy_check_mark: Erstellen einer passenden typescript config file 
:heavy_check_mark: Best-practise Verhaltensweise und kontinuierliche Sicherheitschecks.

`deployContract`: Hilft dir deinen ersten Smart Contract hochzuladen

:heavy_check_mark: Erstellen von Contract Addressen
:heavy_check_mark: Finden und setzen von einem Payer Account 
:heavy_check_mark: Hochladen und abspeichern, der wichtigsten Informationen in einer Datei

`fetchInformation`: Hilft dir möglichst einfach die ersten Daten von der graphQl Schnittstelle abzufragen.

:heavy_check_mark: Vorgefertigte graphQl Queries für einen schnellen Start.
:heavy_check_mark: Warten auf Confirmation und Schätzung der Zeit bis zum nächsten Slot.


# About
`easy mina` is a Node.js module that helps you create a bare-bones environment with minimal opinionated pre-configuration.

Das Ziel ist es Neueinsteiger einen möglichst reibungslosen Einstieg in das Entwicklen von zk-snarks zu geben. Durch das Erstellen einer minimalen Arbeitsoberfläche wird die Aufmerksamkeit des Entwicklers ersteinmal auf die Struktur gerichtet. Die durch ihre simple Aufbauweise grundlegende Regeln indirekt erklärt. Auch werden best-practises per default mit eingebaut, wie verschlüsselung der Keys oder setzen eine `gitignore` datei mit einem ausschlusseintrag des credentialfolder und der zugehörigen keys. 





# About
Easy Mina wurde ursprünglich als side-projekt entwicklelt, um die entwicklung einer einreichnung für mina´s `zkignite cohort 0`zu erleichtern. In `cohort 1` wurde dann `Easy Mina` eigenständig gefördert mit dem Ziel über den Code hinaus auch eine umfassende Dokumentation zu erstellen.


Hierfür werden die ersten Berührungspunkte und Interaktionen mit der Mina geleitet und erklärend durchgeführt. 



Diese Einführung soll 

Der Entwickler soll befähigt werden, danach möglichst eigenständig 





# Credentials

## Overview

```
yourFolder
|-- .minaCredentials (A)
|   |-- accounts (A.1)
|   |-- contract (A.2)
|-- Workspace (B)
|   |-- ts (B.1)
|   |-- build (B.2)
|-- tsconfig.json (C)
|-- .gitignore (D)
```

**A. Credentials**  
Dieser root folder beinhaltet die beiden verzeichnisse `accounts` und `contracts`. Der folder name ist mit einem '.' versehen, was dem 

- A.1. Dieser subfolder enthält alle generierten account keys.  
- A.2. Hier werden alle hochgeladenen smart contract abgelegt.

**B. Workspace**  
Dieses Verzeichniss beinhaltet alle deine smart contracts.

B.1. Hier 