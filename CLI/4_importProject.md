---
sort: 5
title: Import Project
---


# Import Project

With this function, you can import exported projects. Various options are available:

```
? Choose an action: Import Project
? type: 
  url 
❯ local 
  dataurl (experimental) 
```

Using `URL`, you can import a file from `gist`, for example. With `local`, you can insert previously placed files in the root directory. `dataurl` allows you to insert projects via copy and paste. Please note that this function may encounter problems with large amounts of data.

We select `local`, and before clicking, we place the file (see Export Project) in our root folder. Now the file appears as importable:

```
? Filename: :  (Use arrow keys)
❯ hello-world--d13f9c59b52febead509280.txt 
```

Next, you provide the password you chose:

```
? Enter your decryption phrase: [hidden] [input is hidden] 
```

Specify a project name:

```
? Enter a Project Name: abc
```

The project is now stored under `projects/abc/`.