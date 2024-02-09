import React, { useState } from 'react';
import './Search.css';

export default function Search({
	showSearch,
	input,
	handleInput,
	result,
	handleResult,
	disabled,
}) {
	const [focus, setFocus] = new useState(false);
	const handleFocus = () => setFocus(!focus);

	const checkInput = () => {
		if (input.length > 0) {
			handleResult();
		} else {
			alert('NO INPUT');
		}
	};

	return (
		<>
			<div
				className={`dark_background${focus ? ' appear' : ' disappear'}`}
			></div>
			<form
				className={`${showSearch ? 'appear' : 'disappear'}${
					result ? ' raise_search' : ''
				}`}
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
						autoComplete='off'
						disabled={disabled}
						onChange={handleInput}
						onFocus={handleFocus}
						onBlur={handleFocus}
					/>
					<button type='button' className='search_submit' onClick={checkInput}>
						<img
							src='src/assets/misc/magnifying-glass-9.svg'
							className='search_icon'
							alt='magnifying glass'
						/>
					</button>
				</div>
				{/* <Autofill /> */}
			</form>
		</>
	);
}
