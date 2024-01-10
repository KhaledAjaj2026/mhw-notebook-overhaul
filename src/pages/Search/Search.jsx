import React, { useState } from 'react';
import Autofill from '../../components/Autofill/Autofill';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Result from '../../components/Result/Result';
import flare from '../../assets/misc/lens-flare-green.png';
import './Search.css';

export default function Search() {
	const [result, setResult] = new useState(false);

	return (
		<>
			<div id='page_search-container'>
				<NavBar />
				<header
					className={`main-header_container${
						result ? ' fade-disappear' : ' fade-appear'
					}`}
				>
					<h1 className='main-header_title'>
						Start your
						<br />
						adventure
					</h1>
					<img className='main-header_flare' src={flare} alt='lens flare' />
				</header>
				<form
					className={`${result ? 'search_input-rise' : 'search_input-fall'}`}
				>
					<label htmlFor='monster-search' className='search_label'>
						Search for a monster below
					</label>
					<div className='search_input__icon'>
						<input
							type='text'
							name='monster-search'
							id='monster-search'
							placeholder='E.g. Anjanath'
						/>
						<button
							type='button'
							className='search_submit'
							onClick={() => setResult(true)}
						>
							<img
								src='src/assets/misc/magnifying-glass-9.svg'
								className='search_icon'
								alt='magnifying glass'
							/>
						</button>
					</div>
					{/* <Autofill /> */}
					<Result />
				</form>
			</div>
			<Footer />
		</>
	);
}
