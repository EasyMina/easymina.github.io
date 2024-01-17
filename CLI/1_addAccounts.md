---
sort: 2
title: Add Accounts
---


# Add Accounts

This function calls the `getAccounts()` method in a structured manner and prompts for input of names in comma-separated form.

For example:

```
? Enter names (comma-separated): dora, emo, frederik
```

Afterwards, you need to specify a group name for the accounts.

Example:

```
? Enter the group name: b
```

Now, accounts are created one by one. By default, it searches for addresses ending with the first letter, allowing for easy differentiation through an explorer.

Example:

```
Name: dora
Address: B62qoYKeKSsdPkPyw5sroX7ffRxU4ZSgqPY2istsJuEyt5ZowVVPAdd
```

Newly created accounts are marked with ✨, while existing accounts have their network status determined.

Result:

```
ℹ  🟩 dora (B62qoYKe...PAdd)
   Balance: 299, Nonce: 0, Created 3 minutes ago.
   Explorer: https://minascan.io/berkeley/account/B62qoYKeKSsdPkPyw5sroX7ffRxU4ZSgqPY1istsJuEyt5ZowVVPAdd
✔  ✨ erin (B62qqUbe...XCee)
   Faucet: https://minascan.io/berkeley/tx/5Jv9ihwzPTQvaxv76oLL9y7gbVopk2NhyefJdunpTAnuRiq5okP8
   Explorer: https://minascan.io/berkeley/account/B62qqUbefDCDeMzCD2G1X3X1ugj8HDsfcTXge1oNTBzj5ACiQvdXCee
```