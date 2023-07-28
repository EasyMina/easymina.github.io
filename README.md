<img src="./assets/images/logo.png" height="60px">

`easy mina` is a nodejs module to create a bare-bone environment, with less a possible optionated pre-configuration.

Made for zk beginners and busy beavers 🦫

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
```js
import { EasyMina } from 'easymina'

const easyMina = new EasyMina()
await easyMina.setEnvironment( {
    'projectName': 'hello-world',
    'encrypt': false
} )
```


## Links

- [Github](https://github.com/EasyMina/easyMina) <br>