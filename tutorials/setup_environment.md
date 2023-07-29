---
sort: 1
title: A. Setup your environment
---

# A. Setup your environment

This guide explains the steps to quickly set up and use the "Easy Mina" Node.js module, which includes creating a new folder, initializing a Node.js project, installing the module, importing and instantiating the `EasyMina` class, and setting up the workspace environment.

## Result
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
await easyMina.setEnvironment({
    'projectName': 'hello-world'
})
```


## Overview
The fastest way to get started is as follows:
- Create a folder.
- Initialize a Node.js project with `npm init`.
- Install EasyMina with `npm i easymina`.
- Create a file `index.mjs`.
- Import the `EasyMina` class with `import { EasyMina } from 'easymina'`.
- Instantiate an instance of `EasyMina` with `const easyMina = new EasyMina()`.
- Execute the asynchronous method: `await easyMina.setEnvironment({})`.

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
The `setEnvironment` method checks whether an EasyMina environment already exists. It either creates it from scratch, replaces parts of it, or skips functions if everything already exists. During this process, a Mina account is created and stored, and test tokens called `faucets` are requested. Track the progress in the terminal, where you will also find further links. Please note that there are curly braces inside the round brackets `({})`. By default, you don't need to pass any variables; you can find a wide range of modification options at [./options](https://easymina.github.io/options/).

```nodejs
import { EasyMina } from 'easymina'
const easyMina = new EasyMina()

await easyMina.setEnvironment({
    'projectName': 'hello-world'
})
```

### 5: Run your program

```bash
node index.mjs
```