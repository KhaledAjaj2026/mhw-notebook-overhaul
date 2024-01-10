import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import flare from '../../assets/misc/lens-flare-green.png';
import './Search.css';

export default function Search() {
	return (
		<div id='page_search-container'>
			<NavBar />
			<header className='search_header-container'>
				<h1 className='search_header-title'>
					Start your
					<br />
					adventure
				</h1>
				<img className='search_header-flare' src={flare} alt='lens flare' />
			</header>
			<form>
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
					<button type='button' className='search_submit'>
						<img
							src='src/assets/misc/magnifying-glass-9.svg'
							className='search_icon'
							alt='magnifying glass'
						/>
					</button>
				</div>
				<div id='search_autofill-container'>
					<p>Ancient Leshen</p>
					<hr />
					<p>Anjanath</p>
					<hr />
					<p>Azure Rathalos</p>
				</div>
			</form>
			<Footer />
		</div>
	);
}
