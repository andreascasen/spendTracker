import { PropsWithChildren, useEffect } from 'react'
import CloseIcon from '../icons/CloseIcon'

interface ModalProps extends PropsWithChildren {
	display: boolean
	toggler: () => void
}

export default function Modal({ display, toggler, children }: ModalProps) {
	const modalClasses = [
		display ? 'block' : 'hidden',
		'fixed',
		'inset-0',
		'flex-col',
		'content-center',
		'z-10',
		'p-8',
		'bg-slate-950/90',
		'rounded-lg',
	].join(' ')

	useEffect(() => {
		const close = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				toggler()
			}
		}

		window.addEventListener('keydown', close)
		return () => {
			window.removeEventListener('keydown', close)
		}
	}, [])

	return (
		<div className={modalClasses}>
			{toggler && (
				<button className="absolute top-4 right-4" onClick={toggler}>
					<CloseIcon />
				</button>
			)}
			{children}
		</div>
	)
}
