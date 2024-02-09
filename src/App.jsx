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
	const [loading, setLoading] = new useState(true);
	const [input, setInput] = new useState(false);
	const [showSearch, setShowSearch] = new useState(false);
	const [result, setResult] = new useState(false);

	const handleShowSearch = () => setShowSearch(!showSearch);
	const handleInput = (e) => setInput(e.target.value);
	const handleResult = () => setResult(!result);

	useEffect(() => {
		Aos.init();

		const onPageLoad = () => {
			setLoading(false);
		};

		if (document.readyState === 'complete') {
			onPageLoad();
		} else {
			window.addEventListener('load', onPageLoad, false);
			return () => window.removeEventListener('load', onPageLoad);
		}
	}, []);

	return (
		<div id='app-container'>
			<div className='background-image'></div>
			{loading ? (
				<div className='loading_screen'>
					<div className='loading_screen-animation'>
						<div className='loading-animation'></div>
						<p>Loading...</p>
					</div>
				</div>
			) : (
				<Hero
					showSearch={showSearch}
					handleShowSearch={handleShowSearch}
					result={result}
				/>
			)}
			<Search
				showSearch={showSearch}
				input={input}
				handleInput={handleInput}
				result={result}
				handleResult={handleResult}
			/>
			<Result input={input} result={result} />
			{loading ? null : <Footer />}
		</div>
	);
}
