import { z } from 'zod'

export const monthlyTransactionSchema = z.object({
	bookingDate: z.string(),
	transactionDate: z.string(),
	name: z.string(),
	amount: z.number(),
	balance: z.number(),
})

export const monthlyOversightSchema = z.object({
	total: z.number(),
	transactions: z.record(
		z.string(),
		z.object({
			total: z.number(),
			transactions: z.array(monthlyTransactionSchema),
		})
	),
})
