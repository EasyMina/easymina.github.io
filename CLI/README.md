---
sort: 0
title: CLI
---


# CLI

To install the cli use:

```
npm i -g easymina
```

The Command Line Interface (CLI) offers a structured way to access various functions. Here's a summary of the available functions:

| Function       | Description                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Add Accounts** | This function facilitates the creation of accounts. It prompts for names in a comma-separated format, asks for a group name, and creates accounts one by one. It automatically searches for addresses ending with the first letter for easy identification. |
| **Add a Template** | This function allows the copying of templates from the module to project folders. You can specify your own name, and if a name already exists, EasyMina appends an additional identifier.                         |
| **Export Project** | This function compresses and encrypts a project into a file for later import. You can select a project, provide a name, description, and choose to encrypt the file. Passwords are required for encryption, and the name and description remain unencrypted.                   |
| **Import Project** | Import exported projects using various options, including URLs, local files, or data URLs (experimental). Be cautious with large data sets. Provide passwords for decryption, choose a project name, and the project will be stored in the specified location.                    |
| **Start Server** | Start a server that offers an overview of available accounts and contracts. It also provides a list of scripts with their corresponding README files, converted from Markdown to HTML format.                  |
