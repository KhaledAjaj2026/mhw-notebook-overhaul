import React, { useEffect, useState } from 'react';
// use MaterialUI autofill API
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import Footer from '/src/components/Footer/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './App.css';

export default function App() {
	useEffect(() => {
		Aos.init();
	}, []);

	const [input, setInput] = new useState(false);
	const [showSearch, setShowSearch] = new useState(true);
	const [result, setResult] = new useState(false);

	const handleShowSearch = () => setShowSearch(!showSearch);
	const handleInput = (e) => setInput(e.target.value);
	const handleResult = () => setResult(!result);

	return (
		<div id='app-container'>
			<div className='background-image'></div>
			<Hero showSearch={showSearch} />
			<Search
				showSearch={showSearch}
				input={input}
				handleInput={handleInput}
				result={result}
				handleResult={handleResult}
			/>
			{/* <Result input={input} /> */}
			<Footer />
		</div>
	);
}
