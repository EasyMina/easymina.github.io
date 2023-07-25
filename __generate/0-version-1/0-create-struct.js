function objectToKeyPaths( { data, parentKey='', separator='__' } ) {
    const result = Object
        .entries( data === undefined || data === null ? {} : data )
        .reduce( ( acc, [ key, value ], index ) => {
            const currentKey = parentKey ? `${parentKey}${separator}${key}` : key;
            if( typeof data[ key ] === 'object' && !Array.isArray( data[ key ] ) ) {
                const _next = objectToKeyPaths( {
                    'data': data[ key ],
                    'parentKey': currentKey,
                    separator
                } )
                acc.push( ..._next )
              } else {
                acc.push( currentKey )
              }
            return acc
        }, [] )

    return result
}


function generatePaths(data, parentKey = '', separator = '__') {
    const paths = [];
  
    for( const key in data ) {
      const currentKey = parentKey ? `${parentKey}${separator}${key}` : key;
  
      if( typeof data[ key ] === 'object' && !Array.isArray( data[ key ] ) ) {
        paths.push(...generatePaths(data[key], currentKey, separator));
      } else {
        paths.push(currentKey);
      }
    }
  
    return paths;
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


const fs = require( 'fs' )
const raw = fs.readFileSync( './data/0-config.json', 'utf-8' )
const config = JSON.parse( raw ) 

const raw2 = fs.readFileSync( './data/2-use.json', 'utf-8' )
const allow = JSON.parse( raw2 )

  
const structs = generatePaths( config )
    .filter( keyPath => allow['use'].includes( keyPath ) )
    .reduce( ( acc, keyPath, index ) => {
        index === 0 ? acc = { 'keyPaths': {}, 'validations': {} } : ''

        const page = {
            'userKeyPath': '',
            'description': '',
            'note': '',
            'validation': '',
            'reference': [],
            'defaultValue': null,
            'categories': [
                'createEnvironment',
                'deployContract',
                'interactWithContract',
                'listenToEvents'
            ],
            'examples': [
                {
                    'template': null,
                    'description': '',
                    'self': null
                }
            ]
        }

/*
        const camelCase = keyPath
            .split( '__' )
            .map( ( part, index ) => {
                if( index === 0 ) return part
                return `${part.charAt( 0 ).toUpperCase()}${part.slice( 1 )}`
            } )
            .join( '' )

        page['camelCase'] = camelCase
*/

        acc['keyPaths'][ keyPath ] = page
        return acc
    }, {} )

structs['validations'] = JSON.parse( 
    fs.readFileSync( './data/1-validations.json', 'utf-8' )
)


fs.writeFileSync( 'tmp.json', JSON.stringify( structs, null, 4 ) )


/*
    "description": "Set margin bottom",
    "note": null,
    "numbering": null,
    "dataset": "single",
    "validation": "single__integer__i0_n",
    "examples": [
        {
            "description": "Set bottom margin to: ---self---",
            "self": 0
        },
        {
            "description": "Set bottom margin to: ---self---",
            "self": 200
        }
    ]
*/


/*
    const keyPath = 'environment__addresses__root'
    const value = keyPathToValue( { 
        'data': data, 
        'keyPath': keyPath
    } )

    console.log( 'keyPaths', keyPaths )
    console.log( `${keyPath}: ${value}` )
*/