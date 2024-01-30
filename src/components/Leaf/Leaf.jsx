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
	turnResult,
	incrementTurnResult,
	decrementTurnResult,
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
				}${turnResult > 0 ? ' flip-leaf_open' : ' flip-leaf_close'}`}
			>
				{content(
					handleTurnPage,
					handleSeekMonster,
					handleFlip,
					turnAndSeek,
					undoTurnAndSeek,
					turnResult,
					incrementTurnResult,
					decrementTurnResult
				)}
			</div>
			<div
				className={`book-leaf-back${open ? '' : ' hidden'}${
					seekMonster ? ' hidden' : ''
				}${turnResult ? ' flip-leaf_open_back' : ' flip-leaf_close'}`}
			></div>
			<div className={`${seekMonster ? 'loading-animation' : 'hidden'}`}></div>
		</>
	);
}
