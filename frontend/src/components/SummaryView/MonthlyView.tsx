import {
	GroupedTransactions,
	MonthlySummary,
} from '../../../../schemas/transactions.schema'
import Card from '../Card'

interface MonthlyViewProps {
	summary: MonthlySummary
	month: string
}

export default function MonthlyView({ summary, month }: MonthlyViewProps) {
	const { total, transactions } = summary

	console.log('Transactions => ', transactions)

	return (
		<Card>
			<h2 className="text-xl mb-4">{month}</h2>
			<p className="my-4">
				<span className="font-bold">Total Balance:</span> {Math.round(total)}
			</p>

			{Object.entries(transactions).map(([name, groupedTransactions]) => (
				<TransactionView
					key={name}
					name={name}
					groupedTransactions={groupedTransactions}
				/>
			))}
		</Card>
	)
}

interface TransactionViewProps {
	groupedTransactions: GroupedTransactions
	name: string
}

function TransactionView({ name, groupedTransactions }: TransactionViewProps) {
	const { total, transactions } = groupedTransactions

	return (
		<div className="py-1">
			<p>
				<span className="font-semibold pr-1">{name}: </span> {Math.round(total)}
			</p>
		</div>
	)
}
