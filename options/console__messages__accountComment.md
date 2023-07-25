---
sort: 1
title: A.2. accountMessage
---

# accountMessage

Here, you can set the message that will be inserted as a comment in each account file. It is intended as a reminder to handle this sensitive data with care.


## Specification

Default implementation: ```{ "accountMessage": "Do not share this file with someone." }```

### Key

| **Name** | **Alias** | **Category** |  
|:--|:--|:--|
| ```accountMessage``` | ```console__messages__accountComment``` | [General](../options/#general) |

### Value

Allow A-Z, a-b and 0-9 as value.

| **Default** | **Validation** | **Type** |
|:--|:--|:--|
| ```Do not share this file with someone.``` | ```^[a-zA-Z0-9\s.-]*$``` | ```string``` |

