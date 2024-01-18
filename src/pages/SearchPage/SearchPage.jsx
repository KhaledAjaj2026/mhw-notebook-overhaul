import React from 'react';
import './SearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchPage(handler) {
	return (
		<>
			<h2 className='search-leaf_title'>
				<span className='search-leaf_title-top'>Discover the</span>
				<br />
				New World
			</h2>
			<SearchBar />
			<button type='button' className='turn_leaf-button' onClick={handler}>
				Go to Table of Contents
			</button>
		</>
	);
}
