import { useState } from 'react'
import { parseFileContents } from '../utils/xlsx'

export default function FileUploader() {
	const [file, setFile] = useState<File | null>(null)

	const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setFile(event.target.files[0])
		}
	}

	const handleUpload = async () => {
		if (!file) {
			return
		}
		const fileContent = await parseFileContents(file)
	}

	return (
		<>
			<div>
				<input type="file" id="file" onChange={handleFileChange} />
			</div>

			{file && (
				<section className="my-8">
					File details:
					<ul>
						<li>Name: {file.name}</li>
						<li>Type: {file.type}</li>
						<li>Size: {file.size}</li>
					</ul>
				</section>
			)}

			{file && (
				<button
					onClick={handleUpload}
					className="py-2 px-4 bg-cyan-500 text-cyan-900 font-bold rounded-sm"
				>
					Upload a file
				</button>
			)}
		</>
	)
}
