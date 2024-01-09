import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home/Home';
import './index.css';
import About from './pages/About/About';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/* <Home /> */}
		<About />
	</React.StrictMode>
);
