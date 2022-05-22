import { useRoundware } from '../hooks';
import React, { Fragment, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Typography from '@mui/material/Typography';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import InfoIcon from '@mui/icons-material/Info';

const InfoPopup = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<IconButton onClick={handleClickOpen}>
				<InfoIcon />
			</IconButton>
			<Dialog open={open} onClose={handleClose} aria-labelledby='alert-dialog-title' aria-describedby='alert-dialog-description'>
				<DialogTitle id='alert-dialog-title'>Family Association (2022)</DialogTitle>
				<DialogContent dividers>
					<Typography gutterBottom>A Site-Specific Soundwalk for Manhattan's Chinatown</Typography>
					<Typography gutterBottom>Music by George Tsz-Kwan Lam</Typography>
					<Typography gutterBottom>Co-commissioned by The Performance Project at University Settlement and Music At The Anthology</Typography>
					<Typography gutterBottom>Featuring recorded interviews with Eugenie Chan, Jerllin Cheng, Frank Gee, Karen Liu, and Han Yu.</Typography>
					<Divider />
					<Typography variant={'h6'} gutterBottom>
						<br />
						About The Work
					</Typography>
					<ul>
						<li>
							<em>Family Association</em> is a 16-minute site-specific, geolocation-enabled
							piece that uses collected oral history recordings from five members
							of the Chinese-American community as part of an interactive
							soundwalk in Manhattan's Chinatown.
						</li>
						<li>
							In <em>Family Association</em>, you will hear interviewees' memories
							of their extended families, how their families emigrated to the United States,
							and whom they imagine their ancestors to be — including those who left
							their homeland to seek a new future in the U.S. decades
							(and perhaps centuries) ago.
						</li>
						<li>
							Using GPS technology, the work embeds the audio within sites of
							various "family associations" in Chinatown; such associations have
							created tight-knit, supportive, social, and imagined communities
							based on a common family name. These associations in the neighborhood
							serve as a way for you to interact with the stories that you hear.
						</li>
					</ul>
					<Divider />
					<Typography variant={'h6'} gutterBottom>
						<br />
						How To Listen
					</Typography>
					<ul>
						<li><strong>Note: Please be careful of your surroundings and traffic at all times as you listen!</strong></li>
						<li>
							To experience the work, begin by heading to Manhattan's Chinatown.
							We recommend beginning at the intersection of&nbsp;
							<a href="https://goo.gl/maps/75TJtnciDh5YZGWS7">Mott Street and Bayard Street</a>.
						</li>
						<li>Once you are within range, hit "Play" and freely explore the neighborhood as you use the app.</li>
						<li>
							As you approach one of these family associations, the speech becomes
							more whole, recalling the way in which these micro-communities have
							helped generations of Chinese-Americans to both reconstruct and
							reconnect with their past.
						</li>
						<li>
							Over the course of the 15-minute experience, the recorded testimony
							gradually focuses on the interviewees' vision of their legacy
							for the next generation.
						</li>
					</ul>
					<Divider />
					<Typography variant={'h6'} gutterBottom>
						<br />
						Share Your Thoughts
					</Typography>
					<ul>
						<li>
							We would love to hear your thoughts! At the conclusion of the
							experience, you will have an opportunity to record your own
							reflections of Chinatown. Your real-time location will be recorded,
							and your reflections may be incorporated into a future version
							of the app. (Please note that you must be at least 18 years old
							or have the permission of a parent/guardian in order to submit a
							recording.)
						</li>
						<li>
							We also invite you to complete a brief, anonymous survey at the
						 	end of the experience to share your thoughts with us.
						</li>
					</ul>
					<Divider />
					<Typography variant={'h6'} gutterBottom>
						<br />
						Credits
					</Typography>
					<Typography gutterBottom><u>Interviewees</u></Typography>
					<ul>
						<li>Eugenie Chan</li>
						<li>Jerllin Cheng</li>
						<li>Frank Gee</li>
						<li>Karen Liu</li>
						<li>Han Yu</li>
					</ul>
					<Typography gutterBottom><u>Instrumentalists</u></Typography>
					<ul>
						<li>Patrick Yim, violin</li>
						<li>Hannah Collins, cello</li>
						<li>Zach Herchen, saxophone</li>
						<li>Michael Compitello, percussion</li>
						<li>Dorothy Chan, piano</li>
					</ul>
					<Typography gutterBottom><u>Production</u></Typography>
					<ul>
						<li>George Tsz-Kwan Lam, composer</li>
						<li>Shreyas Jadhav, Taylor Snead, Halsey Burgund, software development</li>
						<li>Zach Herchen, lead audio engineer</li>
						<li>Ian Teroaka, visual designer</li>
						<li>Michelle Tabnick, publicist</li>
					</ul>
					<Typography gutterBottom>
						Special thanks to the Performance Project at University Settlement,
						Music At The Anthology, and Hong Kong Baptist University for
						their support of this project.
					</Typography>
					<Typography gutterBottom>
						This project uses <a href="https://roundware.org">Roundware</a>,
						an open-source contributory geo-located audio platform.
					</Typography>
					{/*<a href="./listen">
            <img id="map" src={assetMapGraphic} style={{width: "100%"}} />
          </a>
          <hr />*/}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color='secondary' autoFocus>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default InfoPopup;
