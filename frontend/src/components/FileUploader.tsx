import { useState } from 'react'
import Card from './Card'
import UploadFileIcon from '../icons/uploadFile'
import UploadIcon from '../icons/uploadIcon'
import Button from './Button'

interface Props {
	onUploadSuccess: (results: unknown) => void
}

export default function FileUploader({ onUploadSuccess }: Props) {
	const [month, setMonth] = useState<string | null>(null)
	const [file, setFile] = useState<File | null>(null)

	const handleMonthChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log('Selected month => ', event.target.value)
		setMonth(event.target.value)
	}

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = async () => {
		if (!file || !month) {
			throw new Error('Month and file are required')
		}

		const formData = new FormData()
		formData.append('file', file)
		formData.append('month', month)

		try {
			const result = await fetch('http://localhost:3000/summary', {
				method: 'POST',
				body: formData,
			})

			const response = await result.json()
			onUploadSuccess(response)
		} catch (error) {
			console.error('Error => ', error)
		}
	}

	return (
		<Card>
			<h2 className="text-2xl mb-4">Upload Summary</h2>
			<label className="block mb-2" htmlFor="month-select">
				Select Month
			</label>
			<input
				type="month"
				id="month-select"
				name="month-select"
				className="rounded-lg bg-slate-200 text-slate-950 py-1 px-2 mb-8"
				onChange={handleMonthChange}
			/>

			<div className={month ? 'opacity-100' : 'opacity-0'}>
				<label
					htmlFor="file"
					className={`inline-block ${
						month ? 'cursor-pointer' : ''
					} border-2 border-slate-${month ? '300' : '500'} text-slate-${
						month ? '300' : '500'
					} rounded-lg py-2 px-4 `}
				>
					<UploadFileIcon /> Chose file
				</label>
				<input
					className="hidden"
					type="file"
					id="file"
					name="entry"
					onChange={handleFileChange}
					disabled={!month}
				/>
			</div>

			<p className={`mt-2 ${file ? 'opacity-100' : 'opacity-0'}`}>
				<span className="font-bold">
					{file ? file.name : 'No file chosen'}:{' '}
				</span>
				{file ? `${Math.round(file.size / 1000)} kb` : ''}
			</p>

			<div className="mt-8">
				<Button onClick={handleUpload} disabled={!file}>
					<UploadIcon /> Submit
				</Button>
			</div>
		</Card>
	)
}
