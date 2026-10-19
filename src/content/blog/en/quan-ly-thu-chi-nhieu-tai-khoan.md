---
locale: en
slug: managing-income-and-expenses-across-multiple-accounts
title: 'Managing income and expenses across multiple accounts: consolidate records and avoid double-counting'
description: 'Consolidate income and expenses across accounts, wallets and cards in one ledger, distinguish internal transfers, and review totals to avoid double-counting.'
updated: 2026-10-12
order: 1
sources:
  - title: Track your spending
    publisher: Moneysmart (ASIC, Australia)
    url: https://moneysmart.gov.au/budgeting/track-your-spending
  - title: How to do a budget
    publisher: Moneysmart (ASIC, Australia)
    url: https://moneysmart.gov.au/budgeting/how-to-do-a-budget
tihomo:
  anchor: platform
  note: 'TiHoMo is developing the foundations for recording income and expenses and managing multiple accounts. Source code exists, but the application is not publicly available and has not been verified end to end. This article does not rely on TiHoMo.'
---

When you use a salary account, a savings account, an e-wallet, a credit card and cash, no single account view provides a complete record of your monthly income and expenses. Records from different providers can overlap, making totals difficult to interpret.

This article explains a manual method for consolidating those records in **one ledger**, using a notebook or spreadsheet. The key distinction is between **transfers between your own accounts** and **expenses**: treating transfers as income or expenses is a common cause of double-counting.

## Why multiple accounts increase the risk of recording errors

- Each provider uses different formats and posting dates.
- A single transfer appears **twice**: a debit in the sending account and a credit in the receiving account.
- Some transactions, such as cash payments or payments from smaller e-wallets, may have no statement record and can be overlooked.
- A credit card repayment can be mistaken for an expense, even though the original card purchases have already been recorded as expenses.

## Step 1: List all accounts, e-wallets, cash and credit cards

Include accounts you rarely use. Record the following details for each:

| Account or balance | Type | Purpose | Opening balance |
|---|---|---|---|
| Account A | Transaction account | Receive salary, pay bills | Balance on the start date |
| Account B | Savings account | Hold emergency funds | Balance on the start date |
| E-wallet C | E-wallet | Small everyday purchases | Balance on the start date |
| Cash | Cash | Market purchases, transport | Physical cash count |
| Credit card D | Credit card | Purchases on credit | Outstanding debt (record as negative) |

Choose **one common start date**, such as the first day of the month, and record each balance as of that date. These opening balances form the basis for the review in step 5.

## Step 2: Use one ledger and a consistent transaction format

Use one spreadsheet or notebook for all your accounts. Record each transaction with the same fields:

- Transaction **date**.
- **Account** (the account receiving or paying the money).
- **Amount** and direction: inflow or outflow.
- **Type** (see step 3).
- **Category** (food, housing, transport, and so on), if it is an expense.
- A short **note** to identify the transaction later.

A consistent format allows you to filter and total transactions by account, type or category without restructuring records from different sources.

## Step 3: Assign each row to exactly one of four types

1. **Income**: money received from an external source, such as salary, proceeds from selling belongings or interest.
2. **Expense**: money paid for goods, services or fees.
3. **Internal transfer**: money moved between accounts **that you own**.
4. **Card or loan repayment**: money paid from your account toward a credit card balance or other debt.

In this method, only **income** and **expenses** change your combined balance, including debt recorded as a negative balance. Internal transfers change how that balance is distributed. For a credit card or loan, include the outstanding debt as a negative balance. Record **the expense on the date of the card purchase**, when the debt increases. Record the subsequent card repayment as a transfer from your account to the debt balance (type 4), not as a second expense. Transfer fees, card fees and loan interest are expenses and should be recorded separately.

> The four transaction types above are this article’s framework for avoiding double-counting, not a quotation from an external source. You may use different labels, provided you apply them consistently.

## Step 4: Record internal transfers correctly

