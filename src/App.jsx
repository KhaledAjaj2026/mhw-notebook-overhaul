import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import nameToHyphen from './utils/hyphen';
import Aos from 'aos';
import axios from 'axios';
import 'aos/dist/aos.css';
import './App.css';

export default function App() {
	/**
	 * loading - check for initial site load, used for slower connections.
	 * input - capture user input, or selected Autocomplete value.
	 * showSearch - show Search component, toggle upon clicking "Explore" btn.
	 * showInfo - show Info component, toggle upon clicking "i" btn.
	 * biome - determine which background image to display based on monster's biome.
	 * focus - check if Search component is focused or blurred.
	 * result - determine whether search query results in API fetch or not.
	 */
	const [loading, setLoading] = new useState(false);
	const [input, setInput] = new useState('');
	const [showSearch, setShowSearch] = new useState(false);
	const [showInfo, setShowInfo] = new useState(false);
	const [error, setError] = new useState('');
	const [biome, setBiome] = new useState('astera');
	const [focus, setFocus] = new useState(false);
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

	const handleLoading = (val) => setLoading(val);
	const handleDisabled = () => setDisabled(false);
	const handleInput = (val) => setInput(val);
	const handleShowSearch = () => setShowSearch(!showSearch);
	const handleError = (err) => setError(err);
	const handleBiome = (location) => {
		const biomeName = nameToHyphen(location);
		setBiome(biomeName);
	};
	const handleFocus = () => setFocus(!focus);
	const handleResult = () => {
		if (input.toLowerCase() !== result.name.toLowerCase()) {
			axios
				.get('https://mhw-db.com/monsters')
				.then((response) => {
					const monster = response.data.filter(
						(monster) => monster.name.toLowerCase() === input.toLowerCase()
					);
					if (monster.length > 0) {
						setResult({
							name: monster[0].name,
							species: monster[0].species,
							location: monster[0].locations[0].name,
							description: monster[0].description,
							ailments: monster[0].ailments,
							weaknesses: monster[0].weaknesses,
							resistances: monster[0].resistances,
							rewards: monster[0].rewards,
						});
						handleBiome(monster[0].locations[0].name);
					} else {
						setError('Monster not found, or incorrect input');
						setTimeout(() => setError(''), 3000);
						setLoading(false);
					}
				})
				.catch((err) => console.error(err));
		}
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
			<div
				className='background-image'
				style={{
					backgroundImage: `linear-gradient(to bottom, #232B2466 0%, #3d4c0063 100%), url(/assets/biomes/${biome}.jpg)`,
				}}
			></div>
			{loading ? (
				<div className='loading_screen'>
					<div className='loading_screen-animation'>
						<div className='loading-animation'></div>
						<p>Loading...</p>
					</div>
				</div>
			) : showSearch ? (
				<Search
					input={input}
					handleInput={handleInput}
					result={result}
					handleResult={handleResult}
					handleFocus={handleFocus}
					handleLoading={handleLoading}
					error={error}
					handleError={handleError}
				/>
			) : (
				<Hero handleShowSearch={handleShowSearch} />
			)}
			<Result
				result={result}
				biome={biome}
				focus={focus}
				loading={loading}
				handleLoading={handleLoading}
			/>
		</div>
	);
}
