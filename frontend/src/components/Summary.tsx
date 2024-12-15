import { Sumaries } from '../../../schemas/transactions.schema'

interface Props {
	summaries: Sumaries
}

export default function Summary({ summaries }: Props) {
	const availableSummaries = Object.keys(summaries)

	return (
		<div className="pt-4 pb-16">
			<h1 className="text-4xl">Summaries</h1>
			{availableSummaries.length === 0 ? (
				<p>No summaries available</p>
			) : (
				<ul>
					{availableSummaries.map((month: string, idx: number) => (
						<li key={idx}>
							<SummaryMonthItem monthName={month} />
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

interface SummaryMonthItemProps {
	monthName: string
}

function SummaryMonthItem({ monthName }: SummaryMonthItemProps) {
	return <button>{monthName}</button>
}
