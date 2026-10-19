---
locale: en
slug: statement-reconciliation-checklist
title: 'Statement reconciliation: review missing, duplicate and mismatched entries'
description: 'Reconcile bank statements with your ledger: review balances, identify missing, duplicate or mismatched entries, and investigate unrecognized transactions.'
updated: 2026-10-12
order: 2
sources:
  - title: Track your spending
    publisher: Moneysmart (ASIC, Australia)
    url: https://moneysmart.gov.au/budgeting/track-your-spending
  - title: How do I get my money back after I discover an unauthorized transaction or money missing from my bank account?
    publisher: Consumer Financial Protection Bureau (United States)
    url: https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-my-money-back-after-i-discover-an-unauthorized-transaction-or-money-missing-from-my-bank-account-en-1017/
tihomo:
  anchor: direction
  note: 'AI-assisted statement reconciliation is a proposed development direction for TiHoMo, not an operational feature. The application is not publicly available and has not been verified end to end. This article describes a manual method; it neither demonstrates nor promises that feature.'
---

Statement reconciliation means comparing **your bank statement** with **your own ledger** to check that the transactions and balances agree. Regular reviews help identify missing entries, duplicate records, incorrect amounts and unrecognized transactions at an early stage.

This manual method can be used with a notebook, spreadsheet or application. It is not a guide to using TiHoMo.

## Before you start

- Select **one account** and **one period**, such as a calendar month. Reconcile each account separately.
- Download the statement for that period through the bank’s official channel, such as its application or online portal.
- Open your ledger and select the records for the same account and period.
- Note the statement’s **opening balance** and **closing balance**.
- Add a blank column beside your records to mark entries as they are matched.

Moneysmart suggests reviewing statements or transactions in banking applications from the last few months to identify regular and occasional expenses. If you are new to reconciliation, begin with one recent month before reviewing earlier periods.

## Step 1: Check that the statement is internally consistent

Before comparing the statement with your ledger, check the statement itself:

> **Opening balance + total money in − total money out = closing balance**

If the figures do not balance, check for a missing statement page or an incorrect period. Resolve the discrepancy before continuing.

## Step 2: Compare every entry and mark matches

Review the statement in order. For each entry, find the corresponding ledger entry by comparing **amount**, then **date** (allowing a difference of a few days), then **description or recipient**. Mark both entries once they match.

When this review is complete, investigate the **unmarked entries** in both records.

## Step 3: Classify unmatched entries

| Type | How to identify it | Recommended action |
|---|---|---|
| Missing | Appears on the statement but not in the ledger | Add it to the ledger if you confirm it is your transaction |
| Duplicate | Two identical ledger entries correspond to one statement entry | Remove the duplicate entry |
| Mismatched | Appears in both records, but the amount or date differs | Correct the ledger using supporting records |
| Delayed | The transaction has been made but is not yet on this period’s statement | Add a note and review it next period |
| Unknown | Appears on the statement but is not recognized | Add it to a list of transactions to investigate |

Investigate the cause before deciding which record is incorrect. Differences commonly arise from data-entry errors, omitted transactions or different posting dates.

### Worked example

The figures below are educational examples only. They are not personal data or results produced by an application. All amounts, including those in the table, are in Vietnamese dong (VND); commas separate thousands.

Account A’s statement for the period shows an opening balance of VND 20,000,000, money in of VND 15,000,000, money out of VND 12,129,000 and a closing balance of **VND 22,871,000**. The check in step 1 balances: 20,000,000 + 15,000,000 − 12,129,000 = 22,871,000.

| Statement entry | Ledger entry | Result |
|---|---|---|
| Salary +15,000,000 | +15,000,000 | Matched |
| Transfer to savings −5,000,000 | −5,000,000 | Matched |
| Rent −6,000,000 | −6,000,000 | Matched |
| Supermarket −350,000 | No entry | **Missing** |
| Coffee −200,000 (one entry) | Two entries of −200,000 on the same day | **Duplicate** |
| Electricity −480,000 | −408,000 | **Mismatched** (transposed digits) |
| “Digital service” −99,000 | No entry | **Unknown** |

