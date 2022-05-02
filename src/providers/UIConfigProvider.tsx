import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { UiConfigContext } from '../context/UIContext';
import config from 'config.json';
const UiConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const [infoWindowOrder, setInfoWindowOrder] = useState<string[]>(['date', 'tags', 'description', 'text', 'audio', 'actions']);

	useEffect(() => {
		// pass INFOWINDOW_DISPLAY_ITEMS var in env to set the order
		// example: INFOWINDOW_DISPLAY_ITEMS=date,tags,description,text,audio,actions

		if (config.INFOWINDOW_DISPLAY_ITEMS) {
			setInfoWindowOrder(config.INFOWINDOW_DISPLAY_ITEMS);
		}
	}, []);

	const [showShare, setShowShare] = useState(false);
	const handleCloseShare = () => setShowShare(false);
	const handleShare = () => {
		setShowShare(true);
	};

	return <UiConfigContext.Provider value={{ infoWindowOrder, showShare, handleCloseShare, handleShare }}>{children}</UiConfigContext.Provider>;
};

export default UiConfigProvider;
