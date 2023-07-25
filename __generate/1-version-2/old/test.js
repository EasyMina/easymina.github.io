const ttt = {
    "meta__name": {
        "userKeyPath": "projectName",
        "description": "Here, you can set the project name, which will be used as the file name for newly generated keys.",
        "note": "To change the file name, you need to modify the file name structure.",
        "validation": "string__hyphenAsSpace",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            // "deployContract",
            // "interactWithContract",
            // "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change the project name to 'easy-mina'.",
                "self": "easy-mina"
            }
        ]
    },
    "environment__addresses__splitter": {
        "userKeyPath": "fileNameSplitter",
        "description": "Here you can switch between \"__\" and \"--\" as splitter in your fileName structure",
        "note": "",
        "validation": "string__splitters",
        "reference": [],
        "defaultValue": null,
        "category": "account",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Set splitter to \"__\"",
                "self": "__"
            }
        ]
    },
    "environment__addresses__root": {
        "userKeyPath": "credentialsRootFolderName",
        "description": "Here, you can set the root folder for your credentials.",
        "note": "Note that name needs to start with a \".\" for security reasons.",
        "validation": "string__folderNameInvisible",
        "reference": [],
        "defaultValue": null,
        "category": "account",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "",
                "self": null
            }
        ]
    },
    "environment__addresses__deployers__folder": {
        "userKeyPath": "accountsFolderName",
        "description": "Here, you can set the folder name for your account keys.",
        "note": "To change your root folder, go to {{environment__addresses__root}}",
        "validation": "string__folderName",
        "reference": [
            "environment__addresses__root",
            "environment__addresses__contracts__folder"
        ],
        "defaultValue": null,
        "category": "account",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change folder name to: {{self}}",
                "self": 'my-keys/'
            }
        ]
    },
/*
    "environment__addresses__deployers__fileNameStruct": {
        "userKeyPath": "fileNameStructDeployers",
        "description": "",
        "note": "",
        "validation": "",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "",
                "self": null
            }
        ]
    },
*/
    "environment__addresses__contracts__folder": {
        "userKeyPath": "contractsFolderName",
        "description": "Here, you can set the folder name for your contract keys.",
        "note": "To change your root folder, go to {{environment__addresses__root}}.",
        "validation": "string__folderName",
        "reference": [
            "environment__addresses__root",
            "environment__addresses__deployers__folder"
        ],
        "defaultValue": null,
        "category": "account",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change folder name to: {{self}}",
                "self": 'my-contracts/'
            }
        ]
    },
