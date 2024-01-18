import React from 'react';
import './SearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchPage(handleFlip) {
	return (
		<>
			<h2 className='search-leaf_title'>
				<span className='search-leaf_title-top'>Discover the</span>
				<br />
				New World
			</h2>
			<SearchBar />
			<button type='button' className='turn-leaf' onClick={handleFlip}>
				Go to Table of Contents
			</button>
		</>
	);
}
