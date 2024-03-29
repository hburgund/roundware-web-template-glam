import { makeStyles } from '@mui/styles';
import landingHeaderImage from '../../assets/bg-about.jpg';
const useStyles = makeStyles((theme) => {
	return {
		topBar: {
			backgroundColor: theme.palette.grey[900],
		},
		bottomBar: {
			top: 'auto',
			bottom: 0,
		},
		actionButton: {
			margin: 'auto',
		},
		root: {
			maxWidth: '100vw',
			paddingRight: 0,
			paddingLeft: 0,
		},
		landingHeader: {
			backgroundImage: `url(${landingHeaderImage})`,
			backgroundSize: 'cover',
			height: '100%',
			backgroundPosition: 'center',
			backgroundAttachment: 'fixed',
			// marginTop: -64,
		},
		landingTitleBlock: {
			height: '34vh',
			minWidth: '70vw',
			[theme.breakpoints.down('sm')]: {
				// height: 80,
			},
		},
		landingTitle: {
			fontSize: '4em',
			height: '18vh',
			color: "#ffffff",
			fontFamily: "Hoefler Text",
			[theme.breakpoints.down('lg')]: {
				fontSize: '4em',
			},
			[theme.breakpoints.down('md')]: {
				fontSize: '3em',
			},
			[theme.breakpoints.down('sm')]: {
				fontSize: '2em',
			},
		},
		landingTagline: {
			textAlign: 'center',
			height: '15vh',
			color: "#ffffff",
			paddingTop: 15,
			[theme.breakpoints.down('sm')]: {
				lineHeight: '1.2em',
			},
		},
		landingBanner: {
			width: 'auto',
			height: 100,
			[theme.breakpoints.down('sm')]: {
				width: '70%',
				height: 'auto',
			},
		},
		landingButtonBlock: {
			height: 100,
			position: "absolute",
			bottom: '13vh',
		}
	};
});

export default useStyles;
