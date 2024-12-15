import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { z } from 'zod'

import {
	monthlyOversightSchema,
	monthlyTransactionSchema,
} from '../../../schemas/transactions.schema'

interface TransactionState {
	transactions: z.infer<typeof monthlyOversightSchema>[]
	addTransaction: (
		transaction: z.infer<typeof monthlyTransactionSchema>
	) => void
}

export const useMonthlyTransactions = create<TransactionState>()(
	devtools(
		persist(
			set => ({
				transactions: [],
				addTransaction: transaction => {},
			}),
			{
				name: 'transactions',
			}
		)
	)
)
