import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	onClick: () => void
	disabled?: boolean
}

export default function Button({ children, onClick, disabled = false }: Props) {
	return (
		<button
			onClick={onClick}
			className="py-2 px-6 bg-transparent text-cyan-500 border-2 border-cyan-500 font-bold rounded-lg"
			disabled={disabled}
		>
			{children}
		</button>
	)
}
