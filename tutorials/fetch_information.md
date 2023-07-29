---
sort: 3
title: C. Fetch Information from Mina
---

# C. Fetch Information from Mina

## Code

## Overview
The fastest way to get started is as follows:
- 

*Check all available options and payload data points here: [sections/](../sections/)*

## Steps

### 1: Create a new folder
Create a new folder and navigate into it.

```bash
mkdir first-mina-project && cd first-mina-project
```

### 2: Initialize npm
Initialize the Node Package Manager and add `easymina` as a package. Using `&&`, the commands `npm init -y` and `npm i easymina` will be executed one after the other. The `-y` after `npm init` means that all recommended settings will be added. If you want to see the prompts and customize the settings, simply omit the `-y`. The `i` after `npm` stands for `install`. With this command, npm will download the latest version of EasyMina and place it in the modules folder.

```bash
npm init -y && npm i easymina
```

### 2: Create a file
Open a text editor and create a file named `index.mjs`.

### 3: Import and Instantiate EasyMina
Now, import the downloaded module using `import { EasyMina } from 'easymina'`. After that, it needs to be instantiated. `EasyMina` is programmed as a class, and to use it, you need to create a new instance of it using the `new` keyword.

```nodejs
import { EasyMina } from 'easymina'
const easyMina = new EasyMina()
```

### 4: Set up your workspace