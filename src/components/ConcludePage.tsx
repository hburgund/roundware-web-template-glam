import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import RateReviewIcon from '@mui/icons-material/RateReview';
import MicIcon from '@mui/icons-material/Mic';
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
			<Container
				sx={{ display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							boxShadow: 'none',
							maxWidth: '500px !important'
						}}
				component={Paper}
			>
				<Stack spacing={5} justifyContent='center' alignItems='center'>
					<Typography variant='h4' textAlign='center'>
						Thank you for listening to Family Association. We hope you enjoyed it!
					</Typography>

					<Button
						sx={{ textTransform: 'none', width: '70%', maxWidth: '300px' }}
						onClick={handleOnStartAgain}
						startIcon={<ReplayIcon />}
						variant='outlined'
					>
						<Typography variant='h6' textAlign='center'>
							Listen Again
						</Typography>
					</Button>
					<Button
						sx={{ textTransform: 'none', width: '70%', maxWidth: '300px' }}
						href={'./speak'}
						startIcon={<MicIcon />}
						variant='outlined'
					>
						<Typography variant='h6' textAlign='center'>
							Record Reactions
						</Typography>
					</Button>
					{config.SURVEY_LINK && (
						<Button
							sx={{ textTransform: 'none', width: '70%', maxWidth: '300px' }}
							variant='outlined'
							startIcon={<RateReviewIcon />}
							href={config.SURVEY_LINK}
						>
							<Typography variant='h6' textAlign='center'>
								Share Your Feedback
							</Typography>
						</Button>
					)}

				</Stack>
			</Container>
		</Fade>
	);
};

export default ConcludePage;
