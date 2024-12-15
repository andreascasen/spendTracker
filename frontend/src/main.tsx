import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'

import './index.css'
import Index from './pages/index.tsx'
import PageLayout from './components/PageLayout.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<PageLayout>
				<Routes>
					<Route path="/" element={<Index />} />
				</Routes>
			</PageLayout>
		</BrowserRouter>
	</StrictMode>
)
