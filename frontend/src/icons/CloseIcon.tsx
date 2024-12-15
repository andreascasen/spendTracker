import type { SVGProps } from 'react'

interface Props extends SVGProps<SVGSVGElement> {
	color?: string
}

export default function CloseIcon({ color = '#007cff', ...props }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={32}
			height={32}
			viewBox="0 0 32 32"
			{...props}
		>
			<path
				fill={color}
				d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
			></path>
			<path
				fill={color}
				d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
			></path>
		</svg>
	)
}