At this stage, the ledger balance is 20,000,000 + 15,000,000 − 11,808,000 = **VND 23,192,000**, which is VND 321,000 higher than the statement balance. The identified differences account for the full discrepancy: +350,000 (missing supermarket entry) − 200,000 (duplicate coffee entry) + 72,000 (electricity mismatch) + 99,000 (unknown transaction) = VND 321,000.

Accounting for the full discrepancy does not establish that all errors have been found. Errors can offset each other: omitting one VND 200,000 transaction and duplicating a different VND 200,000 transaction leaves no net difference. Every entry still needs to be matched in step 2. Any remaining unexplained difference indicates that an entry is still missing or incorrect.

## Step 4: Resolve each type of discrepancy

1. **Missing**: add the transaction to the ledger with the statement date and amount, and assign an appropriate category.
2. **Duplicate**: remove the duplicate entry only after confirming that the records do not represent two separate transactions of the same amount, such as two coffee purchases.
3. **Mismatched**: correct the entry using supporting records, such as a receipt or transaction message, rather than memory.
4. **Delayed**: retain the entry, add a note and review it when the next statement is available.
5. **Unknown**: retain the entry without assuming what it represents. Continue to step 5.

## Step 5: Investigate unrecognized transactions

For each unrecognized transaction, record its date, amount and statement description in a separate investigation list. Also record the steps already taken to identify it, such as reviewing application history, checking emailed receipts or asking family members. Review the following possibilities:

- A **recurring subscription** that you forgot to cancel or no longer remember signing up for.
- A **fee** charged by the bank or payment provider.
- A transaction made by **someone who shares the account or card**.
- If none of these explains the entry, it may be a transaction you did not make.

Moneysmart describes hidden costs you can uncover by tracking spending, such as account fees, unused subscriptions or mistaken transactions.

### If you suspect an unauthorized transaction

- Contact your bank **through an official channel** printed on your card or available in the banking application. Do not use phone numbers or links from unfamiliar messages.
- Do not share one-time passwords (OTPs), passwords or PINs with anyone, including someone claiming to be a bank employee.
- Keep the statement, screenshots, transaction references and all correspondence with the bank.
- Ask the bank about the **deadlines** and **procedures** for transaction investigations and disputes, and act promptly.

Deadlines vary by jurisdiction and transaction type. For example, the United States Consumer Financial Protection Bureau (CFPB) states that consumers need to notify their bank of unauthorized electronic transactions, such as debit card transactions or electronic transfers on a US bank account, within 60 days after the bank sends the statement showing the transaction. A later notification may leave the consumer liable for the full amount of transactions occurring after the 60-day deadline and before notification, if the bank can show that those transactions would not have occurred had it been notified before the deadline. This is a United States rule and **does not automatically apply in Vietnam**. This article does not summarize Vietnamese law; read your bank’s terms and ask the bank directly about its investigation deadlines.

The general principle remains useful: **review statements regularly and act promptly** to make problems easier to resolve.

## Step 6: Complete the period’s review and retain a record

Once every entry has been resolved or added to the investigation list, confirm the following:

- The ledger balance agrees with the statement’s closing balance, with any exceptions explained by noted delayed transactions or items still under investigation.
- The investigation list records dates, amounts, descriptions and next actions.
- The completion date and reconciled period are recorded so you can identify where to begin the next review.

## Maintaining a regular reconciliation schedule

- Reconcile **once a month** on a fixed day to avoid accumulating several months of records.
- Use a consistent ledger format. The guide to [managing income and expenses across multiple accounts](../managing-income-and-expenses-across-multiple-accounts/) explains how to avoid double-counting internal transfers and creating apparent discrepancies.
- If an error recurs, such as omitted cash payments, address the recording process as well as the individual entries.
- After reconciliation, use the [recurring payments and budgeting guide](../recurring-payments-and-budgeting/) to review recurring payments and update your obligations list.

## Summary

Select one account and one period, verify the statement’s internal consistency, compare every entry, then classify unmatched entries as missing, duplicate, mismatched, delayed or unknown. Record unknown transactions in an investigation list. If you suspect an unauthorized transaction, contact your bank through an official channel and promptly ask about investigation deadlines.
