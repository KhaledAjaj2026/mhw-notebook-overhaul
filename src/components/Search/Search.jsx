import React, { useState } from 'react';
// import Autofill from '../../components/Autofill/Autofill';
import flare from '../../assets/misc/lens-flare-green.png';
import './Search.css';

export default function Search({ input }) {
	return (
		<div id='page_search-container'>
			<form className={`${input ? 'search_input-rise' : 'search_input-fall'}`}>
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
