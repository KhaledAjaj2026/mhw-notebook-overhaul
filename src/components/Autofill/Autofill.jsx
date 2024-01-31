import React from 'react';
import monsters from '../../data/monsters.json';
import './Autofill.css';

export default function Autofill({ input }) {
	const filteredMonsters = monsters.monsterNames.filter((m) =>
		m.toUpperCase().includes(input.toUpperCase())
	);

	const autofillItems = filteredMonsters.map((m) => (
		<li key={filteredMonsters.indexOf(m)}>{m}</li>
	));

	return (
		<div
			id='autofill-container'
			style={{
				display: `${input ? 'block' : 'none'}`,
				height: `${autofillItems.length > 4 ? '14rem' : 'max-content'}`,
			}}
		>
			<ul>{autofillItems}</ul>
		</div>
	);
}
