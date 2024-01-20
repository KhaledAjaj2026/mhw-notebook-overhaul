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
	const turnAndSeek = () => {
		handleSeekMonster();
		setTimeout(handleFlip, 2000);
		handleSeekMonster();
	};

	return (
		<>
			<div
				id={id}
				className={`book-leaf${open ? '' : ' hidden'}${
					seekMonster ? ' disappear' : ''
				}${turnPage ? ' flip-leaf_open' : ' flip-leaf_close'}`}
			>
				{content(
					handleTurnPage,
					handleSeekMonster,
					handleFlip,
					turnAndSeek,
					seekMonster
				)}
			</div>
			<div
				className={`book-leaf-back${open ? '' : ' hidden'}${
					seekMonster ? ' hidden' : ''
				}${turnPage ? ' flip-leaf_open_back' : ' flip-leaf_close'}`}
			></div>
			<div className={`${seekMonster ? 'loading-animation' : 'hidden'}`}></div>
		</>
	);
}
