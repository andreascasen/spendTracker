import { PropsWithChildren } from 'react'

interface ModalProps extends PropsWithChildren {
	display: boolean
}

export default function Modal({ display, children }: ModalProps) {
	const modalClasses = [
		display ? 'block' : 'hidden',
		'fixed',
		'z-10',
		'p-8',
	].join(' ')

	return <div className={modalClasses}>{children}</div>
}
