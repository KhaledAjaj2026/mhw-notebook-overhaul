import React from 'react';
import './SearchPage';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchPage() {
	return (
		<>
			<h2 className='book-leaf_title'>
				<span className='book-leaf_title-top'>Discover the</span>
				<br />
				New World
			</h2>
			<SearchBar />
			<button type='button' className='turn-leaf'>
				Go to Table of Contents
			</button>
		</>
	);
}
