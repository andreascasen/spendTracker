import { z } from 'zod'
import {
	transactionSchema,
	monthlySummarySchema,
} from '../../../schemas/transactions.schema'

export const handleMonthlyTransactions = async (data: any[]) => {
	const structuredData = structureFileContents(data)
	return structuredData
}

const structureFileContents = async (data: any[]) => {
	const [header, categories, ...rows] = data

	const monthlyTransactions = rows.filter(row => row.length > 0).map(parseRow)
	const monthlyOversight = createMonthlySummary(monthlyTransactions)

	return monthlyOversight
}

type rowContent = number | string

const parseRow = (row: rowContent[]) => {
	const [bookingDate, transactionDate, name, amount, balance] = row
	return transactionSchema.parse({
		bookingDate,
		transactionDate,
		name,
		amount,
		balance,
	})
}

const createMonthlySummary = (
	monthlyTransactions: z.infer<typeof transactionSchema>[]
): z.infer<typeof monthlySummarySchema> => {
	return monthlyTransactions.reduce(
		(acc: z.infer<typeof monthlySummarySchema>, transaction) => {
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
