<img src="./assets/images/logo.png" height="60px">

`easy mina` is a nodejs module to create your first mina smart contract.
 
:heavy_check_mark: Easy to use

:heavy_check_mark: Help you to create your environment. 


## Source Code

```bash
npm init -y
npm i easy-mina
```


index.mjs
```js
import { EasyMina } from 'easymina'

const easyMina = new EasyMina()
await easyMina.setEnvironment( {
    'projectName': 'hello-world'
} )
```


## Links

- [Github](https://github.com/EasyMina/easyMina) <br>