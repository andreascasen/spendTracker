import { useState } from 'react'
import Card from './Card'
import UploadFileIcon from '../icons/uploadFile'
import UploadIcon from '../icons/uploadIcon'
import Button from './Button'

interface Props {
	onUploadSuccess: (results: unknown) => void
}

export default function FileUploader({ onUploadSuccess }: Props) {
	const [file, setFile] = useState<File | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = async () => {
		if (file) {
			console.log('Uploading file ...')

			const formData = new FormData()
			formData.append('file', file)

			try {
				const result = await fetch('http://localhost:3000/entry', {
					method: 'POST',
					body: formData,
				})

				const { monthlyTransactions } = await result.json()

				onUploadSuccess(monthlyTransactions)
			} catch (error) {
				console.error('Error => ', error)
			}
		}
	}

	return (
		<Card>
			<h2 className="text-xl mb-4">Upload a file</h2>
			<div>
				<label
					htmlFor="file"
					className="inline-block cursor-pointer border-2 border-slate-300 text-slate-300 rounded-lg py-2 px-4 "
				>
					<UploadFileIcon /> Chose file
				</label>
				<input
					className="hidden"
					type="file"
					id="file"
					name="entry"
					onChange={handleFileChange}
				/>
			</div>

			<section className="my-8">
				<ul>
					<li>{file ? file.name : ''}</li>
					<li>{file ? file.type : ''}</li>
					<li>{file ? file.size : ''}</li>
				</ul>
			</section>

			<Button onClick={handleUpload} disabled={!file}>
				<UploadIcon /> Upload
			</Button>
		</Card>
	)
}
