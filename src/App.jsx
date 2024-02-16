import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import Footer from '/src/components/Footer/Footer';
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import './App.css';

export default function App() {
	/**
	 * loading - check for initial site load, used for slower connections.
	 * disabled - set "disabled" property on Search component.
	 * input - capture user input, or selected Autocomplete value.
	 * showSearch - show Search component, toggle upon clicking "Explore" btn.
	 * result - determine whether search query results in API fetch or not.
	 */
	const [loading, setLoading] = new useState(true);
	const [disabled, setDisabled] = new useState(true);
	const [input, setInput] = new useState('');
	const [showSearch, setShowSearch] = new useState(false);
	const [result, setResult] = new useState({
		name: '',
		species: '',
		location: '',
		description: '',
		ailments: [],
		weaknesses: [],
		resistances: [],
		rewards: [],
	});

	const handleDisabled = () => setDisabled(false);
	const handleInput = (val) => setInput(val);
	const handleShowSearch = () => setShowSearch(!showSearch);
	const handleResult = () => {
		axios
			.get('https://mhw-db.com/monsters')
			.then((response) => {
				setResult({
					name: response.data[26].name,
					species: response.data[26].species,
					location: response.data[26].locations[0].name,
					description: response.data[26].description,
					ailments: response.data[26].ailments,
					weaknesses: response.data[26].weaknesses,
					resistances: response.data[26].resistances,
					rewards: response.data[26].rewards,
				});
			})
			.catch((err) => console.error(err));
	};

	// Side effect - website's initial load.
	useEffect(() => {
		// Initialize Animate On Scroll library (AOS).
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

	// Side effect - fetching data from MHW API.
	useEffect(() => {
		handleResult;
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
					handleDisabled={handleDisabled}
				/>
			)}
			<Search
				showSearch={showSearch}
				input={input}
				handleInput={handleInput}
				result={result}
				handleResult={handleResult}
				disabled={disabled}
			/>
			<Result input={input} result={result} />
			{loading ? null : <Footer />}
		</div>
	);
}
