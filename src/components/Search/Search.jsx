import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Autocomplete from '@mui/material/Autocomplete';
import Input from '@mui/material/Input';
import './Search.css';

const monsters = [
	{ label: 'Great Jagras' },
	{ label: 'Kulu-Ya-Ku' },
	{ label: 'Pukei-Pukei' },
	{ label: 'Barroth' },
	{ label: 'Jyuratodus' },
	{ label: 'Tobi-Kadachi' },
	{ label: 'Anjanath' },
	{ label: 'Azure Rathalos' },
	{ label: 'Bazelgeuse' },
	{ label: 'Behemoth' },
	{ label: 'Deviljho' },
	{ label: 'Diablos' },
	{ label: 'Black Diablos' },
	{ label: 'Dodogama' },
	{ label: 'Great Girros' },
	{ label: 'Kirin' },
	{ label: 'Kulve Taroth' },
	{ label: 'Kushala Daora' },
	{ label: 'Lavasioth' },
	{ label: 'Legiana' },
	{ label: 'Lunastra' },
	{ label: 'Nergigante' },
	{ label: 'Odogaron' },
	{ label: 'Paolumu' },
	{ label: 'Radobaan' },
	{ label: 'Rathalos' },
	{ label: 'Rathian' },
	{ label: 'Pink Rathian' },
	{ label: 'Teostra' },
	{ label: 'Tzitzi-Ya-Ku' },
	{ label: 'Uragaan' },
	{ label: 'Vaal Hazak' },
	{ label: "Xeno'jiiva" },
	{ label: 'Zorah Magdaros' },
	{ label: 'Leshen' },
	{ label: 'Ancient Leshen' },
	{ label: "Safi'jiiva" },
	{ label: 'Stygian Zinogre' },
	{ label: 'Rajang' },
	{ label: 'Viper Tobi-Kadachi' },
	{ label: 'Namielle' },
	{ label: 'Zinogre' },
];

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
			handleInput('');
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
					<Autocomplete
						id='monster-search'
						options={monsters}
						disabled={disabled}
						onChange={(event, value) => handleInput(value.label)}
						onInput={() => handleInput(event.target.value)}
						freeSolo={true}
						onFocus={handleFocus}
						onBlur={handleFocus}
						getOptionLabel={(option) => option.label}
						isOptionEqualToValue={(option, value) =>
							option.label === value.label
						}
						renderOption={(props, option) => (
							<Box
								component='li'
								sx={{
									fontFamily: "'Linden Hill', serif",
									fontSize: '1.5rem',
									letterSpacing: '2px',
								}}
								{...props}
							>
								{option.label}
							</Box>
						)}
						renderInput={(params) => (
							<div ref={params.InputProps.ref}>
								<input
									type='text'
									name='monster-search'
									placeholder='E.g. Anjanath'
									autoComplete='off'
									{...params.inputProps}
								/>
							</div>
						)}
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
