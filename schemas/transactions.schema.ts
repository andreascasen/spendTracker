import { z } from 'zod'

export const transactionSchema = z.object({
	bookingDate: z.string(),
	transactionDate: z.string(),
	name: z.string(),
	amount: z.number(),
	balance: z.number(),
})

export const groupedTransactionsSchema = z.object({
	total: z.number(),
	transactions: z.array(transactionSchema),
})

export const monthlySummarySchema = z.object({
	total: z.number(),
	monthlyTransactions: z.record(z.string(), groupedTransactionsSchema),
})

export type Transaction = z.infer<typeof transactionSchema>
export type GroupedTransactions = z.infer<typeof groupedTransactionsSchema>
export type MonthlySummary = z.infer<typeof monthlySummarySchema>
export type Sumaries = Record<string, MonthlySummary>
