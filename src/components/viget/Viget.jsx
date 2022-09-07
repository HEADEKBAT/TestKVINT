/** @format */

import React from 'react';

function Viget() {
	return (
		<div className="blockViget" onClick={(e) => e.stopPropagation()}>
			<span>виджет</span>
		</div>
	);
}

export default Viget;
