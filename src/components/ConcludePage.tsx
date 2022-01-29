import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import Fade from '@mui/material/Fade';
import MuiLink from '@mui/material/Link';
import { useHistory, Link } from 'react-router-dom';
import config from 'config.json';
import { useRoundware } from 'hooks';
interface Props {}

const ConcludePage = (props: Props) => {
	const { resetAutoConclude } = useRoundware();
	const history = useHistory();
	const handleOnStartAgain = () => {
		resetAutoConclude();
	};
	return (
		<Fade in timeout={1500}>
			<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} component={Paper}>
				<Stack spacing={5} justifyContent='center' alignItems='center'>
					<Typography variant='h4' textAlign='center'>
						Tell us about your experience
					</Typography>

					{config.SURVEY_LINK && (
						<Button sx={{ textTransform: 'none' }} variant='outlined' href={config.SURVEY_LINK}>
							<Stack>
								<Typography variant='h6' textAlign='center'>
									Take a Survey
								</Typography>
								<MuiLink href={config.SURVEY_LINK}>{config.SURVEY_LINK}</MuiLink>
							</Stack>
						</Button>
					)}

					<Button size='large' onClick={handleOnStartAgain} startIcon={<ReplayIcon />} variant='outlined'>
						Start Again
					</Button>
				</Stack>
			</Container>
		</Fade>
	);
};

export default ConcludePage;
