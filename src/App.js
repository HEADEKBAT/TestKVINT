/** @format */
import React, { useState } from 'react';
import './App.css';

import Button from './components/button/Button';
import Animation from './components/animation/Animation';
import Viget from './components/viget/Viget';

function App() {
	const [blockItem, setBlockItem] = useState(Button);
	const changeButton = async () => {
		setBlockItem(Animation);
		setTimeout(() => {
			setBlockItem(Viget);
		}, 3000);
	};

	return (
		<div className="App">
			<div className="blockItem" onClick={changeButton}>
				{blockItem}
			</div>
		</div>
	);
}

export default App;
