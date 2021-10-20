import React from 'react';
import { Card, CircularProgress, Typography, Backdrop } from '@material-ui/core';
import { useLoadingStyles } from '../AssetLoadingOverlay';
interface LoadingOverlayProps {
	open: boolean;
	message?: string;
}
const LoadingOverlay = ({ open, message }: LoadingOverlayProps) => {
	const classes = useLoadingStyles();

	return (
		<Backdrop className={classes.backdrop} open={open}>
			<Card className={classes.loadingCard}>
				<CircularProgress className={classes.loadingSpinner} />
				<Typography className={classes.loadingMessage}>{message}</Typography>
			</Card>
		</Backdrop>
	);
};

export default React.memo(LoadingOverlay);