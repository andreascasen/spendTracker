import { PropsWithChildren } from 'react'
import Header from './Header'

function PageLayout({ children }: PropsWithChildren<{}>) {
	return (
		<>
			<Header />
			<main className="bg-slate-900 text-slate-200 m-0 p-0">{children}</main>
		</>
	)
}

export default PageLayout
