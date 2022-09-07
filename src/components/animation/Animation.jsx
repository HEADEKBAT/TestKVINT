/** @format */

import React from 'react';
import animate from './lottie/INITIALIZE_1_HQ';
import Lottie from 'lottie-react';
function Animation() {
	return <Lottie className="animation" animationData={animate} loop={true} />;
}

export default Animation;
