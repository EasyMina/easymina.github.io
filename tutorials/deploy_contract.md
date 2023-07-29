---
sort: 2
title: B. Deploy your Contract
---

# B. Deploy your Contract

EasyMina offers a swift and straightforward way to start deploying contracts. Just create a new folder, initialize npm, install EasyMina, create an `index.mjs` file, and execute the contract deployment method using `await easyMina.deployContract({ 'projectName': 'hello-world' })`.

## Result
1. terminal

```
mkdir first-mina-project && cd first-mina-project
```

```
npm init -y && npm i easymina
```

2. index.mjs

```nodejs
import { EasyMina } from 'easymina';
const easyMina = new EasyMina();

await easyMina.deployContract({
    'projectName': 'hello-world'
});
```

3. terminal

```
node index.mjs
```


## Overview
The fastest way to get started is as follows:
- Create a folder.
- Initialize a Node.js project with `npm init`.s
- Install EasyMina with `npm i easymina`.
- Create a file `index.mjs`.
- Import the `EasyMina` class with `import { EasyMina } from 'easymina'`.
- Instantiate an instance of `EasyMina` with `const easyMina = new EasyMina()`.
- Execute the asynchronous method: `await easyMina.deployContract({})`.

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

### Step 4: Adding the Deploy Contract Method

Next, we add `easyMina.deployContract({})` to our code, ensuring that we pass an empty object `{}` to inherit the default settings. Please note that this assumes the workspace has been created using `.setEnvironment({})` beforehand. If not, this step will be executed first.

```nodejs
import { EasyMina } from 'easymina';
const easyMina = new EasyMina();

await easyMina.deployContract({
    'projectName': 'hello-world'
});
```

### Step 5: Run your Script

Now, a Deployer Account (see [setEnviroment A.1.](../features/setEnvironment.html#a-credentials) Key will be initialized, a Verification Key will be calculated, and the transaction will be prepared and subsequently uploaded. Upon successful transaction submission, a Contract Key (see [setEnviroment A.2.](../features/setEnvironment.html#a-credentials) file will be created, containing all essential information, including direct links to the respective detail pages of the blockchain explorers. The Verification Key and the actual Smart Contract will also be stored in this file, making future interactions more straightforward.

```bash
node index.mjs
```