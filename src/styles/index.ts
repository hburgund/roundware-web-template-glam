//the createMuiTheme function was renamed to createTheme.
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
export const defaultTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#DA0083',
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				textPrimary: {
					color: '#000000 !important',
				},
			},
		},
	},
});

export const lightTheme = createTheme({
	palette: {
		mode: 'light',
		primary: {
			main: '#F2C349',
		},
	},
});

export const useDefaultStyles = makeStyles(() => ({
	root: {
		height: '100vh',
		display: 'flex',
		// maxWidth: 'none !important',
	},
}));
