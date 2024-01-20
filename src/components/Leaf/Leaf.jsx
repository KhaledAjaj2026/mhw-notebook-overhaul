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
		if (turnPage === undefined) {
			handleTurnPage();
			setTimeout(handleSeekMonster, 800);
			setTimeout(handleFlip, 2800);
		} else {
			handleSeekMonster();
			setTimeout(handleFlip, 2000);
		}
	};

	const undoTurnAndSeek = () => {
		if (turnPage === undefined) {
			handleFlip();
			setTimeout(handleSeekMonster, 800);
		}
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
					undoTurnAndSeek
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
