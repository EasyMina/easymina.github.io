import data from './1-prefill.mjs'
import fs from 'fs'

const result = {
    'validations': {}
}

result['validations']['keyPath'] = Object
    .entries( data['keyPaths'] )
    .reduce( ( acc, a, index, all ) => {
        const [ key, value ] = a
        const struct = {
            'userPath': {
                'en': null
            },
            'validation': null,
            'category': null
        }

        struct['userPath']['en'] = value['userKeyPath']
        struct['validation'] = value['validation']
        struct['category'] = value['category']

        acc[ key ] = struct
        return acc
    }, {} )


result['validations']['regex'] = Object
    .entries( data['validations'] )
    .reduce( ( acc, a, index ) => {
        const [ key1, value1 ] = a 
        acc[ key1  ] = Object
            .entries( value1 )
            .reduce( ( abb, b, rindex ) => {
                const [ key2, value2 ] = b
                const struct = {
                    'description': {
                        'en': null
                    },
                    'regex': '',
                    'message': {
                        'en': null
                    }
                }

                struct['description']['en'] = value2['description']
                struct['regex'] = value2['regex']
                struct['message']['en'] = value2['message']
                abb[ key2 ] = struct
                return abb
            }, {} )
        return acc
    }, {} )


fs.writeFileSync( 
    'result.json', 
    JSON.stringify( result, null, 4 ), 
    'utf-8' 
)