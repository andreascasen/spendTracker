import { useState } from 'react'
import { Sumaries } from '../../../schemas/transactions.schema'

interface Props {
	summaries: Sumaries
}

export default function SummaryView({ summaries }: Props) {
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
	const onMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(e.target.value)
	}

	const availableSummaries = Object.keys(summaries)

	return (
		<div className="pt-4 pb-16">
			<h1 className="text-4xl mb-4">Summaries</h1>
			{availableSummaries.length === 0 ? (
				<p>No summaries available</p>
			) : (
				<>
					<label htmlFor="month">Select Month: </label>
					<select
						className="rounded-lg py-2 px-4 text-slate-900 mx-4"
						name="month"
						id="month"
						onChange={onMonthSelect}
					>
						{availableSummaries.map((month: string, idx: number) => (
							<option key={idx}>{month}</option>
						))}
					</select>
				</>
			)}
		</div>
	)
}
