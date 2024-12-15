import { PropsWithChildren, useEffect } from 'react'
import { Modal as MuiModal } from '@mui/material'

import CloseIcon from '../icons/CloseIcon'

interface ModalProps extends PropsWithChildren {
	display: boolean
	toggler: () => void
}

export default function Modal({ display, toggler, children }: ModalProps) {
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
		<MuiModal open={display} onClose={toggler}>
			<>
				{toggler && (
					<button className="absolute top-4 right-4" onClick={toggler}>
						<CloseIcon />
					</button>
				)}
				{children}
			</>
		</MuiModal>
	)
}
