import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { z } from 'zod'

import { monthlySummarySchema } from '../../../schemas/transactions.schema'

interface TransactionState {
	summaries: Record<string, z.infer<typeof monthlySummarySchema>>
	addSummary: (
		month: string,
		transaction: z.infer<typeof monthlySummarySchema>
	) => void
}

export const useMonthlyTransactions = create<TransactionState>()(
	devtools(
		set => ({
			summaries: {},
			addSummary: (
				month: string,
				summary: z.infer<typeof monthlySummarySchema>
			) =>
				set(({ summaries, ...state }: TransactionState) => {
					return {
						...state,
						summaries: {
							...summaries,
							[month]: monthlySummarySchema.parse(summary),
						},
					}
				}),
		}),
		{
			name: 'transactions',
		}
	)
)
