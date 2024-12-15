import { useState } from 'react'
import { useMonthlySummaries } from '../store/transactions'
import Modal from '../components/modal'
import FileUploader from '../components/FileUploader'
import SummaryView from '../components/SummaryView'
import UploadIcon from '../icons/uploadIcon'
import { uploadSummaryResponseSchema } from '../../../schemas/responses.schema'

import { Button } from '@mui/material'

export default function Index() {
	const { summaries, addSummary } = useMonthlySummaries()
	const [showUploader, setShowUploader] = useState<boolean>(false)

	const handleToggleUploader = () => {
		setShowUploader(!showUploader)
	}

	const onUploadSuccess = (results: unknown) => {
		console.log('onUploadSuccess => ', results)
		handleToggleUploader()
		const { month, monthlySummary } = uploadSummaryResponseSchema.parse(results)
		addSummary(month, monthlySummary)
	}

	return (
		<>
			<SummaryView sumaries={summaries} />

			<Button onClick={handleToggleUploader} variant="outlined" color="primary">
				<UploadIcon /> Upload Summary
			</Button>
			<Modal display={showUploader} toggler={handleToggleUploader}>
				<FileUploader onUploadSuccess={onUploadSuccess} />
			</Modal>
		</>
	)
}
