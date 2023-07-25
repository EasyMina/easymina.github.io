import fs from 'fs'


export class GenerateOptions {
    #easyMinaConfig
    #config
    #details
    #language
    #state
    #silent

    constructor() {
        this.#config = {
            'language': 'en',
            'path': {
                'descriptions': './data/1-option-details-descriptions.json',
                'templates': {
                    'detail': './data/option-template.txt',
                    'overview': './data/option-overview.txt'
                },
                'output': {
                    'optionsFolder': './../../options/',
                }
            }
        }

        return true
    }


    init( { config, language=null, silent=false } ) {
        !this.#silent ? console.log( 'Generate Pages' ) : ''
        !this.#silent ? console.log( '--------------' ) : ''

        this.#language = ( language === null ) ? this.#config['language'] : language
        this.#silent = silent
        this.#easyMinaConfig = config

        !this.#silent ? console.log( '  Init' ) : ''
        this.#addDetails()

        return true
    }


    start() {
        this.#state = {
            'details': null,
            'overview': null
        }

        !this.#silent ? console.log( '  Prepare' ) : ''
        !this.#silent ? console.log( '  - Detail' ) : ''
        this.#state['details'] = this.#detailPrepares()

        !this.#silent ? console.log( '  - Overview' ) : ''
        this.#state['overview'] = this.#overviewPrepares()


        return this
    }


    save() {

        !this.#silent ? console.log( '  Save' ) : ''
        !this.#silent ? console.log( '  - Detail' ) : ''
        this.#detailSave()

        !this.#silent ? console.log( '  - Overview' ) : ''
        this.#overviewSave()

        return true
    }


    #addDetails() {
        const raw = fs.readFileSync( 
            this.#config['path']['descriptions'], 
            'utf-8' 
        )

        this.#details = JSON.parse( raw )

        return true
    }


    #titleizeString( str ) {
        const result = str
            .toLowerCase()
            .replace(
                /(^|\s)\S/g, 
                ( letter ) => letter.toUpperCase()
            )
        return result
    }


    #setQuotes( str ) {
        if( str && str.trim() !== "") {
            return `"${str}"`
          } else {
            return `${str}`
        }
    }
    
    
    #keyPathToValue( { data, keyPath, separator='__' } ) {
        if( typeof keyPath !== 'string' ) {
            return undefined
        }
    
        const result = keyPath
            .split( separator )
            .reduce( ( acc, key, index ) => {
                if( !acc ) return undefined
                if( !acc.hasOwnProperty( key ) ) return undefined
                acc = acc[ key ]
                return acc
            }, data )
    
        return result
    }


    #detailPrepare( { item, index, rindex, sort } ) {
        const alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]
        const keyPath = item['keyPath']
        const userKeyPath = item['userPath'][ this.#language ]

        const struct = {
            'fileName': null, 
            'category': null,
            'data': {
                'sort': null,
                'numbering': null,
                'index': null,
                'title': null,
                'headline': null,
                'description': null,
                'default_value': null,
                '_default_value': null,
                'key_row': null,
                'validation_row': null
            }
        }

        struct['data']['sort'] = sort

        struct['category'] = item['category']
        struct['data']['numbering'] = `${alpha[ index ]}.${rindex+1}`
        struct['fileName'] = `${keyPath}.md`

        struct['data']['index'] = index
        struct['data']['title'] = `${struct['data']['numbering']}. ${userKeyPath}`
        struct['data']['headline'] = `${userKeyPath}`

        struct['data']['description'] = this.#details['keyPaths'][ keyPath ]['description'][ this.#language ]

        let default_value = this.#keyPathToValue( { 'data': this.#easyMinaConfig, 'keyPath': keyPath } )
        struct['data']['_default_value'] = default_value

        const str1 = Number.isInteger( default_value ) ? default_value : `"${default_value}"`
        struct['data']['default_value'] = `\`\`\`{ "${userKeyPath}": ${str1} }\`\`\``

        const category = [ this.#titleizeString( struct['category'] ), struct['category'] ]
        struct['data']['key_row'] = [
            `\`\`\`${userKeyPath}\`\`\``,
            `\`\`\`${keyPath}\`\`\``,
            `[${category[ 0 ]}](../options/#${category[ 1 ]})`
        ]   
            .join( ' | ' )
            .replace( /^/, '| ' ) 
            .replace( /$/, ' |' )

        const [ one, two ] = item['validation'].split( '__' )
        const regex = this.#easyMinaConfig['validations']['regexs'][ one ][ two ]

        struct['data']['validation_description'] = regex['description'][ this.#language ]

        struct['data']['validation_row'] = [
            `\`\`\`${default_value}\`\`\``,
            `\`\`\`${regex['regex']}\`\`\``,
            `\`\`\`${one}\`\`\``,
        ]   
            .join( ' | ' )
            .replace( /^/, '| ' ) 
            .replace( /$/, ' |' )

        return struct
    }



    #detailPrepares() {
        const prepare = Object
            .entries( this.#easyMinaConfig['validations']['keyPaths'] )
            .reduce( ( acc, a, index, all ) => {
                const [ key, value ] = a
                index === 0 ? '' : ''
                const category = value['category']
                !Object.hasOwn( acc, category ) ? acc[ category ] = [] : ''
                value['keyPath'] = key
                acc[ category ].push( value )

                if( index === all.length - 1 ) {
                    acc = Object.entries( acc )
                }

                return acc
            }, {} )
            .sort( ( a, b ) => b[ 0 ] - a[ 0 ] )
            .reduce( ( acc, a, index ) => {
                const [ key, values ] = a
                values
                    .sort( ( a, b ) => b['headline'] - a['headline'] )
                    .forEach( ( item, rindex ) => {
                        const result = this.#detailPrepare( { item, index, rindex, 'sort': acc.length } )
                        acc.push( result )
                    } )
    
                return acc
            }, [] )
    
        return prepare
    }


    #overviewPrepares() {
        const str = this.#state['details']
            .reduce( ( acc, a, index, all ) => {
                const key = a['category']
                if( !Object.hasOwn( acc, key ) ) {
                    acc[ key ] = []
                    acc[ key ].push( `|   | **Option** | **Default** | **Examples** | **Description** |` )
                    acc[ key ].push( `|:--|:--|:--|:--|:--|` )
                }
    
                const row = [
                    `${a['data']['numbering']}`,
                    `[${a['data']['headline']}](../options/${a['fileName']})`,
                    `\`\`\`${this.#setQuotes( a['data']['_default_value'] )}\`\`\``,
                    ``,
                    `${a['data']['description']}`
                ]
                    .join( ' | ' )
                    .replace( /^/, '| ' ) 
                    .replace( /$/, ' |' )
            
                acc[ key ].push( row )
    
                if( index === all.length - 1 ) {
                    acc = Object.entries( acc )
                }
    
                return acc
            }, {} )
            .map( a => {
                const keyPath = `${a[ 0 ]}`
                const description = this.#keyPathToValue( { 
                    'data': this.#details['categories'], 
                    keyPath 
                } )
                a.push( description[ this.#language] )
                return a
            } )
            .reduce( ( acc, a, index ) => {
                const str = [
                    `### ${this.#titleizeString( a[ 0 ] )}`,
                    ``,
                    `${a[ 2 ]}`,
                    ``,
                    a[ 1 ].join( "\n" ),
                    ``,
                    ``,
                    ``
                ]
                    .join( "\n" )
    
                acc += str
                
                return acc
            }, '' )
        
        return str
    }


    #detailSave() {
        this.#state['details']
            .forEach( struct => {
                let txt = fs.readFileSync( 
                    this.#config['path']['templates']['detail'], 
                    'utf-8' 
                )
    
                Object
                    .entries( struct['data'] )
                    .forEach( ( a, index ) => {
                        const [ key, value ] = a
                        const insert = `{{${key}}}`
    
                        const start = txt.indexOf( insert )
                        const end = start + insert.length
                        console.log( '>>>', start )
                        if( start !== -1 ) {
                            txt = txt.slice( 0, start ) + value + txt.slice( end )
                        }
                        
                    } )

                fs.writeFileSync( 
                    `${this.#config['path']['output']['optionsFolder']}${struct['fileName']}`, 
                    txt, 
                    'utf-8'
                )
            } )
    
        return 
    }


    #overviewSave() {
        const template = fs.readFileSync( 
            this.#config['path']['templates']['overview'], 
            'utf-8' 
        )

        const overview = template.replace( '{{tables}}', this.#state['overview'] )
        fs.writeFileSync( 
            `${this.#config['path']['output']['optionsFolder']}README.md`, 
            overview, 
            'utf-8'
        )

        return true
    }
}