import React, { useState } from 'react';
import Autofill from '../Autofill/Autofill';
import './SearchBar.css';

export default function Search({ handleSearch }) {
	const [show, setShow] = new useState(false);

	const handleShow = (event) => {
		const val = event.target.value;
		if (val.length > 0) setShow(true);
		else setShow(false);
	};

	return (
		<div>
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
						onChange={handleShow}
						autoComplete='off'
					/>
					<button
						type='button'
						className='search_submit'
						onClick={handleSearch}
					>
						<img
							src='src/assets/misc/magnifying-glass-9.svg'
							className='search_icon'
							alt='magnifying glass'
						/>
					</button>
				</div>
			</form>
			<Autofill show={show} />
		</div>
	);
}
