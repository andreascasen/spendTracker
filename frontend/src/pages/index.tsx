import { useState } from 'react'
import { useMonthlyTransactions } from '../store/transactions'
import Modal from '../components/modal'
import FileUploader from '../components/FileUploader'
import { monthlySummarySchema } from '../../../schemas/transactions.schema'

export default function Index() {
	const { summaries, addSummary } = useMonthlyTransactions()
	const [showUploader, setShowUploader] = useState<boolean>(false)

	const handleToggleUploader = () => {
		setShowUploader(!showUploader)
	}

	const onUploadSuccess = (results: unknown) => {
		handleToggleUploader()
		const parsed = monthlySummarySchema.parse(results)
		addSummary('june', parsed)
		console.log('Parsed => ', parsed)
	}

	return (
		<>
			<h1 className="text-2xl">Summaries</h1>
			<p>See transactions across months</p>

			{Object.keys(summaries).length === 0 ? (
				<p>No summaries to display</p>
			) : (
				<p>Summaries to display</p>
			)}

			<button onClick={handleToggleUploader}>Upload new file</button>
			<Modal display={showUploader}>
				<FileUploader onUploadSuccess={onUploadSuccess} />
			</Modal>
		</>
	)
}
