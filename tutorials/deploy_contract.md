---
sort: 2
title: B. Deploy your Contract
---

# B. Deploy your Contract

## Code
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
easyMina.deploy({})
```

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

### Step 4: Adding the Deploy Contract Method

Next, we add `easyMina.deployContract({})` to our code, ensuring that we pass an empty object `{}` to inherit the default settings. Please note that this assumes the workspace has been created using `.setEnvironment({})` beforehand. If not, this step will be executed first.

```nodejs
import { EasyMina } from 'easymina';
const easyMina = new EasyMina();

await easyMina.deployContract({
    'projectName': 'hello-world'
});
```

### Step 5: Execute the Program

Now, the Deployer Key is initialized, a Verification Key is calculated, the transaction is prepared, and subsequently uploaded. Upon a successful transaction submission, a Contract Key file is created, containing all essential information, including direct links to the respective detail pages of the blockchain explorers. The Verification Key and the actual Smart Contract are also stored in this file, making future interactions more straightforward.

```bash
node index.mjs
```