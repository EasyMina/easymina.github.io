---
sort: 4
title: Export Project
---


# Export Project

This function allows you to compress and encrypt a project into a file. You can later import the project using the Import Project function.

First, you need to select a project to export:

```
? Enter the project name: (Use arrow keys)
❯ hello 
  hello-world 
```

After making your selection, you can provide a name:

```
? Enter your name (optional): My Project
```

Next, you can provide a description:

```
? Enter a project description (optional): my description
```

You will be asked if you want to encrypt the file:

```
? Do you want to encrypt the file? (Y/n) 
```

If you choose to encrypt, you will need to create a password twice. Note that the name and description are not encrypted.

```
? Enter an export phrase: [hidden]
? Repeat your export phrase: [hidden]
  > projects/hello-world/hello-world--d13f9c59b52febead509280.txt
```

A link to the file is provided with `>`.