import { ThemeProvider, Theme, StyledEngineProvider } from '@mui/material';
import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RoundwareProvider from './RoundwareProvider';
import UiConfigProvider from './UIConfigProvider';
import { URLSyncProvider } from './URLProvider';
import { defaultTheme } from '../styles';


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


interface Props {
	children: React.ReactNode;
}

const Providers = (props: Props) => {
	const [theme] = useState(defaultTheme);
	return (
        <RoundwareProvider>
			<UiConfigProvider>
				<BrowserRouter>
					<URLSyncProvider>
						<StyledEngineProvider injectFirst>
                            <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
                        </StyledEngineProvider>
					</URLSyncProvider>
				</BrowserRouter>
			</UiConfigProvider>
		</RoundwareProvider>
    );
};

export default Providers;
