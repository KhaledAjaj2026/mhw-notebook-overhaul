import React from 'react';
import './Leaf.css';

export default function Leaf({ open, id, content, flip, handler }) {
	return (
		<>
			<div
				id={id}
				className={`book-leaf${open ? '' : ' hidden'}${
					flip ? ' flip-leaf_open' : ' flip-leaf_close'
				}`}
			>
				{content(handler)}
			</div>
			<div
				className={`book-leaf-back${open ? '' : ' hidden'}${
					flip ? ' flip-leaf_open_back' : ' flip-leaf_close'
				}`}
			></div>
		</>
	);
}
