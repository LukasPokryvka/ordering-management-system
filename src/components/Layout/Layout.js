import React from 'react'
import clsx from 'clsx'
import { useTheme } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppsTwoToneIcon from '@material-ui/icons/AppsTwoTone'
import AddCircleOutlineRounded from '@material-ui/icons/AddCircleOutlineRounded'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useStyles from '../../functions/LayoutStyles'

export default function PersistentDrawerLeft() {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(true)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<div className={classes.root}>
			<CssBaseline />
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
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton
						onClick={handleDrawerClose}
						className={clsx(classes.lightButton, classes.lightHover)}
					>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button className={classes.lightHover}>
						<ListItemIcon className={classes.lightButton}>
							<AppsTwoToneIcon />
						</ListItemIcon>
						<ListItemText className={classes.lightText} primary={'Summary'} />
					</ListItem>
					<Accordion
						className={clsx(
							classes.transparentBg,
							classes.lightText,
							classes.lightHover
						)}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon className={classes.lightButton} />}
							className={classes.transparentBg}
						>
							<ListItem
								button
								className={clsx(classes.lightHover, classes.removeHover)}
							>
								<ListItemIcon className={classes.lightButton}>
									<AddCircleOutlineRounded />
								</ListItemIcon>
								<ListItemText primary={'Create'} />
							</ListItem>
						</AccordionSummary>
					</Accordion>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
			</main>
		</div>
	)
}
