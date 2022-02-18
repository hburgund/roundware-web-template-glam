import React, { Component, ErrorInfo, ReactNode } from 'react';
import Alert from '@mui/material/Alert';
interface Props {
	children: ReactNode;
}

interface State {
	hasError: boolean;
	error: string;
}

class ErrorBoundary extends Component<Props, State> {
	public state: State = {
		hasError: false,
		error: ``,
	};

	public static getDerivedStateFromError(e: Error): State {
		// Update state so the next render will show the fallback UI.
		return { hasError: true, error: JSON.stringify(e, null, 4) };
	}

	public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error('Uncaught error:', error, errorInfo);
		this.state.error = JSON.stringify(error, null, 4);
	}

	public render() {
		if (this.state.hasError) {
			return (
				<>
					<Alert severity='error'>Sorry.. there was an error</Alert>
					<code>{this.state.error}</code>
				</>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;
