type Props = { color?: string }

export default function UploadFileIcon({ color = '#06b6d4' }: Props) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			className="inline pr-2"
		>
			<path
				fill={color}
				d="M13 4H6v16h12V9h-5zm3 11h-3v4h-2v-4H8l4.01-4z"
				opacity="0.3"
			/>
			<path
				fill={color}
				d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm4 18H6V4h7v5h5z"
			/>
			<path fill={color} d="M8 15h3v4h2v-4h3l-3.99-4z" />
		</svg>
	)
}
