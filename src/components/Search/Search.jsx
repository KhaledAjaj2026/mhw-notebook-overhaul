import React, { useState } from 'react';
// import Autofill from '../../components/Autofill/Autofill';
import flare from '../../assets/misc/lens-flare-green.png';
import './Search.css';

export default function Search({ showSearch }) {
	return (
		<div id='page_search-container'>
			{/* <header
				className='main_header-container'
				data-aos='fade-down'
				data-aos-duration='3000'
				data-aos-once='true'
			>
				<h1 className='main_header-title'>
					Discover the
					<br />
					<span className='main_header-title_sub'>New World</span>
				</h1>
				<img className='main_header-flare' src={flare} alt='lens flare' />
			</header> */}
			<form className={`${showSearch ? 'appear' : 'disappear'}`}>
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
				{/* <Autofill /> */}
			</form>
		</div>
	);
}
