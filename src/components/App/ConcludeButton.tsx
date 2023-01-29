import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import config from 'config';
import { useRoundware } from 'hooks';
import React from 'react';

interface Props {}
const duration = config.features.concludeDuration;
const ConcludeButton = (props: Props) => {
	const { concludeStarted, conclude, setConcludeStarted } = useRoundware();

	return (
		<>
			{/*<IconButton size='large' title='Conclude' onClick={() => conclude(true)}>
				<ExitToAppIcon />
			</IconButton>*/}
			<Button onClick={() => conclude(true)} sx={{ color: '#ffffff !important' }}>
				Conclude
			</Button>
			<Backdrop open={concludeStarted} onTransitionEnd={() => setConcludeStarted(false)} transitionDuration={duration * 1000} />
		</>
	);
};

export default ConcludeButton;
