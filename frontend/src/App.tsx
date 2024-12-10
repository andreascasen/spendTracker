import { useState } from 'react'
import PageLayout from './components/PageLayout'
import FileUploader from './components/FileUploader'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<PageLayout>
				<h1 className="text-lg p-4">Try Uploading a file</h1>

				<FileUploader />
			</PageLayout>
		</>
	)
}

export default App
