import React, { useEffect, useState } from 'react';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import Footer from '/src/components/Footer/Footer';
import nameToHyphen from './utils/hyphen';
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
	 * biome - determine which background image to display based on monster's biome.
	 * result - determine whether search query results in API fetch or not.
	 */
	const [loading, setLoading] = new useState(true);
	const [disabled, setDisabled] = new useState(true);
	const [input, setInput] = new useState('');
	const [showSearch, setShowSearch] = new useState(false);
	const [biome, setBiome] = new useState('astera');
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
	const handleBiome = (location) => {
		const biomeName = nameToHyphen(location);
		setBiome(biomeName);
	};
	const handleResult = () => {
		axios
			.get('https://mhw-db.com/monsters')
			.then((response) => {
				const monster = response.data.filter(
					(monster) => monster.name === input
				);
				if (monster) {
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
					alert('Monster not found, or incorrect input');
				}
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
			<div
				className='background-image'
				style={{
					backgroundImage: `linear-gradient(to bottom, #232B2466 0%, #3d4c0063 100%), url(src/assets/biomes/${biome}.png)`,
				}}
			></div>
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
			<Result result={result} biome={biome} />
			{loading ? null : <Footer />}
		</div>
	);
}
