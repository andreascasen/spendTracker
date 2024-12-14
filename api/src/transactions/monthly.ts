import { z } from 'zod'
import {
	monthlyTransactionSchema,
	monthlyOversightSchema,
} from '../../../schemas/transactions.schema'

export const handleMonthlyTransactions = async (data: any[]) => {
	const structuredData = structureFileContents(data)
	return structuredData
}

const structureFileContents = (data: any[]) => {
	const [header, categories, ...rows] = data

	const monthlyTransactions = rows.filter(row => row.length > 0).map(parseRow)
	const monthlyOversight = createMonthlyOversight(monthlyTransactions)
	console.log('parsedData => ', monthlyOversight)

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

const createMonthlyOversight = async (
	monthlyTransactions: z.infer<typeof monthlyTransactionSchema>[]
) => {
	return monthlyTransactions.reduce(
		(acc: z.infer<typeof monthlyOversightSchema>, transaction) => {
			const { bookingDate, name, amount } = transaction
			if (!acc[name]) {
				acc[name] = {
					total: 0,
					transactions: [],
				}
			}

			acc[name].total += amount
			acc[name].transactions.push(transaction)
			return acc
		},
		{}
	)
}
