import React, { useState } from 'react';
// use MaterialUI autofill API
import Search from './components/Search/Search';
import Result from '/src/components/Result/Result';
import Footer from '/src/components/Footer/Footer';
import flare from '/src/assets/misc/lens-flare-green.png';
import './App.css';

export default function App() {
	const [input, setInput] = new useState(false);

	return (
		<div id='app-container'>
			<header
				className={`main-header_container${
					input ? ' fade-disappear' : ' fade-appear'
				}`}
			>
				<h1 className='main-header_title'>
					Start your
					<br />
					adventure
				</h1>
				<img className='main-header_flare' src={flare} alt='lens flare' />
			</header>
			<Search setInput={setInput} />
			<Result input={input} />
			<Footer />
		</div>
	);
}
