import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

export default makeStyles((theme) => ({
	root: {
		display: 'flex'
	},
	appBar: {
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		background: '#ffffff',
		boxShadow: 'none'
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2),
		color: 'rgba(0,0,0,.5)'
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth,
		backgroundColor: '#06163A'
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		}),
		marginLeft: -drawerWidth,
		minHeight: '100vh',
		backgroundColor: '#EDF5F8'
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: 0
	},
	title: {
		color: '#333333'
	},
	lightButton: {
		color: 'rgba(255, 255, 255, 0.8)'
	},
	lightText: {
		color: 'rgba(255, 255, 255, 0.8)'
	},
	lightHover: {
		'&:hover, &:focus': {
			backgroundColor: 'rgba(255, 255, 255, 0.1)'
		}
	},
	transparentBg: {
		backgroundColor: 'rgba(0,0,0,0)',
		paddingLeft: '0'
	},
	removeHover: {
		'&:hover, &:focus': {
			backgroundColor: 'transparent'
		}
	}
}))
