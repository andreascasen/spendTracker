import { useEffect, useState } from 'react'
import { useMonthlySummaries } from '../store/transactions'
import Modal from '../components/modal'
import FileUploader from '../components/FileUploader'
import SummaryView from '../components/SummaryView'
import Button from '../components/Button'
import UploadIcon from '../icons/uploadIcon'
import { uploadSummaryResponseSchema } from '../../../schemas/responses.schema'

export default function Index() {
	const { summaries, addSummary } = useMonthlySummaries()
	const [showUploader, setShowUploader] = useState<boolean>(false)

	const handleToggleUploader = () => {
		setShowUploader(!showUploader)
	}

	const onUploadSuccess = (results: unknown) => {
		handleToggleUploader()
		const { month, monthlySummary } = uploadSummaryResponseSchema.parse(results)
		console.log('Parsed => ', { month, monthlySummary })
		addSummary(month, monthlySummary)
	}

	useEffect(() => {
		console.log('Summaries => ', summaries)
	}, [summaries])

	return (
		<>
			<SummaryView summaries={summaries} />

			<Button onClick={handleToggleUploader}>
				<UploadIcon /> Upload Summary
			</Button>
			<Modal display={showUploader} toggler={handleToggleUploader}>
				<FileUploader onUploadSuccess={onUploadSuccess} />
			</Modal>
		</>
	)
}
