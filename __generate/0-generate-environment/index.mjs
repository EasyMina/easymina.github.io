import fs from 'fs'
import { GenerateOptions } from './src/Generate.mjs'
import { EasyMina } from 'easymina'

/*
    const config = './data/0-config.json'
    const raw = fs.readFileSync( config, 'utf-8' )
    const easyMinaConfig = JSON.parse( raw )
*/

const easyMina = new EasyMina()
const easyMinaConfig = easyMina.getConfig()

const generateOptions = new GenerateOptions()
generateOptions.init( { 'config': easyMinaConfig } )
generateOptions
    .start()
    .save()
