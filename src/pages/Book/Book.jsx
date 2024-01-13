import React from 'react';
import flare from '../../assets/misc/lens-flare-green.png';
import Search from '../../components/Search/Search';
import './Book.css';

export default function Book() {
	return (
		<div id='book-container'>
			<header className='main-header_container'>
				<h1 className='main-header_title'>Discover Monsters</h1>
				<img className='main-header_flare' src={flare} alt='lens flare' />
			</header>
			<Search />
			<div className='main-description'>
				<p>
					Learn about monster ecology, hunting techniques, quest rewards, and
					more
				</p>
			</div>
			<a href='/' className='navigation-button'>
				Search Now
			</a>
		</div>
	);
}
