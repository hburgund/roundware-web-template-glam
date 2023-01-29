import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoundwareProvider from './RoundwareProvider';
import UiConfigProvider from './UIConfigProvider';
import { URLSyncProvider } from './URLProvider';
import { defaultTheme } from '../styles';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import NoSleepProvider from './NoSleepProvider';
import UserConfirmation from 'components/UserConfirmation';
declare module '@mui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}

interface Props {
	children: React.ReactNode;
}

const Providers = (props: Props) => {
	const [theme] = useState(defaultTheme);

	return (
		<BrowserRouter getUserConfirmation={(message, callback) => UserConfirmation(message, callback)}>
			<NoSleepProvider>
				<RoundwareProvider>
					<UiConfigProvider>
						<URLSyncProvider>
							<StyledEngineProvider injectFirst>
								<ThemeProvider theme={theme}>
									<LocalizationProvider dateAdapter={AdapterDateFns}>{props.children}</LocalizationProvider>
								</ThemeProvider>
							</StyledEngineProvider>
						</URLSyncProvider>
					</UiConfigProvider>
				</RoundwareProvider>
			</NoSleepProvider>
		</BrowserRouter>
	);
};

export default Providers;
