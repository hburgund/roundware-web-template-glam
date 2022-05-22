import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import { PlatformMessage } from 'components/PlatformMessage';
import { isIOS, isFirefox, isSafari, isChrome, isAndroid } from 'react-device-detect';

export function getMessageOnLoad(): PlatformMessage | null {
	// return null;
	// example
	switch (true) {
		// message
		// case isSafari:
		// 	return {
		// 		message: 'You are using Safari. Please use another browser',
		// 	};
		// with custom actions;
		// case isFirefox:
		// 	return {
		// 		message: 'Custom actions',
		//
		// 		// any component / string / element
		// 		action: (
		// 			<Button variant='contained' onClick={() => alert(`hello`)}>
		// 				Hello
		// 			</Button>
		// 		),
		//
		// 		// continue anyway button label
		// 		buttonLabel: 'OK',
		// 	};

		// with custom title
		// case isFirefox:
		// 	return {
		// 		title: 'Custom title',
		// 		message: 'You are using Firefox. Please use another browser',
		// 	};

		// with custom title
		case isAndroid && !isChrome:
			return {
				title: 'Important Info',
				message: '"Family Association" is best experienced with a Chrome browser on your Android device. Before you begin, please allow access to your location data; you can update location permissions via Settings. Mobile browsers do not update location and play audio when in background mode; please keep your browser open and active to listen uninterrupted.',
				buttonLabel: 'Continue',
			};

		case isAndroid && isChrome:
			return {
				title: 'Important Info',
				message: 'Before you begin, please allow Chrome access to your location data; you can update location permissions via Settings. Mobile browsers do not update location and play audio when in background mode; please keep your browser open and active to listen uninterrupted.',
				buttonLabel: 'Continue',
			};

		// with custom link and component
		case isIOS:
			return {
				title: 'Important Info',
				message: (
					<span>
						"Family Association" is now available as a free iOS app from the App Store! We highly encourage downloading and using the app for the best soundwalk experience.&nbsp;
						<Link href='https://apps.apple.com/us/app/family-association/id1613217420'>Download iOS App</Link><br /><br />If you choose to continue using
						this web app, "Family Association" is best experienced with a Chrome browser. Please allow Chrome access to your location data by heading
						to Settings &gt; Privacy &gt; Location Services. Mobile browsers do not update location and play audio when in background mode,
						so please keep your browser open and active to listen uninterrupted.
					</span>
				),
				buttonLabel: 'Continue Anyway',
			};

			case isIOS && isChrome:
				return {
					title: 'Important Info',
					message: 'Before you begin, please allow Chrome access to your location data by heading to Settings > Privacy > Location Services. Mobile browsers do not update location and play audio when in background mode; please keep your browser open and active to listen uninterrupted.',
					buttonLabel: 'Continue',
				};

			case isIOS && !isChrome:
				return {
					title: 'Important Info',
					message: '"Family Association" is best experienced with a Chrome browser on your iOS device. Please allow Chrome access to your location data by heading to Settings > Privacy > Location Services. Mobile browsers do not update location and play audio when in background mode; please keep your browser open and active to listen uninterrupted.',
					buttonLabel: 'Continue',
				};

		default:
			return null;
	}
}
