import React from 'react';
import './Autofill.css';

export default function Autofill({ show }) {
	return (
		<div
			id='autofill-container'
			style={{ display: `${show ? 'block' : 'none'}` }}
		>
			<p>Ancient Leshen</p>
			<hr />
			<p>Anjanath</p>
			<hr />
			<p>Azure Rathalos</p>
		</div>
	);
}
