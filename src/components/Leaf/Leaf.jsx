import React from 'react';
import './Leaf.css';

export default function Leaf({
	open,
	content,
	id,
	turnPage,
	seekMonster,
	handleTurnPage,
	handleSeekMonster,
	handleFlip,
}) {
	return (
		<>
			<div
				id={id}
				className={`book-leaf${open ? '' : ' hidden'}${
					turnPage ? ' flip-leaf_open' : ' flip-leaf_close'
				}`}
			>
				{content(handleTurnPage, handleSeekMonster, handleFlip)}
				<div className={`${seekMonster ? 'loading-animation' : ''}`}></div>
			</div>
			<div
				className={`book-leaf-back${open ? '' : ' hidden'}${
					turnPage ? ' flip-leaf_open_back' : ' flip-leaf_close'
				}`}
			></div>
		</>
	);
}
