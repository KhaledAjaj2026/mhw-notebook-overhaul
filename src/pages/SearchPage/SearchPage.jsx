import React from 'react';
import './SearchPage.css';
import SearchBar from '../../components/SearchBar/SearchBar';

export default function SearchPage(handleTurnPage, handleSeekMonster) {
	return (
		<>
			<h2 className='search-leaf_title'>
				<span className='search-leaf_title-top'>Discover the</span>
				<br />
				New World
			</h2>
			<SearchBar handleSeekMonster={handleSeekMonster} />
			<button
				type='button'
				className='turn_leaf-button'
				onClick={handleTurnPage}
			>
				Go to Table of Contents
			</button>
		</>
	);
}
