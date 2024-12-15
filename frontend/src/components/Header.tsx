import { AppBar, Box, Toolbar, Typography } from '@mui/material'

export default function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						SpendTracker
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
