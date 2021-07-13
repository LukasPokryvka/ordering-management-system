import React from 'react'
import clsx from 'clsx'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import useStyles from '../../functions/LayoutStyles'

const ApplicBar = ({ handleDrawerOpen, open }) => {
	const classes = useStyles()
	return (
		<AppBar
			position="fixed"
			className={clsx(classes.appBar, {
				[classes.appBarShift]: open
			})}
		>
			<Toolbar>
				<IconButton
					aria-label="open drawer"
					onClick={handleDrawerOpen}
					edge="start"
					className={clsx(classes.menuButton, open && classes.hide)}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6" noWrap className={classes.title}>
					Welcome, sir 🐱‍🚀
				</Typography>
			</Toolbar>
		</AppBar>
	)
}

export default ApplicBar
