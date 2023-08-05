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
                    'root': './data/',
                    'detail': './data/option-template.txt',
                    'overview': './data/option-overview.txt'
                },
                'output': {
                    'optionsFolder': './../../options/',
                    'methodsFolder': './../../methods/'
                }
            },
            'url': {
                'methods': 'methods/'
            }
        }

        return true
    }


    init( { config, language=null, silent=false } ) {
        !this.#silent ? console.log( 'Generate Pages' ) : ''
        !this.#silent ? console.log( '--------------' ) : ''

        this.#silent = silent
        this.#easyMinaConfig = config

        this.#language = this.#easyMinaConfig['messages']['use']
        console.log( this.#language )
        
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
        const prepare = this.#overviewPrepares()
        this.#state['templates'] = this.#overviewRenderTemplates( { prepare } )

        return this
    }


    save() {
        !this.#silent ? console.log( '  Save' ) : ''
        !this.#silent ? console.log( '  - Detail' ) : ''
        this.#detailSave()

        !this.#silent ? console.log( '  - Overview' ) : ''
        this.#overviewSaveOptions()
        this.#overviewSaveMethods()

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
        if( typeof str === 'string' ) {
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


    #detailPrepare( { item, index, rindex, sort, sum } ) {
        const alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]
        const keyPath = item['keyPath']
        const userKeyPath = item['userPath'][ this.#language ]

        const struct = {
            'fileName': null, 
            'category': null,
            'methods': null,
            'data': {
                'sort': null,
                'indexing': null,
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

        struct['methods'] = this.#easyMinaConfig['validations']['keyPaths'][ keyPath ]['methods']

        struct['category'] = item['category']

        struct['data']['indexing'] = sum
        struct['data']['numbering'] = `${alpha[ index ]}.${rindex+1}`
        struct['fileName'] = `${keyPath}.md`

        struct['data']['index'] = index
        struct['data']['title'] = `${struct['data']['indexing']}. ${userKeyPath}`//`${struct['data']['numbering']}. ${userKeyPath}`
        struct['data']['headline'] = `${userKeyPath}`

        struct['data']['description'] = this.#details['keyPaths'][ keyPath ]['description'][ this.#language ]

        let default_value = this.#keyPathToValue( { 'data': this.#easyMinaConfig, 'keyPath': keyPath } )
        switch( keyPath ) {
            case 'environment__template__source__content':
                default_value = '...'
                break
        }
        struct['data']['_default_value'] = default_value

        const str1 = Number.isInteger( default_value ) ? default_value : `"${default_value}"`
        struct['data']['default_value'] = `\`\`\`{ "${userKeyPath}": ${str1} }\`\`\``

        const category = [ this.#titleizeString( struct['category'] ), struct['category'] ]
        const methods = item['methods']
            .map( method => `[${method}](../${this.#config['url']['methods']}${method}.html#options)` )
            .join( ', ' )

        struct['data']['key_row'] = [
            `\`\`\`${userKeyPath}\`\`\``,
            `\`\`\`${keyPath}\`\`\``,
            `${methods}`,
            `[${category[ 0 ]}](../options/#${category[ 1 ]})`,
        ]   
            .join( ' | ' )
            .replace( /^/, '| ' ) 
            .replace( /$/, ' |' )

        const [ one, two ] = item['validation'].split( '__' )
        const regex = this.#easyMinaConfig['validations']['regexs'][ one ][ two ]

        struct['data']['validation_description'] = regex['description'][ this.#language ]

        struct['data']['validation_row'] = [
            `\`\`\`${this.#setQuotes( default_value )}\`\`\``,
            `\`\`\`${regex['regex']}\`\`\``,
            `\`\`\`${one}\`\`\``,
        ]   
            .join( ' | ' )
            .replace( /^/, '| ' ) 
            .replace( /$/, ' |' )

        return [ struct, sum ]
    }



    #detailPrepares() {
        let sum = 1
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
                        const [ result, s ] = this.#detailPrepare( { item, index, rindex, 'sort': acc.length, sum } )
                        sum = s + 1
                        acc.push( result )
                    } )
    
                return acc
            }, [] )
    
        return prepare
    }


    #overviewRenderTemplates( { prepare } ) {
        const result = {
            'overview': [],
            'methods': []
        }

        result['overview'] = [ 
            [ 'methods', 'By Method', '{{byMethod}}' ],
            [ 'categories', 'By Category', '{{byCategory}}' ]
        ]
            .reduce( ( acc, a, index ) => {
                const [ type, headline, selector ] = a
                const tmp = Object
                    .entries( prepare[ type ] )
                    .reduce( ( abb, b, rindex ) => {
                        const [ key, str ] = b 
                        abb += [
                            `### ${key}`,
                            '',
                            str,
                            '',
                            ''
                        ]   
                            .join( "\n" )

                        return abb
                    }, '' )

                const str = [ tmp ]
                    .join( "\n" )

                const r = [
                    selector,
                    str
                ]

                acc.push( r )

                return acc
            }, [] )

        result['methods'] = prepare['methods']

        return result
    }




