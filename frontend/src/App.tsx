import { useState } from 'react'
import PageLayout from './components/PageLayout'
import FileUploader from './components/FileUploader'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<PageLayout>
				<FileUploader />
			</PageLayout>
		</>
	)
}

export default App