/*
    "environment__addresses__contracts__fileNameStruct": {
        "userKeyPath": "",
        "description": "",
        "note": "",
        "validation": "",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "",
                "self": null
            }
        ]
    },
*/
    "environment__workspace__contracts__root": {
        "userKeyPath": "workspaceRootFolderName",
        "description": "This root folder includes all your smart contracts, in both .ts versions and those compiled through TypeScript.",
        "note": "",
        "validation": "string__folderName",
        "reference": [
            "environment__workspace__contracts__ts__folder",
            "environment__workspace__contracts__build__folder"
        ],
        "defaultValue": null,
        "category": "workspace",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change folder name to:",
                "self": "my-work/"
            }
        ]
    },
    "environment__workspace__contracts__ts__folder": {
        "userKeyPath": "workspaceTypescriptFolderName",
        "description": "This folder sets a name where all your developed TypeScript smart contracts will located.",
        "note": "Only the files in this folder will be selected for compilation by TypeScript.",
        "validation": "string__folderName",
        "reference": [
            "environment__workspace__contracts__root",
            "environment__workspace__contracts__build__folder"
        ],
        "defaultValue": null,
        "category": "workspace",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change name to: {{self}}",
                "self": "my-smart-contracts/"
            }
        ]
    },
    "environment__workspace__contracts__build__folder": {
        "userKeyPath": "workspaceBuildFolderName",
        "description": "This folder sets a name for the location of all your automatically compiled TypeScript smart contracts.",
        "note": "The compiled smart contracts in this folder are used to deploy a smart contract to the Mina blockchain.",
        "validation": "string__folderName",
        "reference": [
            "environment__workspace__contracts__root",
            "environment__workspace__contracts__ts__folder"
        ],
        "defaultValue": null,
        "category": "workspace",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change name to: {{self}}",
                "self": "ready-to-deploy/"
            }
        ]
    },
    "network__use": {
        "userKeyPath": "networkName",
        "description": "Here you can change the network your are using.",
        "note": "Currently, only the 'berkeley' test network is supported",
        "validation": "string__networkName",
        "reference": [],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "network__berkeley__explorer__transaction": {
        "userKeyPath": "transactionExplorer",
        "description": "Here, you can change the default explorer for transactions. This is used to generate direct links, which will also be stored in the respective account files.",
        "note": "To switch to another network, go to {{network__use}}.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "network__berkeley__explorer__wallet": {
        "userKeyPath": "walletExplorer",
        "description": "Here, you can change the default explorer to show wallet accounts. This is used to generate direct links, which will also be stored in the respective account files.",
        "note": "To switch to another network, go to {{network__use}}.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "",
                "self": null
            }
        ]
    },
    "network__berkeley__node": {
        "userKeyPath": "berkeleyNode",
        "description": "Here, the node provider can be set.",
        "note": "This node is not used for account queries via snarkyjs; instead, the proxy access is utilized.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "network__berkeley__nodeProxy": {
        "userKeyPath": "berkeleyNodeProxy",
        "description": "Here, you can change the node URL used to query account balances and similar information, for example.",
        "note": "To switch to another network, go to {{network__use}}.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "network__berkeley__graphQl": {
        "userKeyPath": "berkeleyGraphQl",
        "description": "Here you can change the GraphQl URL.",
        "note": "To switch to another network, go to {{network__use}}.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "network__berkeley__transaction_fee": {
        "userKeyPath": "transactionFee",
        "description": "Here, you can modify the standard fee. This fee is used to calculate how many interactions with an account are possible without creating new tokens.",
        "note": "To switch to another network, go to {{network__use}}.",
        "validation": "string__urlHttps",
        "reference": [
            "network__use"
        ],
        "defaultValue": null,
        "category": "network",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    },
    "console__messages__accountComment": {
        "userKeyPath": "accountMessage",
        "description": "Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care.",
        "note": "",
        "validation": "string__default",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Change the text to: {{self}}",
                "self": "Please do not share the contents of this file."
            }
        ]
    },
    "print__spaces__standard": {
        "userKeyPath": "consoleSpacesStandard",
        "description": "This splitter can be used to divide the output of information in the terminal.",
        "note": "",
        "validation": "integer__positiveNumber",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Ändere die breite auf: {{self}}",
                "self": 50
            }
        ]
    },
    "print__spaces__extended": {
        "userKeyPath": "consoleSpacesStandard",
        "description": "This splitter can be used to divide the output of information in the terminal.",
        "note": "Diese sekundäre Stufe wird nur sehr selten verwendet. Gehe zu {{print__spaces__standard}} für die Standard Einstellung.",
        "validation": "integer__positiveNumber",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": [
            {
                "template": null,
                "description": "Ändere die breite auf: {{self}}",
                "self": 60
            }
        ]
    },
    "messages__use": {
        "userKeyPath": "consoleLanguage",
        "description": "Here, you can set the language of the terminal output.",
        "note": "Currently, only the English language is allowed, more languages will be added in the future.",
        "validation": "string__language",
        "reference": [],
        "defaultValue": null,
        "category": "general",
        "categories": [
            "createEnvironment",
            "deployContract",
            "interactWithContract",
            "listenToEvents"
        ],
        "examples": []
    }
}


const cmd = Object
    .entries( ttt )
    .reduce( ( acc, a, index ) => {
        const [ key, value ] = a
        const struct = [
            [ 'description', 'lang' ], 
            [ 'note', 'lang' ], 
            [ 'reference', 'none' ], 
            [ 'categories', 'none' ], 
            [ 'examples', 'none' ]
        ]
            .reduce( ( acc, b, index ) => {
                const [ key, type ] = b

                switch( type ) {
                    case 'lang':
                        acc[ key ] = {
                            'en': value[ key ]
                        }
                        break
                    case 'none':
                        acc[ key ] = value[ key ] 
                        break
                }

                switch( key ) {
                    case 'examples':
                        acc[ key ] = value[ key ]
                            .map( c => {
                                c['description'] = {
                                    'en': c['description']
                                }
                                return c
                            } )
                        break
                }
                
                return acc
            }, {} )

        acc[ key ] = struct

        return acc
    }, {} )

const fs = require( 'fs' )
fs.writeFileSync( 'test.json', JSON.stringify( cmd, null, 4 ), 'utf-8' )
console.log( cmd )