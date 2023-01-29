import AdapterDateFns from '@mui/x-date-pickers/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { StyledEngineProvider, Theme, ThemeProvider } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { defaultTheme } from '../styles';
import NoSleepProvider from './NoSleepProvider';
import RoundwareProvider from './RoundwareProvider';
import UiConfigProvider from './UIConfigProvider';
import { URLSyncProvider } from './URLProvider';
declare module '@mui/styles/defaultTheme' {
	interface DefaultTheme extends Theme {}
}

interface Props {
	children: React.ReactNode;
}

const Providers = (props: Props) => {
	const [theme] = useState(defaultTheme);

	return (
		<BrowserRouter>
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
