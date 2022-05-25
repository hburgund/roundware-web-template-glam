import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ActionButton from './ActionButton';
import React, { Fragment } from 'react';
import { makeStyles } from '@mui/styles';
import { useRoundware } from '../../hooks';
import Container from '@mui/material/Container';

import banner from '../../assets/rw-icon-cluster.png';
import { GeoListenMode } from 'roundware-web-framework';
import useStyles from './styles';
import config from 'config.json';

export const LandingPage = () => {
	const { roundware, forceUpdate } = useRoundware();
	const classes = useStyles();

	const project = roundware.project;
	if (!project || project.projectName === '(unknown)') {
		return null;
	}

	return (
		<Container className={classes.root} style={{ paddingRight: 0, paddingLeft: 0 }}>
			<Grid container className={classes.landingHeader}>
				<Grid container justifyContent='center' className={classes.landingTitleBlock}>
					<Grid item style={{ margin: 'auto', height: '18vh', textAlign: 'center', paddingTop: 15, minWidth: '70vw' }} md={12}>
						<Typography
              variant={"h2"}
              className={classes.landingTitle}
            >
              FAMILY
							<br />
							ASSOCIATION
            </Typography>
						{/*<img src={banner} className={classes.landingBanner} />*/}
					</Grid>
					<Grid item sm={12}>
						<Typography variant={'subtitle1'} className={classes.landingTagline}>
							Co-Commissioned by
							<br />
							<strong>University Settlement and</strong>
							<br />
							<strong>Music At The Anthology</strong>
						</Typography>
					</Grid>
				</Grid>
				<Grid container justifyContent='center' className={classes.landingButtonBlock}>
					{project.data?.listen_enabled && (
						<Grid item>
							<ActionButton
								onClick={() => {
									if (!config.AUTOPLAY) return;
									if (!roundware.mixer || !roundware.mixer?.playlist) {
										roundware?.activateMixer({ geoListenMode: GeoListenMode.MANUAL }).then(() => {
											if (roundware && roundware.uiConfig && roundware.uiConfig.listen && roundware.uiConfig.listen[0]) {
												const listen_tags = roundware.uiConfig.listen[0].display_items.map((i) => i.tag_id);
												roundware.mixer.updateParams({
													listenerLocation: roundware.listenerLocation,
													minDist: 0,
													maxDist: 0,
													recordingRadius: 0,
													listenTagIds: listen_tags,
												});
												roundware.mixer.play();
												forceUpdate();
											}
										});
									} else {
										roundware.mixer.play();
										forceUpdate();
									}
								}}
								label={'Begin'}
								linkTo={'/listen'}
								style={{ width: '100%' }}
							/>
						</Grid>
					)}

					{/*{project.data?.speak_enabled && (
						<Grid item>
							<ActionButton label={'Speak'} linkTo={'/speak'} />
						</Grid>
					)}*/}
				</Grid>
			</Grid>
		</Container>
	);
};
