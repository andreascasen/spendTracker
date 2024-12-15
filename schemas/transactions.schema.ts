import { z } from 'zod'

export const transactionSchema = z.object({
	bookingDate: z.string(),
	transactionDate: z.string(),
	name: z.string(),
	amount: z.number(),
	balance: z.number(),
})

export const monthlySummarySchema = z.object({
	total: z.number(),
	transactions: z.record(
		z.string(),
		z.object({
			total: z.number(),
			transactions: z.array(transactionSchema),
		})
	),
})

export type Sumaries = Record<string, z.infer<typeof monthlySummarySchema>>
