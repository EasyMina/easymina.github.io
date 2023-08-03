<img src="./assets/images/logo.png" height="60px">

Made for zk beginners 🦫

`easy mina` is a Node.js module that helps you create a bare-bones environment with minimal opinionated pre-configuration.

Helps you set up:  
:heavy_check_mark: Environment variables and folders  
:heavy_check_mark: Your smart contract workspace with a small example  
:heavy_check_mark: TypeScript config file  
:heavy_check_mark: Security checks to minimize the risk of security exploits.  


## Quickstart

```bash
npm init -y
npm i easymina
```


index.mjs
```nodejs
import { EasyMina } from 'easymina'

const easyMina = new EasyMina()
await easyMina.setEnvironment( {
    'projectName': 'hello-world',
    'encrypt': false
} )
```


## Links

- [Github](https://github.com/EasyMina/easyMina) <br>