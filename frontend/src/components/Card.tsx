import { PropsWithChildren } from 'react'

// eslint-disable-next-line
type CardProps = PropsWithChildren<{}>

export default function Card({ children }: CardProps) {
	return (
		<div className="bg-indigo-950 shadow-lg rounded-lg px-8 py-12 max-w-md mx-auto text-center">
			{children}
		</div>
	)
}
