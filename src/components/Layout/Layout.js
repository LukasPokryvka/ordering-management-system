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
import useStyles from '../../functions/LayoutStyles'
import Collapse from '@material-ui/core/Collapse'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import RestaurantMenuRoundedIcon from '@material-ui/icons/RestaurantMenuRounded'
import FastfoodRoundedIcon from '@material-ui/icons/FastfoodRounded'
import { Link } from 'react-router-dom'
import custStyles from '../../styles/Layout.module.css'

const PersistentDrawerLeft = ({ children }) => {
	const classes = useStyles()
	const theme = useTheme()
	const [open, setOpen] = React.useState(true)
	const [createOpen, setCreateOpen] = React.useState(false)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	const handleCreateOpen = () => {
		setCreateOpen(!createOpen)
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
						className={clsx(classes.lightText, classes.lightHover)}
					>
						{theme.direction === 'ltr' ? (
							<ChevronLeftIcon />
						) : (
							<ChevronRightIcon />
						)}
					</IconButton>
				</div>
				<Divider />
				<List disablePadding className={classes.lightText}>
					<Link
						to="/"
						className={clsx(custStyles.reset_link_styles, classes.lightText)}
					>
						<ListItem button className={classes.lightHover}>
							<ListItemIcon className={classes.lightText}>
								<AppsTwoToneIcon />
							</ListItemIcon>
							<ListItemText primary={'Summary'} />
						</ListItem>
					</Link>
					<ListItem
						button
						className={clsx(classes.lightHover)}
						onClick={handleCreateOpen}
					>
						<ListItemIcon className={classes.lightText}>
							<AddCircleOutlineRounded />
						</ListItemIcon>
						<ListItemText primary={'Create'} className={classes.lightText} />
						{createOpen ? (
							<ExpandLess className={classes.lightText} />
						) : (
							<ExpandMore className={classes.lightText} />
						)}
					</ListItem>
					<Collapse in={createOpen} timeout="auto" unmountOnExit>
						<List component="div" disablePadding className={classes.lightText}>
							<ListItem
								button
								className={clsx(classes.nested, classes.lightHover)}
							>
								<ListItemIcon className={classes.lightText}>
									<RestaurantMenuRoundedIcon />
								</ListItemIcon>
								<ListItemText primary="Menu" />
							</ListItem>
							<Link
								to="/create/meal"
								className={clsx(
									custStyles.reset_link_styles,
									classes.lightText
								)}
							>
								<ListItem
									button
									className={clsx(classes.nested, classes.lightHover)}
								>
									<ListItemIcon className={classes.lightText}>
										<FastfoodRoundedIcon />
									</ListItemIcon>
									<ListItemText primary="Meal" />
								</ListItem>
							</Link>
						</List>
					</Collapse>
				</List>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open
				})}
			>
				<div className={classes.drawerHeader} />
				{children}
			</main>
		</div>
	)
}

export default PersistentDrawerLeft
