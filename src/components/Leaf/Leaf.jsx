import React, { useState } from 'react';
import './Leaf.css';

export default function Leaf({ open, id, content }) {
	const [flip, setFlip] = new useState(false);
	const handleFlip = () => setFlip(!flip);

	return (
		<>
			<div
				id={id}
				className={`book-leaf${open ? '' : ' hidden'}${
					flip ? ' flip-open' : ''
				}`}
			>
				{content(handleFlip)}
			</div>
			<div className={`book-leaf-back${open ? ' flip-open' : ' hidden'}`}></div>
		</>
	);
}
