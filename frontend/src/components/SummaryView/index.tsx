import { useState } from 'react'
import { Sumaries } from '../../../../schemas/transactions.schema'
import MonthlyView from './MonthlyView'

interface Props {
	sumaries: Sumaries
}

export default function SummaryView({ sumaries }: Props) {
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
	const onMonthSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelectedMonth(e.target.value)
	}

	return (
		<div className="pt-4 pb-16">
			<h1 className="text-4xl mb-4">Summaries</h1>
			<ViewSelector sumaries={sumaries} onMonthSelect={onMonthSelect} />

			{selectedMonth && (
				<MonthlyView summary={sumaries[selectedMonth]} month={selectedMonth} />
			)}
		</div>
	)
}

interface ViewSelectorProps {
	sumaries: Sumaries
	onMonthSelect: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export function ViewSelector({ sumaries, onMonthSelect }: ViewSelectorProps) {
	const availableMonths = Object.keys(sumaries)

	return (
		<div className="my-8">
			{availableMonths.length === 0 ? (
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
						{availableMonths.map((month: string, idx: number) => (
							<option key={idx}>{month}</option>
						))}
					</select>
				</>
			)}
		</div>
	)
}
