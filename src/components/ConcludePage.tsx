import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ReplayIcon from '@mui/icons-material/Replay';
import Fade from '@mui/material/Fade';
import { Link } from 'react-router-dom';
interface Props {}

const ConcludePage = (props: Props) => {
	return (
		<Fade in timeout={1300}>
			<Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} component={Paper}>
				<Stack spacing={5} justifyContent='center' alignItems='center'>
					<Typography variant='h4' textAlign='center'>
						Tell us about your experience
					</Typography>

					<Rating size='large' />
					<Link to={'/'}>
						<Button size='large' startIcon={<ReplayIcon />} variant='outlined'>
							Start Again
						</Button>
					</Link>
				</Stack>
			</Container>
		</Fade>
	);
};

export default ConcludePage;
