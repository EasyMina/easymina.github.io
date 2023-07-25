const data = {
    "keyPaths": {
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
    },
    "categories": {
        "general": {
            "description": "This section contains general parameters that offer customization options for project settings and terminal output, including setting the project name, defining account messages, adjusting console spacing, and selecting the terminal language."
        },
        "network": {
            "description": "In this section, you will find network-related variables that can be adjusted to customize the behavior of the network you are using, such as changing the default explorer for transactions or modifying the standard transaction fee."
        },
        "account": {
            "description": "This section contains parameters related to credentials and accounts, enabling customization of the folder structure for efficiently managing account keys, such as the root folder for credentials and the folder names for accounts and contracts."
        },
        "workspace": {
            "description": "This section contains parameters related to your workspace, allowing you to customize the folder structure for managing smart contracts and TypeScript files efficiently, including the root folder, TypeScript folder, and build folder locations."
        }
    },
    "validations": {
        "string": {
            "default": {
                "description": "Allow A-Z, a-b and 0-9 as value.",
                "regex": "^[a-zA-Z0-9\\s.-]*$",
                "message": "Please use only letters (A-Z, a-z), numbers (0-9), spaces, periods, or hyphens."
            },
            "hyphenAsSpace": {
                "description": "Allow A-Z, a-b and 0-9 as value, use '-' for space.",
                "regex": "^[a-zA-Z0-9-]*$",
                "message": "You can use only letters (A-Z, a-z), numbers (0-9), and hyphens. Replace spaces with hyphens."
            },
            "splitters": {
                "description": "Matches strings containing either \"__\" without consecutive occurrences or \"--\" without consecutive occurrences",
                "regex": "^(__(?!--)|--(?!__))*$",
                "message": "The string can contain either \"__\" or \"--\" without consecutive occurrences."
            },
            "folderName": {
                "description": "The first character must be from 'a' to 'z', followed by a combination of 'a' to 'z', '0' to '9' and '-' or '_' . The last character must be a '/'.",
                "regex": "^[a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\\/$",
                "message": "The folder name must start with a lowercase letter, followed by letters (a-z), numbers (0-9), hyphens, or underscores. It must end with a '/'."
            },
            "folderNameInvisible": {
                "description": "start with a \".\", followed by a lowercase letter, and may contain alphanumeric characters, hyphens, and underscores, ending with an alphanumeric character and a \"/\"",
                "regex": "^[.][a-z](?!.*[-_]{2})[a-z0-9-_]*[a-z0-9]\\/$",
                "message": "The folder name must start with a \".\" and a lowercase letter, followed by letters (a-z), numbers (0-9), hyphens, or underscores. It must end with a '/'."
            },
            "networkName": {
                "description": "Currently only \"berkeley\" is valid",
                "regex": "^(berkeley|none)$",
                "message": "The network name can only be \"berkeley\" or \"none\"."
            },
            "language": {
                "description": "Currently only \"en\" is valid",
                "regex": "^(en|none)$",
                "message": "The language can only be \"en\" or \"none\"."
            },
            "urlHttps": {
                "description": "URLs with optional \"http://\" or \"https://\", followed by a domain name, a top-level domain (TLD) of at least two letters, and an optional path segment at the end",
                "regex": "(https?:\\/\\/)?([a-zA-Z0-9.-]+)\\.([a-zA-Z]{2,})(\\/\\S*)?$",
                "message": "Please enter a valid URL with optional \"http://\" or \"https://\" and a valid domain name followed by a top-level domain (TLD) of at least two letters."
            }
        },
        "integer": {
            "positiveNumber": {
                "description": "This regular expression matches any positive integer with one or more digits.",
                "regex": "^[1-9]\\d*$",
                "message": "Please enter a positive integer greater than zero."
            }
        }  
    }
}


export default data