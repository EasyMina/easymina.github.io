import data from './1-prefill.mjs' 
import fs from 'fs'


function titleizeString( str ) {
    return str.toLowerCase().replace(/(^|\s)\S/g, (letter) => letter.toUpperCase());
}



function keyPathToValue( { data, keyPath, separator='__' } ) {
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


function prepareCmds( { data, json } ) {
    const alpha = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K' ]

    const prepare = Object
        .entries( data['keyPaths'] )
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
                .forEach( ( b, rindex ) => {
                    const value = b
                    const keyPath = value['keyPath']
                    const struct = {
                        'fileName': null, 
                        'category': null,
                        'data': {
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

                    struct['category'] = value['category']
                    struct['data']['numbering'] = `${alpha[ index ]}.${rindex+1}`
                    struct['fileName'] = `${keyPath}.md`

                    struct['data']['index'] = index
                    struct['data']['title'] = `${struct['data']['numbering']}. ${value['userKeyPath']}`
                    struct['data']['headline'] = `${value['userKeyPath']}`
                    struct['data']['description'] = value['description']

                    let default_value = keyPathToValue( { 'data': json, 'keyPath': keyPath } )
                    struct['data']['_default_value'] = default_value
                    const str1 = Number.isInteger( default_value ) ? default_value : `"${default_value}"`
                    struct['data']['default_value'] = `\`\`\`{ "${value['userKeyPath']}": ${str1} }\`\`\``
            
                    const category = [ 'Default', 'default' ]
                    struct['data']['key_row'] = [
                        `\`\`\`${value['userKeyPath']}\`\`\``,
                        `\`\`\`${keyPath}\`\`\``,
                        `[${category[ 0 ]}](../options/#${category[ 1 ]})`
                    ]   
                        .join( ' | ' )
                        .replace( /^/, '| ' ) 
                        .replace( /$/, ' |' )
            
                    const [ one, two ] = value['validation'].split( '__' )
                    const regex = data['validations'][ one ][ two ]
            
                    struct['data']['validation_description'] = regex['description']
                    struct['data']['validation_row'] = [
                        `\`\`\`${default_value}\`\`\``,
                        `\`\`\`${regex['regex']}\`\`\``.replace( '$', "\$"),
                        `\`\`\`${one}\`\`\``,
                    ]   
                        .join( ' | ' )
                        .replace( /^/, '| ' ) 
                        .replace( /$/, ' |' )
            
                    acc.push( struct )
                } )

            return acc
        }, [] )

    return prepare
}


function prepareOverview( { prepare } ) {
    const str = prepare
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
                `${a['data']['_default_value']}`,
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
            const keyPath = `${a[ 0 ]}__description`
            const description = keyPathToValue( { 'data': data['categories'], keyPath } )
            a.push( description )
            return a
        } )
        .reduce( ( acc, a, index ) => {
            const str = [
                `### ${titleizeString( a[ 0 ] )}`,
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


function saveDetail( { prepare } ) {
    test
        .forEach( struct => {
            let txt = fs.readFileSync( './data/option-template.txt', 'utf-8' )

            Object
                .entries( struct['data'] )
                .forEach( ( a, index ) => {
                    const [ key, value ] = a
                    const insert = `{{${key}}}`

                        const start = txt.indexOf( insert )
                        const end = start + insert.length

                        txt = txt.slice(0, start) + value + txt.slice( end );

                } )


            fs.writeFileSync( 
                `./generate/options/${struct['fileName']}`, 
                txt, 
                'utf-8'
            )
        } )

    return 
}





const path = './generate/options/'

const raw = fs.readFileSync( './data/0-config.json', 'utf-8' )
const json = JSON.parse( raw )
const prepare = prepareCmds( { data, json } )
// const detail = saveDetail( { prepare } )

const str = prepareOverview( { prepare } )
const template = fs.readFileSync( './data/option-overview.txt', 'utf-8' )

const overview = template.replace( '{{tables}}', str )
fs.writeFileSync( './generate/options/README.md', overview, 'utf-8')