/*
    #overviewPrepareByMethod() {
        console.log( '>>>', this.#state['details'] )

        const unique = this.#state['details']
            .map( a => a['methods'] )
            .flat( 1 )
            .filter( ( v, i, a ) => a.indexOf( v ) === i )

        const method = unique[ 0 ]

        const n = this.#state['details']
            .filter( a => a['methods'].includes( method ) ) 
            .reduce( ( acc, a, index, all ) => {
                const key = method
                if( !Object.hasOwn( acc, key ) ) {
                    acc[ key ] = []
                    acc[ key ].push( `|   | **Option** | **Default** | **Examples** | **Description** |` )
                    acc[ key ].push( `|:--|:--|:--|:--|:--|` )
                }

                let value = a['data']['_default_value']
                const row = [
                    `${a['data']['numbering']}`,
                    `[${a['data']['headline']}](../options/${a['fileName']})`,
                    `\`\`\`${this.#setQuotes( value )}\`\`\``,
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

        return true
    }
*/

/*
    #overviewPrepareByCategory() {
        const str = this.#state['details']
            .reduce( ( acc, a, index, all ) => {
                const key = a['category']
                if( !Object.hasOwn( acc, key ) ) {
                    acc[ key ] = []
                    acc[ key ].push( `|   | **Option** | **Default** | **Examples** | **Description** |` )
                    acc[ key ].push( `|:--|:--|:--|:--|:--|` )
                }

                let value = a['data']['_default_value']
                const row = [
                    `${a['data']['numbering']}`,
                    `[${a['data']['headline']}](../options/${a['fileName']})`,
                    `\`\`\`${this.#setQuotes( value )}\`\`\``,
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
*/

    overviewRenderTable( { indexes, type, key } ) {
        console.log( 'type', type )

        const rows = indexes
            .reduce( ( acc, i, index, all ) => {
                if( index === 0 ) {
                    const s = [
                        '',
                        '**Options**',
                        '**Default**',
                        '**Examples**',
                        '**Description**'
                    ]
                        .reduce( ( abb, a, rindex, _all ) => {
                            abb[ 0 ] += a
                            abb[ 0 ] += ( rindex !== _all.length-1 ) ? ' | ' : ' |'
                            abb[ 1 ] += ':--'
                            abb[ 1 ] += '|'
                            return abb
                        }, [ '| ', '|' ] )
                        .forEach( row => acc.push( row ) )

                    // acc.push( `|   | **Option** | **Default** | **Examples** | **Description** |` )
                    // acc.push( `|:--|:--|:--|:--|:--|` )
                }

                const a = this.#state['details'][ i ]
                let value = a['data']['_default_value']
                const row = [
                    // type === 'methods' ? `${a['data']['indexing']}` :`${a['data']['numbering']}`,
                    `${index+1}`,
                    `[${a['data']['headline']}](../options/${a['fileName']})`,
                    `\`\`\`${this.#setQuotes( value )}\`\`\``,
                    ``,
                    `${a['data']['description']}`
                ]
                    .join( ' | ' )
                    .replace( /^/, '| ' ) 
                    .replace( /$/, ' |' )
            
                acc.push( row )
                return acc
            }, [] )

        const result = [
            `${this.#details[ type ][ key ][ this.#language ]}`,
            ``,
            rows.join( "\n" )
        ]
            .join( "\n")

        return result
    }


    #overviewPrepares() {
        let result = {
            'methods': {},
            'categories': {}
        }

        const lookUp = [
            [ 'methods', 'methods' ],
            [ 'categories', 'category' ]
        ]
            .reduce( ( abb, b, rindex ) => {
                const [ category, type ] = b

                abb[ category ] = this.#state['details']
                    .map( a => {
                        switch( type ) {
                            case 'category':
                                return [ a[ type ] ]
                                break
                            case 'methods':
                                return a[ type ]
                            default:
                                console.log( `Type "${type}" not found` ) 
                                process.exit( 1 )
                                break
                        }
                    } )
                    .flat( 1 )
                    .filter( ( v, i, a ) => a.indexOf( v ) === i )
                    .reduce( ( acc, key, index ) => {
                        acc[ key ] = this.#state['details']
                            .map( ( a, index ) => {
                                a['index'] = index
                                return a
                            } )
                            .filter( item => {
                                switch( type ) {
                                    case 'category': 
                                        return item[ type ] === key
                                        break
                                    case 'methods':
                                        return item[ type ].includes( key )
                                        break
                                }
                            } )
                            .map( a => a['index'] )
                        return acc
                    }, {} )
                return abb
            }, {} )

        result = Object
            .entries( lookUp )
            .reduce( ( abb, b, rindex ) => {
                const [ type, value ] = b
                abb[ type ] = Object
                    .entries( value )
                    .reduce( ( acc, a, index ) => {
                        const [ key, indexes ] = a
                        acc[ key ] = this.overviewRenderTable( { indexes, type, key } )
                        return acc
                    }, {} )

                return abb
            }, {} )

        return result
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


    #overviewSaveMethods() {
        Object
            .entries( this.#state['templates']['methods'] )
            .forEach( a => {
                const [ key, str ] = a
                const template = fs.readFileSync( 
                    this.#config['path']['templates']['root'] + key + '.txt', 
                    'utf-8' 
                )
                    .replace( '{{options}}', str )


                fs.writeFileSync( 
                    `${this.#config['path']['output']['methodsFolder']}${key}.md`, 
                    template, 
                    'utf-8'
                )

                
            })

        return true
    }


    #overviewSaveOptions() {
        const template = fs.readFileSync( 
            this.#config['path']['templates']['overview'], 
            'utf-8' 
        )

        const overview = this.#state['templates']['overview']
            .reduce( ( acc, a, index ) => {
                const [ from, to ] = a

                acc = acc
                    .replace( from, to  )

                return acc
            }, template )

        fs.writeFileSync( 
            `${this.#config['path']['output']['optionsFolder']}README.md`, 
            overview, 
            'utf-8'
        )

        return true
    }
}