An internal transfer has a sending side and a receiving side. Record both as **one event**:

- Option 1: use one row with “from account” and “to account” columns.
- Option 2: use two adjacent rows with the same date, amount and note, both classified as “internal transfer”.

Do not classify the sending side as an expense or the receiving side as income. Doing so overstates both total income and total expenses.

### Worked example

The figures below are educational examples only. They are not personal data or results produced by an application. All amounts are in Vietnamese dong (VND); commas separate thousands, and dates use day/month format.

Opening balances: account A VND 20,000,000, account B VND 10,000,000, e-wallet C VND 500,000. Total: VND 30,500,000.

| Date | Event | Type | Amount |
|---|---|---|---|
| 05/10 | Salary received in A | Income | +VND 15,000,000 |
| 06/10 | Transfer from A to B | Internal transfer | VND 5,000,000 |
| 07/10 | Transfer from A to e-wallet C | Internal transfer | VND 1,000,000 |
| 08/10 | Rent paid from A | Expense | −VND 6,000,000 |
| 10/10 | Food paid from e-wallet C | Expense | −VND 400,000 |

The correct result is **total income of VND 15,000,000 and total expenses of VND 6,400,000**, a difference of +VND 8,600,000.

Recording both sides of the internal transfers as income and expenses would produce total income of VND 21,000,000 and total expenses of VND 12,400,000. The difference would remain +VND 8,600,000, but each total would be overstated by VND 6,000,000 and would no longer represent actual income and spending. Recording only one side would also make the difference incorrect.

## Step 5: Review the combined balance at the end of each period

After recording all transactions for a period, check:

> **Total closing balance = total opening balance + total income − total expenses**

Internal transfers and card repayments are excluded from this formula because they move balances between the accounts you listed, including card debt recorded as a negative balance in step 1. For the example above, which includes only accounts and an e-wallet: 30,500,000 + 15,000,000 − 6,400,000 = **VND 39,100,000**.

The closing balances are: A = 20,000,000 + 15,000,000 − 5,000,000 − 1,000,000 − 6,000,000 = VND 23,000,000; B = 10,000,000 + 5,000,000 = VND 15,000,000; e-wallet C = 500,000 + 1,000,000 − 400,000 = VND 1,100,000. Together, these total VND 39,100,000.

If the ledger total differs from your actual combined balances, common causes include missing transactions, duplicate entries or internal transfers classified as expenses. The [statement reconciliation guide](../statement-reconciliation-checklist/) explains how to investigate these differences.

## Step 6: Establish a regular review schedule

Moneysmart, the financial education website of ASIC in Australia, recommends starting by reviewing statements or transactions from the last few months to identify both regular and occasional expenses, then grouping them into categories. It also suggests recording every expense for a few weeks, including cash because it is easy to forget, and updating your budget when your income or bills change.

The following schedule is this article’s suggestion, not Moneysmart’s:

- **Weekly**: record new transactions, including cash payments.
- **At the end of each period**: review the combined balance as in step 5.
- **Every few months**: review your account list and close accounts you no longer use.

## Common mistakes

- **Overlooking cash payments and smaller e-wallets.** Set a minimum cash-payment amount to record, or record cash spending at the end of each day.
- **Recording refunds as new income.** Link each refund to the original expense so the category’s spending total remains accurate.
- **Changing formats during a period.** Changes to columns or recording methods make subsequent reconciliation more difficult.
- **Using too many categories.** Excessive detail increases the work involved in keeping records and makes the routine harder to maintain. Start with a small set of categories and subdivide them when needed.

## Summary

- Use one ledger and a consistent transaction format across all accounts.
- Only income and expenses change your combined balance, including debt recorded as a negative balance; internal transfers and card repayments do not.
- At the end of each period, check that the total closing balance equals the total opening balance plus income minus expenses.
- These income and expense records support [statement reconciliation](../statement-reconciliation-checklist/) and [budgeting for recurring payments](../recurring-payments-and-budgeting/).
