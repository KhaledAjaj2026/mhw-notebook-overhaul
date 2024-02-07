import React, { useState } from 'react';
// use MaterialUI autofill API
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import Footer from '/src/components/Footer/Footer';
import Carousel from './components/Carousel/Carousel';
import flare from '/src/assets/misc/lens-flare-green.png';
import './App.css';

export default function App() {
	const [input, setInput] = new useState(false);

	return (
		<div id='app-container'>
			<header
				className={`main_header-container${
					input ? ' fade-disappear' : ' fade-appear'
				}`}
			>
				<h1 className='main_header-title'>
					Discover the
					<br />
					<span className='main_header-title_sub'>New World</span>
				</h1>
				<img className='main_header-flare' src={flare} alt='lens flare' />
			</header>
			<Carousel />
			{/* <Search setInput={setInput} />
			<Result input={input} /> */}
			{/* <Footer /> */}
		</div>
	);
}
