import { useState } from 'react'
import { MonthlySummary } from '../../../../schemas/transactions.schema'
import {
	Paper,
	Typography,
	Box,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TablePagination,
	TableRow,
} from '@mui/material'

interface MonthlyViewProps {
	summary: MonthlySummary
	month: string
}

interface Column {
	id: string
	label: string
	minWidth?: number
	align?: 'left' | 'right'
	format?: (value: number) => string
}

const columns: readonly Column[] = [
	{ id: 'Name', label: 'Name', minWidth: 170, align: 'left' },
	{
		id: 'Amount',
		label: 'Amount',
		minWidth: 170,
		align: 'right',
		format: (value: number) => Math.round(value).toString(),
	},
]

export default function MonthlyView({ summary, month }: MonthlyViewProps) {
	const [page, setPage] = useState<number>(0)
	const [rowsPerPage, setRowsPerPage] = useState<number>(10)

	const handleChangePage = (event: unknown, newPage: number) => {
		setPage(newPage)
	}

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		setRowsPerPage(+event.target.value)
		setPage(0)
	}

	const { total, monthlyTransactions } = summary

	console.log('monthlyTransactions => ', monthlyTransactions)

	if (!monthlyTransactions) {
		return <></>
	}

	const transactionNames = Object.keys(monthlyTransactions)

	return (
		<Paper sx={{ padding: 2, marginY: 2 }}>
			<Typography variant="h4">{month}</Typography>
			<Typography variant="h5" sx={{ marginBottom: 2 }}>
				<span className="font-bold">Monthly Balance:</span> {Math.round(total)}
			</Typography>

			<Box>
				<TableContainer>
					<Table stickyHeader>
						<TableHead>
							<TableRow>
								{columns.map(column => (
									<TableCell
										key={column.id}
										align={column.align}
										style={{ minWidth: column.minWidth }}
									>
										{column.label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							{transactionNames
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((transactionName: string, index: number) => {
									const transactionGroup = monthlyTransactions[transactionName]

									return (
										<TableRow key={index}>
											<TableCell>{transactionName}</TableCell>
											<TableCell>
												{Math.round(transactionGroup.total)}
											</TableCell>
										</TableRow>
									)
								})}
						</TableBody>
					</Table>
				</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10, 15, 20]}
					component="div"
					count={transactionNames.length}
					rowsPerPage={rowsPerPage}
					page={page}
					onPageChange={handleChangePage}
					onRowsPerPageChange={handleChangeRowsPerPage}
				/>
			</Box>
		</Paper>
	)
}
