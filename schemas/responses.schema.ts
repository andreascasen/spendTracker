import { z } from 'zod'
import { monthlySummarySchema } from './transactions.schema'

export const uploadSummaryResponseSchema = z.object({
	month: z.string(),
	monthlySummary: monthlySummarySchema,
})
