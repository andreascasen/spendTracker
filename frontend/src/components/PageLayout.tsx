import { PropsWithChildren } from 'react'
import Header from './Header'

// eslint-disable-next-line
type PageLayoutProps = PropsWithChildren<{}>

function PageLayout({ children }: PageLayoutProps) {
	return (
		<>
			<Header />
			<main className="bg-slate-900 text-slate-200 m-0 py-16 px-4 flex-row items-center justify-center">
				{children}
			</main>
		</>
	)
}

export default PageLayout
