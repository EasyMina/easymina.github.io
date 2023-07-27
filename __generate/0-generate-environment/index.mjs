import fs from 'fs'
import { GenerateOptions } from './src/Generate.mjs'


const config = './data/0-config.json'
const raw = fs.readFileSync( config, 'utf-8' )
const easyMinaConfig = JSON.parse( raw )

const generateOptions = new GenerateOptions()
generateOptions.init( { 'config': easyMinaConfig } )
generateOptions
    .start()
    .save()
