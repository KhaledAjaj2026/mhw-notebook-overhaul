import React, { useState } from 'react';
import './Leaf.css';

export default function Leaf({ open, id, content, flip, handler }) {
	const [search, setSearch] = new useState(false);
	const handleSearch = () => setSearch(!search);

	return (
		<>
			<div
				id={id}
				className={`book-leaf${open ? '' : ' hidden'}${
					flip ? ' flip-leaf_open' : ' flip-leaf_close'
				}`}
			>
				{content(handler, handleSearch)}
				<div className={`${search ? 'loading-animation' : ''}`}></div>
			</div>
			<div
				className={`book-leaf-back${open ? '' : ' hidden'}${
					flip ? ' flip-leaf_open_back' : ' flip-leaf_close'
				}`}
			></div>
		</>
	);
}
