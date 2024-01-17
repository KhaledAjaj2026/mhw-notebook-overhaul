import React, { useState } from 'react';
import './Leaf.css';

export default function Leaf({ open, content }) {
	const [flip, setFlip] = new useState(false);
	const handleFlip = () => setFlip(!flip);

	return (
		<div
			className={`book-leaf${open ? '' : ' hidden'}${flip ? ' flip-open' : ''}`}
		>
			{content()}
		</div>
	);
}
