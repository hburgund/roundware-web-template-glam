import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Backdrop from '@mui/material/Backdrop';
import IconButton from '@mui/material/IconButton';
import config from 'config.json';
import { useRoundware } from 'hooks';
import React from 'react';

interface Props {}
const duration = config.CONCLUDE_DURATION;
const ConcludeButton = (props: Props) => {
	const { concludeStarted, conclude, setConcludeStarted } = useRoundware();

	return (
		<>
			<IconButton size='large' title='Conclude' onClick={() => conclude(true)}>
				<ExitToAppIcon />
			</IconButton>
			<Backdrop open={concludeStarted} onTransitionEnd={() => setConcludeStarted(false)} transitionDuration={duration * 1000} />
		</>
	);
};

export default ConcludeButton;
