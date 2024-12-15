import { z } from 'zod'
import {
	monthlyTransactionSchema,
	monthlyOversightSchema,
} from '../../../schemas/transactions.schema'

export const handleMonthlyTransactions = async (data: any[]) => {
	const structuredData = structureFileContents(data)
	return structuredData
}

const structureFileContents = async (data: any[]) => {
	const [header, categories, ...rows] = data

	const monthlyTransactions = rows.filter(row => row.length > 0).map(parseRow)
	const monthlyOversight = createMonthlyOversight(monthlyTransactions)

	return monthlyOversight
}

type rowContent = number | string

const parseRow = (row: rowContent[]) => {
	const [bookingDate, transactionDate, name, amount, balance] = row
	return monthlyTransactionSchema.parse({
		bookingDate,
		transactionDate,
		name,
		amount,
		balance,
	})
}

const createMonthlyOversight = (
	monthlyTransactions: z.infer<typeof monthlyTransactionSchema>[]
): z.infer<typeof monthlyOversightSchema> => {
	return monthlyTransactions.reduce(
		(acc: z.infer<typeof monthlyOversightSchema>, transaction) => {
			const { bookingDate, name, amount } = transaction
			if (!acc.transactions[name]) {
				acc.transactions[name] = {
					total: 0,
					transactions: [],
				}
			}

			acc.transactions[name].total += amount
			acc.transactions[name].transactions.push(transaction)
			acc.total += amount
			return acc
		},
		{ total: 0, transactions: {} }
	)
}
