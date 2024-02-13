import React, { useState } from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import { createFilterOptions } from '@mui/material/Autocomplete';
import './Search.css';

/** Location of directory for monster icon images. */
const monsterIconsLocation = '/src/assets/monster-icons/';

/** MUI Autocomplete options
 * @property {string} label - monster name
 * @property {string} icon - monsterIconsLocation concatenated with monster-specific filename.
 */
const monsters = [
	{
		label: 'Great Jagras',
		icon: monsterIconsLocation + 'Great_Jagras_Icon.webp',
	},
	{ label: 'Kulu-Ya-Ku', icon: monsterIconsLocation + 'Kulu-Ya-Ku_Icon.webp' },
	{
		label: 'Pukei-Pukei',
		icon: monsterIconsLocation + 'Pukei-Pukei_Icon.webp',
	},
	{ label: 'Barroth', icon: monsterIconsLocation + 'Barroth_Icon.webp' },
	{ label: 'Jyuratodus', icon: monsterIconsLocation + 'Jyuratodus_Icon.webp' },
	{
		label: 'Tobi-Kadachi',
		icon: monsterIconsLocation + 'Tobi-Kadachi_Icon.webp',
	},
	{ label: 'Anjanath', icon: monsterIconsLocation + 'Anjanath_Icon.webp' },
	{
		label: 'Azure Rathalos',
		icon: monsterIconsLocation + 'Azure_Rathalos_Icon.webp',
	},
	{ label: 'Bazelgeuse', icon: monsterIconsLocation + 'Bazelgeuse_Icon.webp' },
	{ label: 'Behemoth', icon: monsterIconsLocation + 'Behemoth_Icon.webp' },
	{ label: 'Deviljho', icon: monsterIconsLocation + 'Deviljho_Icon.webp' },
	{ label: 'Diablos', icon: monsterIconsLocation + 'Diablos_Icon.webp' },
	{
		label: 'Black Diablos',
		icon: monsterIconsLocation + 'Black_Diablos_Icon.webp',
	},
	{ label: 'Dodogama', icon: monsterIconsLocation + 'Dodogama_Icon.webp' },
	{
		label: 'Great Girros',
		icon: monsterIconsLocation + 'Great_Girros_Icon.webp',
	},
	{ label: 'Kirin', icon: monsterIconsLocation + 'Kirin_Icon.webp' },
	{
		label: 'Kulve Taroth',
		icon: monsterIconsLocation + 'Kulve_Taroth_Icon.webp',
	},
	{
		label: 'Kushala Daora',
		icon: monsterIconsLocation + 'Kushala_Daora_Icon.webp',
	},
	{ label: 'Lavasioth', icon: monsterIconsLocation + 'Lavasioth_Icon.webp' },
	{ label: 'Legiana', icon: monsterIconsLocation + 'Legiana_Icon.webp' },
	{ label: 'Lunastra', icon: monsterIconsLocation + 'Lunastra_Icon.webp' },
	{ label: 'Nergigante', icon: monsterIconsLocation + 'Nergigante_Icon.webp' },
	{ label: 'Odogaron', icon: monsterIconsLocation + 'Odogaron_Icon.webp' },
	{ label: 'Paolumu', icon: monsterIconsLocation + 'Paolumu_Icon.webp' },
	{ label: 'Radobaan', icon: monsterIconsLocation + 'Radobaan_Icon.webp' },
	{ label: 'Rathalos', icon: monsterIconsLocation + 'Rathalos_Icon.webp' },
	{ label: 'Rathian', icon: monsterIconsLocation + 'Rathian_Icon.webp' },
	{
		label: 'Pink Rathian',
		icon: monsterIconsLocation + 'Pink_Rathian_Icon.webp',
	},
	{ label: 'Teostra', icon: monsterIconsLocation + 'Teostra_Icon.webp' },
	{
		label: 'Tzitzi-Ya-Ku',
		icon: monsterIconsLocation + 'Tzitzi-Ya-Ku_Icon.webp',
	},
	{ label: 'Uragaan', icon: monsterIconsLocation + 'Uragaan_Icon.webp' },
	{ label: 'Vaal Hazak', icon: monsterIconsLocation + 'Vaal_Hazak_Icon.webp' },
	{ label: "Xeno'jiiva", icon: monsterIconsLocation + 'Xenojiiva_Icon.webp' },
	{
		label: 'Zorah Magdaros',
		icon: monsterIconsLocation + 'Zorah_Magdaros_Icon.webp',
	},
	{ label: 'Leshen', icon: monsterIconsLocation + 'Leshen_Icon.webp' },
	{
		label: 'Ancient Leshen',
		icon: monsterIconsLocation + 'Ancient_Leshen_Icon.webp',
	},
	{ label: "Safi'jiiva", icon: monsterIconsLocation + 'Safijiiva_Icon.webp' },
	{
		label: 'Stygian Zinogre',
		icon: monsterIconsLocation + 'Stygian_Zinogre_Icon.webp',
	},
	{ label: 'Rajang', icon: monsterIconsLocation + 'Rajang_Icon.webp' },
	{
		label: 'Viper Tobi-Kadachi',
		icon: monsterIconsLocation + 'Viper_Tobi-Kadachi_Icon.webp',
	},
	{ label: 'Namielle', icon: monsterIconsLocation + 'Namielle_Icon.webp' },
	{ label: 'Zinogre', icon: monsterIconsLocation + 'Zinogre_Icon.webp' },
];

// MUI Autocomplete filter options - matches query only from start.
const filterOptions = createFilterOptions({
	matchFrom: 'start',
	stringify: (option) => option.label,
});

export default function Search({
	showSearch,
	input,
	handleInput,
	result,
	handleResult,
	disabled,
}) {
	/** focus - check if Search component is focused or blurred. */
	const [focus, setFocus] = new useState(false);
	const handleFocus = () => setFocus(!focus);

	/** Measure input length; show result if > 0, alert if <= 0. */
	const checkInput = () => {
		if (input.length > 0) {
			handleResult(input);
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
					result.name === '' ? '' : ' raise_search'
				}`}
			>
				<label htmlFor='monster-search' className='search_label'>
					Search for a monster below
				</label>
				<div className='search-container'>
					<Autocomplete
						id='monster-search'
						options={monsters}
						disabled={disabled}
						onChange={(event, value) => (value ? handleInput(value.label) : '')}
						onInput={(e) => handleInput(e.target.value)}
						filterOptions={filterOptions}
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
								<img
									src={option.icon}
									alt=''
									className='autocomplete-monster_icon'
									loading='lazy'
								/>
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
			</form>
		</>
	);
}
