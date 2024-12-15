import { useState } from 'react'
import { useMonthlySummaries } from '../store/transactions'
import Modal from '../components/modal'
import FileUploader from '../components/FileUploader'
import { monthlySummarySchema } from '../../../schemas/transactions.schema'
import Summary from '../components/Summary'
import Button from '../components/Button'
import UploadIcon from '../icons/uploadIcon'

export default function Index() {
	const { summaries, addSummary } = useMonthlySummaries()
	const [showUploader, setShowUploader] = useState<boolean>(false)

	const handleToggleUploader = () => {
		setShowUploader(!showUploader)
	}

	const onUploadSuccess = (results: unknown) => {
		handleToggleUploader()
		const parsed = monthlySummarySchema.parse(results)
		addSummary('june 2024', parsed)
		console.log('Parsed => ', parsed)
	}

	return (
		<>
			<Summary summaries={summaries} />

			<Button onClick={handleToggleUploader}>
				<UploadIcon /> Upload Summary
			</Button>
			<Modal display={showUploader} toggler={handleToggleUploader}>
				<FileUploader onUploadSuccess={onUploadSuccess} />
			</Modal>
		</>
	)
}
