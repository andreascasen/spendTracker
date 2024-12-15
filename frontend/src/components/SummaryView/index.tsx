import { useState } from 'react'
import {
	Typography,
	FormControl,
	InputLabel,
	Select,
	MenuItem,
	SelectChangeEvent,
	Paper,
} from '@mui/material'

import { Sumaries } from '../../../../schemas/transactions.schema'
import MonthlyView from './MonthlyView'

interface Props {
	sumaries: Sumaries
}

export default function SummaryView({ sumaries }: Props) {
	const [selectedMonth, setSelectedMonth] = useState<string | null>(null)
	const onMonthSelect = (e: SelectChangeEvent) => {
		setSelectedMonth(e.target.value)
	}

	return (
		<div>
			<Typography variant="h3">Sumaries</Typography>
			<ViewSelector sumaries={sumaries} onMonthSelect={onMonthSelect} />

			{selectedMonth && (
				<MonthlyView summary={sumaries[selectedMonth]} month={selectedMonth} />
			)}
		</div>
	)
}

interface ViewSelectorProps {
	sumaries: Sumaries
	onMonthSelect: (e: SelectChangeEvent) => void
}

export function ViewSelector({ sumaries, onMonthSelect }: ViewSelectorProps) {
	const availableMonths = Object.keys(sumaries)

	return (
		<Paper sx={{ marginY: 2, padding: 2 }}>
			{availableMonths.length === 0 ? (
				<Typography variant="body1" component="p">
					No summaries available
				</Typography>
			) : (
				<>
					<FormControl
						color="primary"
						sx={{ minWidth: 160, borderColor: 'primary.main' }}
					>
						<InputLabel id="monthSelect">Select Month: </InputLabel>
						<Select
							labelId="monthSelect"
							id="select-month"
							value={''}
							label="Month"
							onChange={onMonthSelect}
						>
							{availableMonths.map((month: string, idx: number) => (
								<MenuItem key={idx} value={month}>
									{month}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</>
			)}
		</Paper>
	)
}
