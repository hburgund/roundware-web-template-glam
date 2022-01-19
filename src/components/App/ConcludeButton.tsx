import React, { useState, useMemo } from 'react';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import { useRoundware } from 'hooks';

import config from 'config.json';
interface Props {}
const duration = config.CONCLUDE_DURATION;
const ConcludeButton = (props: Props) => {
	const history = useHistory();
	const { roundware, codaAudio } = useRoundware();
	const [conclude, setConclude] = useState(false);

	const handleClick = () => {
		setConclude(true);
		codaAudio.play();
		roundware.mixer?.playlist?.tracks.forEach((t) => t.fadeOut(duration));
		roundware.mixer?.speakerTracks?.forEach((s) => s.player.fade(0, duration));
		setTimeout(() => {
			roundware.mixer.stop();
			history.push(`/conclusion`);
		}, duration * 1000);
	};
	return (
		<>
			<IconButton size='large' title='Conclude' onClick={handleClick}>
				<ExitToAppIcon />
			</IconButton>
			<Backdrop open={conclude} transitionDuration={duration * 1000} onClick={() => setConclude(false)} />
		</>
	);
};

export default ConcludeButton;
