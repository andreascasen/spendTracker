import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { z } from 'zod'

import {
	monthlySummarySchema,
	Sumaries,
} from '../../../schemas/transactions.schema'
import { categorySchema } from '../../../schemas/categories.schema'

interface TransactionState {
	summaries: Sumaries
	addSummary: (
		month: string,
		summary: z.infer<typeof monthlySummarySchema>
	) => void
}

export const useMonthlySummaries = create<TransactionState>()(
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

interface CategoryState {
	categories: z.infer<typeof categorySchema>
	addToCategory: (category: string, transactionName: string) => void
}

export const useCategories = create<CategoryState>()(
	devtools(set => ({
		categories: categorySchema.parse({}),
		addToCategory: (category, transactionName) =>
			set(({ categories, ...state }) => {
				const currentCategoryState = categories[category] || []
				return {
					...state,
					categories: {
						...categories,
						category: [...currentCategoryState, transactionName],
					},
				}
			}),
	}))
)
