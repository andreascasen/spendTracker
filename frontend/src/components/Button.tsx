import { PropsWithChildren } from 'react'

interface Props extends PropsWithChildren {
	onClick: () => void
	disabled?: boolean
}

export default function Button({ children, onClick, disabled = false }: Props) {
	const btnClasses = [
		'py-2',
		'px-6',
		'bg-transparent',
		'text-cyan-500 disabled:text-slate-500',
		'border-cyan-500 disabled:border-slate-500',
		'border-2',
		'font-bold',
		'rounded-lg',
	].join(' ')

	return (
		<button onClick={onClick} className={btnClasses} disabled={disabled}>
			{children}
		</button>
	)
}
